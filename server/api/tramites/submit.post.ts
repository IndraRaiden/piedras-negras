import { createTransport } from 'nodemailer'
import { getRequestIP } from 'h3'
import { useRuntimeConfig } from '#imports'

// --- Basic in-memory rate limiting (per server process) ---
// Stops bots from abusing this public mail form to fire off unlimited emails,
// which can spike CPU/outbound traffic and get the server flagged for abuse.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000 // 10 minutes
const RATE_LIMIT_MAX = 5 // max submissions per IP per window
const submissionLog = new Map<string, number[]>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (submissionLog.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  submissionLog.set(ip, recent)

  // Occasional cleanup so the map can't grow unbounded.
  if (submissionLog.size > 5000) {
    for (const [key, times] of submissionLog) {
      if (times.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) submissionLog.delete(key)
    }
  }

  return recent.length > RATE_LIMIT_MAX
}

export default defineEventHandler(async (event) => {
  // Rate-limit BEFORE the try block so the 429 isn't swallowed and turned into a 500.
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (isRateLimited(ip)) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Too Many Requests',
      message: 'Demasiadas solicitudes. Por favor, intenta de nuevo en unos minutos.'
    })
  }

  try {
    const config = useRuntimeConfig()
    const body = await readBody(event)

    // Configure nodemailer
    const transporter = createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false,
      auth: {
        user: config.emailUser,
        pass: config.emailPassword
      },
      tls: {
        ciphers: 'SSLv3'
      }
    })

    // Format the date
    const date = new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })

    // Prepare email content with better formatting
    let emailContent = `Nuevo Registro de Trámite - Persona Física\n`
    emailContent += `Fecha: ${date}\n\n`
    emailContent += `Información del Registro:\n`
    emailContent += `==========================================\n\n`
    
    Object.entries(body).forEach(([key, value]) => {
      if (key !== 'documentos') {
        emailContent += `${key.toUpperCase()}: ${value}\n`
      }
    })

    // Send email
    await transporter.sendMail({
      from: config.emailUser,
      to: config.public.formSubmissionEmail,
      subject: `Nuevo Registro de Trámite - ${body.nombre || 'Persona Física'}`,
      text: emailContent,
    })

    return { success: true, message: 'Formulario enviado correctamente' }
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    throw createError({
      statusCode: 500,
      message: 'Error al procesar el formulario'
    })
  }
})
