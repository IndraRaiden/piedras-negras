import { defineEventHandler, getMethod } from 'h3'
import fs from 'fs'
import path from 'path'
import { stat } from 'fs/promises'

export default defineEventHandler(async (event) => {
  // Get the filename from the route parameter
  const filename = decodeURIComponent(event.context.params?.filename || '')
  
  if (!filename) {
    event.node.res.statusCode = 400
    return { error: 'Filename is required' }
  }

  // Block path traversal: only allow a plain filename, never a path.
  if (filename.includes('/') || filename.includes('\\') || filename.includes('..')) {
    event.node.res.statusCode = 400
    return { error: 'Invalid filename' }
  }

  try {
    // Construct the path to the PDF file
    const actasRoot = path.resolve(process.cwd(), 'public', 'files', 'actas')
    const filePath = path.resolve(actasRoot, filename)

    // Make sure the resolved path is still inside the actas directory.
    if (filePath !== actasRoot && !filePath.startsWith(actasRoot + path.sep)) {
      event.node.res.statusCode = 400
      return { error: 'Invalid filename' }
    }

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`)
      event.node.res.statusCode = 404
      return { error: `File ${filename} not found` }
    }
    
    // For HEAD requests, just return the headers without the file content
    if (getMethod(event) === 'HEAD') {
      const stats = await stat(filePath)
      event.node.res.setHeader('Content-Type', 'application/pdf')
      event.node.res.setHeader('Content-Length', stats.size)
      event.node.res.setHeader('Accept-Ranges', 'bytes')
      event.node.res.setHeader('Cache-Control', 'public, max-age=86400')
      event.node.res.statusCode = 200
      return ''
    }
    
    // Set the appropriate headers for GET requests
    event.node.res.setHeader('Content-Type', 'application/pdf')
    event.node.res.setHeader('Cache-Control', 'public, max-age=86400')
    event.node.res.setHeader('Content-Disposition', `inline; filename="${encodeURIComponent(filename)}"`) 
    
    // Stream the file directly to the response
    const fileStream = fs.createReadStream(filePath)
    
    // Handle stream errors
    fileStream.on('error', (err) => {
      console.error(`Error streaming file ${filename}:`, err)
      if (!event.node.res.headersSent) {
        event.node.res.statusCode = 500
        event.node.res.end(JSON.stringify({ error: 'Error streaming file' }))
      }
    })
    
    return fileStream.pipe(event.node.res)
  } catch (err) {
    const error = err as Error
    console.error(`Error serving PDF file ${filename}:`, error)
    event.node.res.statusCode = 500
    return { error: 'Internal server error' }
  }
})
