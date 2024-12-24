'use client'

import { useState, useEffect } from 'react'
import { fetchSubstackPosts, SubstackPost } from '../utils/fetchSubstackPosts'

const SubstackPosts = () => {
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
          <div className="text-white" dangerouslySetInnerHTML={{ __html: post.description }} />
        </article>
      ))}
    </section>
  )
}

export default SubstackPosts

