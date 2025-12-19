import { defineEventHandler, getHeader, getMethod, send, setHeader } from 'h3'
import { createReadStream, existsSync } from 'node:fs'
import { stat } from 'node:fs/promises'
import path from 'node:path'

function getContentType(filePath: string) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.pdf') return 'application/pdf'
  if (ext === '.png') return 'image/png'
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg'
  if (ext === '.webp') return 'image/webp'
  if (ext === '.svg') return 'image/svg+xml'
  return 'application/octet-stream'
}

function safeJoinFilesRoot(relativePath: string) {
  const filesRoot = path.resolve(process.cwd(), 'public', 'files')
  const normalized = relativePath.split('/').filter(Boolean).join(path.sep)
  const resolved = path.resolve(filesRoot, normalized)
  if (!resolved.startsWith(filesRoot + path.sep) && resolved !== filesRoot) {
    return null
  }
  return { filesRoot, resolved }
}

export default defineEventHandler(async (event) => {
  const method = getMethod(event)
  if (method !== 'GET' && method !== 'HEAD') {
    event.node.res.statusCode = 405
    return { error: 'Method not allowed' }
  }

  const rawParam = (event.context.params?.path as string | string[] | undefined) ?? ''
  const relativePath = Array.isArray(rawParam) ? rawParam.join('/') : rawParam
  let decoded = ''
  try {
    decoded = decodeURIComponent(relativePath)
  } catch {
    event.node.res.statusCode = 400
    return { error: 'Invalid path encoding' }
  }

  const joined = safeJoinFilesRoot(decoded)
  if (!joined) {
    event.node.res.statusCode = 400
    return { error: 'Invalid path' }
  }

  const { resolved: filePath } = joined

  if (!existsSync(filePath)) {
    event.node.res.statusCode = 404
    return { error: 'File not found' }
  }

  const s = await stat(filePath)
  const totalSize = s.size

  const contentType = getContentType(filePath)
  setHeader(event, 'Content-Type', contentType)
  setHeader(event, 'Content-Encoding', 'identity')
  setHeader(event, 'Accept-Ranges', 'bytes')
  setHeader(event, 'Cache-Control', 'public, max-age=86400, no-transform')
  if (contentType === 'application/pdf') {
    setHeader(event, 'Content-Disposition', `inline; filename="${encodeURIComponent(path.basename(filePath))}"`)
  }

  const range = getHeader(event, 'range')

  // HEAD: just headers
  if (method === 'HEAD') {
    setHeader(event, 'Content-Length', String(totalSize))
    event.node.res.statusCode = 200
    return ''
  }

  // Range support (required by most in-browser PDF viewers)
  if (typeof range === 'string' && range.startsWith('bytes=')) {
    const m = /^bytes=(\d*)-(\d*)$/.exec(range)
    if (m) {
      const start = m[1] ? Number(m[1]) : 0
      const end = m[2] ? Number(m[2]) : totalSize - 1

      if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= totalSize) {
        event.node.res.statusCode = 416
        setHeader(event, 'Content-Range', `bytes */${totalSize}`)
        return ''
      }

      const clampedEnd = Math.min(end, totalSize - 1)
      const chunkSize = clampedEnd - start + 1

      event.node.res.statusCode = 206
      setHeader(event, 'Content-Range', `bytes ${start}-${clampedEnd}/${totalSize}`)
      setHeader(event, 'Content-Length', String(chunkSize))

      return send(event, createReadStream(filePath, { start, end: clampedEnd }))
    }
  }

  // Full file
  event.node.res.statusCode = 200
  return send(event, createReadStream(filePath))
})
