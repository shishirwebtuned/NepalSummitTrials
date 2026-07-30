import Image from 'next/image'
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

export const RelatedBlogs = ({ blogs }: { blogs: Blog[] }) => {
  if (blogs.length === 0) return null

  const formatDate = (date: string | null) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long', day: 'numeric', year: 'numeric',
    })
  }

  return (
    <div className="lg:px-24 md:px-16 px-8 py-12 flex flex-col w-full gap-10 bg-[#ACC0CC]/20">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
          <p className="text-[#0D3A48] jakarta font-medium text-sm md:text-[15px] lg:text-base">
            Recommendation
          </p>
          <div className="bg-[#2A78A6] w-[40px] h-[2px]" />
          <div className="ml-4">
            <Image
              src="/images/icons/765737_09 1.png"
              alt="Mountain logo"
              width={105}
              height={35}
            />
          </div>
        </div>
        <h2 className="text-[20px] md:text-[24px] lg:text-[30px] text-[#0D3A48] gloock leading-tight mt-2">
          Related Blogs
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {blogs.map((blog) => (
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
            author={false}
          />
        ))}
      </div>
    </div>
  )
}