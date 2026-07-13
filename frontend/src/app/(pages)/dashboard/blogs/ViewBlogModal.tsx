// app/(pages)/dashboard/blogs/ViewBlogModal.tsx
'use client'
import { TbX, TbCalendar, TbTag, TbEye } from 'react-icons/tb'

type Blog = {
    id: string
    title: string
    slug: string
    content: string
    excerpt: string | null
    cover_image: string | null
    category: string
    tags: string[] | null
    status: 'draft' | 'published'
    views: number
    created_at: string
    published_at: string | null
}

const statusStyle: Record<string, string> = {
    published: 'bg-green-50 text-green-800',
    draft: 'bg-amber-50 text-amber-800',
}

export default function ViewBlogModal({ blog, onClose }: { blog: Blog; onClose: () => void }) {
    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-100 w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-xl jakarta">

                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${statusStyle[blog.status]}`}>
                        {blog.status}
                    </span>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 transition">
                        <TbX className="text-lg" />
                    </button>
                </div>

                {/* Cover image */}
                {blog.cover_image && (
                    <div className="h-56 w-full overflow-hidden">
                        <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Content */}
                <div className="p-6">
                    <h2 className="gloock text-2xl text-[#0d1f2d] mb-3">{blog.title}</h2>

                    <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                        <span className="flex items-center gap-1.5">
                            <TbCalendar /> {formatDate(blog.created_at)}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <TbEye /> {blog.views.toLocaleString()} views
                        </span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-full">
                            {blog.category}
                        </span>
                    </div>

                    {blog.tags && blog.tags.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap mb-5">
                            <TbTag className="text-slate-300 text-sm" />
                            {blog.tags.map((tag) => (
                                <span key={tag} className="text-[11px] font-medium text-[#0A5482] bg-blue-50 px-2.5 py-1 rounded-full">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {blog.excerpt && (
                        <p className="text-sm text-slate-500 italic border-l-2 border-slate-100 pl-4 mb-5">
                            {blog.excerpt}
                        </p>
                    )}

                    <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {blog.content}
                    </div>
                </div>
            </div>
        </div>
    )
}