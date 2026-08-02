'use client'

import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import DOMPurify from 'isomorphic-dompurify'

type Blog = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  cover_image: string | null
  category: string
  tags: string[] | null
  published_at: string | null
  meta_title: string | null
  meta_description: string | null
  views: number
}

export const BlogDescription = ({ blog }: { blog: Blog }) => {
  const formatDate = (date: string | null) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  return (
    <div className="flex md:flex-row flex-col justify-center lg:gap-12 md:gap-10 gap-4 items-start md:px-16 px-8 lg:px-24 md:pt-24 pt-16 sm:pt-20 lg:pt-10 pb-10 text-gray-800">

      {/* Date and Category */}
      <div className="flex justify-center shrink-0">
        <div className="text-sm font-semibold lora flex flex-row items-center gap-4 text-gray-500 mb-4">
          <span>{formatDate(blog.published_at)}</span>
          <div className="w-10 h-[1.8px] bg-gray-300" />
          <span>{blog.category}</span>
        </div>
      </div>

      <div className="jakarta lg:text-base md:text-[15px] text-sm leading-relaxed w-full min-w-0 flex-1">

        {/* Content — sanitized HTML from the rich text editor */}
        <div
          className="mb-6 prose prose-sm md:prose-base max-w-none break-words
            [&_h1]:text-xl [&_h1]:font-bold [&_h1]:mt-4 [&_h1]:mb-2
            [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-3 [&_h2]:mb-2
            [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5
            [&_blockquote]:border-l-4 [&_blockquote]:border-slate-200 [&_blockquote]:pl-3 [&_blockquote]:italic [&_blockquote]:text-slate-500
            [&_img]:rounded-md [&_img]:max-w-full [&_img]:h-auto
            [&_a]:text-[#0A5482] [&_a]:underline [&_a]:break-all"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
        />

        {/* Cover image if exists */}
        {blog.cover_image && (
          <div className="mb-6">
            <img
              src={blog.cover_image}
              alt={blog.title}
              className="rounded-md object-cover w-full h-72"
            />
          </div>
        )}

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="w-full flex flex-row flex-wrap justify-start gap-4 pt-6 mb-12">
            {blog.tags.map((tag, index) => (
              <div
                key={index}
                className="px-3 py-[6px] bg-white border border-gray-300 text-[#6C757D] rounded-md font-semibold uppercase lg:text-xs md:text-[11px] text-[10px]"
              >
                #{tag}
              </div>
            ))}
          </div>
        )}

        {/* Share section */}
        <div className="flex items-center justify-between border-t pt-6">
          <div className="flex items-center gap-4">
            <p className="text-sm font-semibold lora text-[#343A40]">
              Share this post
            </p>
          </div>
          <div className="flex gap-4 text-gray-500 text-lg">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`/blog/${blog.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`/blog/${blog.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:text-blue-700 cursor-pointer" />
            </a>

            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`/blog/${blog.slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}