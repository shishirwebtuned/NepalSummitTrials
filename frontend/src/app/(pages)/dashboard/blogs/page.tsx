// app/(pages)/dashboard/blogs/page.tsx
import { getBlogs } from './actions'
import BlogsTable from './BlogsTable'

export default async function BlogsPage() {
    const blogs = await getBlogs()

    return <BlogsTable blogs={blogs} />
}