import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const blogDir = path.join(process.cwd(), 'blog-contents')
  const files = fs.readdirSync(blogDir)

  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const content = fs.readFileSync(path.join(blogDir, file), 'utf8')
      const [, frontMatter, markdown] = content.split('---')
      const metadata = frontMatter.split('\n').reduce((acc, line) => {
        const [key, value] = line.split(':')
        if (key && value) {
          acc[key.trim()] = value.trim()
        }
        return acc
      }, {} as Record<string, string>)

      return {
        title: metadata.title || 'Untitled',
        date: metadata.date || 'No date',
        content: markdown.trim()
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return NextResponse.json(posts)
}

