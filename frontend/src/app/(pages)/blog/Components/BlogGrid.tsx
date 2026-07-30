'use client'
import { useState } from 'react'
import { BlogCard } from './BlogCard'

type Blog = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  cover_image: string | null
  category: string
  published_at: string | null
}

const categories = [
  'All',
  'Trekking',
  'Guide',
  'Tips',
  'Story',
  'News',
]

const ITEMS_PER_PAGE = 8

export default function BlogGrid({ blogs }: { blogs: Blog[] }) {
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = active === 'All'
    ? blogs
    : blogs.filter((b) => b.category === active)

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleCategory = (cat: string) => {
    setActive(cat)
    setPage(1) // reset to page 1 on filter change
  }

  const formatDate = (date: string | null) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
    })
  }

  return (
    <section className="px-8 md:px-16 lg:px-24 pb-10 lg:pt-10 md:pt-18 pt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="lg:text-4xl md:text-3xl text-2xl tracking-wider font-medium text-gray-900 gloock">
          Popular topics
        </h2>
      </div>

      <div className="flex flex-row justify-between w-full items-center mb-6">
        <div className="flex flex-wrap gap-x-3 gap-y-1 w-[80%]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`lg:text-sm md:text-[13px] jakarta font-semibold cursor-pointer text-xs px-2 py-1 rounded-full transition ${active === cat ? 'text-[#2A78A6]' : 'text-[#6B6B6B]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="text-[13px] text-end w-[20%] text-[#495057] hover:underline">
          View All
        </button>
      </div>

      {paginated.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-slate-400 text-sm">No posts in this category yet.</p>
        </div>
      ) : (
        <div className="grid pt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginated.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={{
                id: blog.id,
                slug: blog.slug,
                image: blog.cover_image || '/images/blog/default.jpg',
                title: blog.title,
                date: formatDate(blog.published_at),
                excerpt: blog.excerpt || '',
              }}
              author={false} // no author_image in schema — set true when you add guides/profiles join
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-10">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="lg:px-4 md:px-3 px-2 md:py-2 py-1 border rounded lg:text-sm md:text-[13px] text-[11px] hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          <div className="flex md:gap-2 gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6 rounded lg:text-sm md:text-[13px] text-xs border text-gray-700 ${page === n ? 'bg-[#2A78A6] text-white border-[#2A78A6]' : 'hover:bg-gray-100'
                  }`}
              >
                {n}
              </button>
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="lg:px-4 md:px-3 px-2 md:py-2 py-1 border rounded lg:text-sm md:text-[13px] text-[11px] hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  )
}