import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Topsection from '@/components/Topsection'
import { BlogDescription } from '../Components/BlogDescription'
import { RelatedBlogs } from '../Components/RelatedBlogs'

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ blogId: string }>
}) {
  const { blogId: slug } = await params
  const supabase = await createClient()
  console.log('SLUG FROM URL:', slug) // check terminal output

  // Fetch the blog post
  const { data: blog, error } = await supabase
    .from('blogs')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()


  if (error) {
    console.error('Supabase blog query error', error)
  }

  console.log('BLOG FOUND:', blog)
  console.log('SUPABASE ERROR:', error)

  if (!blog) notFound()

  // Increment views
  await supabase
    .from('blogs')
    .update({ views: (blog.views ?? 0) + 1 })
    .eq('id', blog.id)

  // Fetch related blogs — same category, exclude current
  const { data: related } = await supabase
    .from('blogs')
    .select('id, title, slug, excerpt, cover_image, category, published_at')
    .eq('status', 'published')
    .eq('category', blog.category)
    .neq('id', blog.id)
    .order('published_at', { ascending: false })
    .limit(4)

  return (
    <div>
      <Topsection
        title={blog.title}
        image={blog.cover_image || '/images/about/aboutbg.png'}
      />
      <BlogDescription blog={blog} />
      {related && related.length > 0 && (

        <RelatedBlogs blogs={related || []} />
      )}
    </div>
  )
}