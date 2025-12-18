export default defineEventHandler((event) => {
  const url = event.node.req.url
  
  if (url && url.includes('/files/') && url.toLowerCase().endsWith('.pdf')) {
    event.node.res.setHeader('Content-Type', 'application/pdf')
    event.node.res.setHeader('Content-Disposition', 'inline')
  }
})
