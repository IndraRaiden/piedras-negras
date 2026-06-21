import { defineEventHandler } from 'h3'
import { readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

export default defineCachedEventHandler(async () => {
  try {
    const dir = join(process.cwd(), 'public', 'files', 'diciembre')
    const entries = await readdir(dir, { withFileTypes: true })

    const files = [] as Array<{ name: string; size: number; mtime: string; url: string }>

    for (const entry of entries) {
      if (!entry.isFile()) continue
      const name = entry.name
      const filePath = join(dir, name)
      const s = await stat(filePath)
      files.push({
        name,
        size: s.size,
        mtime: s.mtime.toISOString(),
        url: `/files/diciembre/${encodeURIComponent(name)}`
      })
    }

    files.sort((a, b) => (a.mtime < b.mtime ? 1 : -1))

    return { files }
  } catch (e) {
    return { files: [] }
  }
}, {
  maxAge: 60, // re-scan the directory at most once per minute
  name: 'diciembre-list',
  getKey: () => 'diciembre-list'
})
