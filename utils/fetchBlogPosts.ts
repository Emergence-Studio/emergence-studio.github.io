import { marked } from 'marked'

export interface BlogPost {
  title: string
  content: string
  date: string
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/blog-posts')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const posts = await response.json()
    return posts.map((post: any) => ({
      ...post,
      content: marked(post.content)
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

