import { defineEventHandler } from 'h3'
import fs from 'fs'
import path from 'path'

export default defineEventHandler(async () => {
  try {
    // Path to the actas directory
    const actasDir = path.join(process.cwd(), 'public', 'files', 'actas')
    
    // Check if directory exists
    if (!fs.existsSync(actasDir)) {
      console.error(`Directory not found: ${actasDir}`)
      return { 
        error: 'Actas directory not found',
        files: []
      }
    }
    
    // Read all files in the directory
    const files = fs.readdirSync(actasDir)
      .filter(file => file.toLowerCase().endsWith('.pdf'))
      .map(file => ({
        name: file,
        path: `/api/actas/${encodeURIComponent(file)}`,
        // Extract metadata from filename
        metadata: extractMetadata(file)
      }))
    
    return { 
      files,
      count: files.length
    }
  } catch (err) {
    const error = err as Error
    console.error('Error reading actas directory:', error)
    return { 
      error: 'Failed to read actas directory',
      files: []
    }
  }
})

// Helper function to extract metadata from filename
function extractMetadata(filename: string) {
  // Example: "MPN 1502 CERAMIC MASTER DEL NORTE S DE RL DE CV_02262025_014307_opt-compressed.pdf"
  
  // Extract date if available (format: MMDDYYYY)
  const dateMatch = filename.match(/(\d{2})(\d{2})(\d{4})_/)
  const date = dateMatch ? {
    month: dateMatch[1],
    day: dateMatch[2],
    year: dateMatch[3],
    formatted: `${dateMatch[1]}/${dateMatch[2]}/${dateMatch[3]}`
  } : null
  
  // Extract document type (MPN or OP)
  const typeMatch = filename.match(/^(MPN|OP)\s+(\d+)/)
  const docType = typeMatch ? {
    type: typeMatch[1],
    number: typeMatch[2]
  } : null
  
  // Extract company name (everything between the document number and the date)
  let companyName = null
  if (typeMatch) {
    const afterDocNum = filename.substring(typeMatch[0].length).trim()
    const beforeDate = dateMatch ? afterDocNum.split('_')[0].trim() : afterDocNum
    companyName = beforeDate
  }
  
  return {
    date,
    docType,
    companyName
  }
}
