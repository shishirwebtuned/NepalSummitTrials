// app/(pages)/dashboard/blogs/[id]/edit/page.tsx
import { getBlog } from '../../actions'
import { notFound } from 'next/navigation'
import EditBlogForm from './EditBlogForm'

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    let blog
    try {
        blog = await getBlog(id)
    } catch {
        notFound()
    }

    if (!blog) notFound()

    return <EditBlogForm blog={blog} />
}