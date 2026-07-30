'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

interface Blog {
  id: string | number
  slug?: string
  image: string
  title: string
  date: string
  excerpt: string
  authorImage?: string
  author?: string
  role?: string
}

export const BlogCard: React.FC<{ blog: Blog; author?: boolean }> = ({
  blog,
  author = true,
}) => {
  const router = useRouter()

  const handleNavigate = () => {
    // navigate by slug if available, fall back to id
    router.push(`/blog/${blog.slug}`)
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <p className="text-sm text-gray-500 mb-1 lora border-t border-gray-200 pt-1">
          {blog.date}
        </p>
        <h3
          onClick={handleNavigate}
          className="lg:text-lg lora md:text-[17px] text-base font-semibold text-[#495057] cursor-pointer line-clamp-2 hover:text-[#2A78A6] ease-in-out duration-300 transition-all"
        >
          {blog.title}
        </h3>

        <p className="lg:text-sm md:text-[13px] text-xs jakarta text-gray-600 mt-1 line-clamp-4">
          {blog.excerpt}
        </p>
        {author && blog.authorImage && (
          <div className="flex items-center gap-2 mt-3">
            <img
              src={blog.authorImage}
              alt={blog.author}
              className="lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6 rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="text-xs jakarta font-semibold text-gray-800">{blog.author}</p>
              <p className="text-xs jakarta text-[#6C757D]">{blog.role}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}