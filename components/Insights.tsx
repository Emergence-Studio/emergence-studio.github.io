'use client'

import { useState, useEffect } from 'react'
import { Share2, Twitter, Linkedin } from 'lucide-react'
import { fetchSubstackPosts, SubstackPost } from '../utils/fetchSubstackPosts'

const Insights = () => {
  const [posts, setPosts] = useState<SubstackPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await fetchSubstackPosts()
        setPosts(fetchedPosts)
      } catch (err) {
        console.error('Error in SubstackPosts component:', err)
        setError('Failed to load Substack posts. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const sharePost = (platform: string, post: SubstackPost) => {
    const url = encodeURIComponent(post.url)
    const title = encodeURIComponent(post.title)
    let shareUrl = ''

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
      default:
        shareUrl = post.url
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer')
  }

  if (loading) {
    return <div className="text-white">Loading Substack posts...</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  if (posts.length === 0) {
    return <div className="text-white">No Substack posts found.</div>
  }

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6 text-white">Latest from Substack</h2>
      {posts.map((post, index) => (
        <article key={index} className="mb-8 bg-purple-800 bg-opacity-50 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">
            <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              {post.title}
            </a>
          </h3>
          <p className="text-sm text-purple-300 mb-4">{new Date(post.date).toLocaleDateString()}</p>
          <div className="text-white mb-4" dangerouslySetInnerHTML={{ __html: post.description }} />
          <div className="flex gap-2">
            <button
              onClick={() => sharePost('twitter', post)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-700 hover:bg-purple-600 transition-colors"
            >
              <Twitter size={16} />
              Share on X
            </button>
            <button
              onClick={() => sharePost('linkedin', post)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-700 hover:bg-purple-600 transition-colors"
            >
              <Linkedin size={16} />
              Share on LinkedIn
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(post.url)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-700 hover:bg-purple-600 transition-colors"
            >
              <Share2 size={16} />
              Copy Link
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Insights

