// app/(pages)/dashboard/blogs/BlogsTable.tsx
'use client'
import Link from 'next/link'
import { useState, useTransition } from 'react'
import { TbPlus, TbEdit, TbTrash, TbEye, TbSearch } from 'react-icons/tb'
import DeleteModal from './new/DeleteModal'
import { deleteBlog } from './actions'
import ViewBlogModal from './ViewBlogModal'
import toast from 'react-hot-toast'

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

export default function BlogsTable({ blogs }: { blogs: Blog[] }) {
    const [deleteTarget, setDeleteTarget] = useState<{ id: string; title: string } | null>(null)
    const [viewTarget, setViewTarget] = useState<Blog | null>(null)
    const [search, setSearch] = useState('')
    const [isPending, startTransition] = useTransition()

    const filtered = blogs.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase())
    )

    const published = blogs.filter((b) => b.status === 'published').length
    const drafts = blogs.filter((b) => b.status === 'draft').length

    const handleDelete = () => {
        if (!deleteTarget) return
        startTransition(async () => {
            try {
                await deleteBlog(deleteTarget.id)
                toast.success('Blog deleted successfully')
                setDeleteTarget(null)
            } catch (error) {
                toast.error('Failed to delete blog')
            }
        })
    }

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    return (
        <div className="space-y-4 jakarta overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[11px] md:text-[12px] tracking-widest text-[#0A5482] uppercase font-semibold mb-1">Content</p>
                    <h1 className="gloock text-xl md:text-2xl text-[#0d1f2d]">Blog Posts</h1>
                </div>
                <Link
                    href="/dashboard/blogs/new"
                    className="flex items-center gap-1.5 md:gap-2 bg-[#0A5482] hover:bg-[#083d61] transition text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 md:py-2.5 rounded-xl"
                >
                    <TbPlus className="text-xs md:text-base" /> New post
                </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    { label: 'Total posts', value: blogs.length },
                    { label: 'Published', value: published },
                    { label: 'Drafts', value: drafts },
                ].map(({ label, value }) => (
                    <div key={label} className="bg-white border border-slate-100 rounded-2xl px-2.5 md:px-4 py-2 md:py-3">
                        <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mb-1">{label}</p>
                        <p className="text-xl md:text-2xl font-semibold text-[#0d1f2d]/90 jakarta">{value}</p>
                    </div>
                ))}
            </div>

            {/* Table card */}
            <div className="bg-white rounded-2xl border border-slate-100">

                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row gap-3 p-3.5 md:p-5 border-b border-slate-50">
                    <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-xl px-2 md:px-3 py-2 bg-slate-50">
                        <TbSearch className="text-slate-400 text-sm md:text-base shrink-0" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search posts..."
                            className="bg-transparent text-xs md:text-sm text-slate-600 outline-none w-full placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* Empty state */}
                {filtered.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-sm text-slate-400 font-medium">No blog posts found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-50">
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Title</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden md:table-cell">Category</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Status</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden lg:table-cell">Views</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden lg:table-cell">Date</th>
                                    <th className="text-right text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((blog) => (
                                    <tr key={blog.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition">
                                        <td className="px-5 py-4">
                                            <p className="font-semibold text-[#0d1f2d] text-xs md:text-sm">{blog.title}</p>
                                            <p className="text-[10px] md:text-xs text-slate-400 mt-0.5 md:hidden">{blog.category} · {formatDate(blog.created_at)}</p>
                                        </td>
                                        <td className="px-5 py-4 hidden md:table-cell">
                                            <span className="text-[10px] md:text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                                                {blog.category}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`text-[9px] md:text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${statusStyle[blog.status]}`}>
                                                {blog.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 hidden lg:table-cell">
                                            <div className="flex items-center gap-1.5 text-slate-500 text-[10px] md:text-xs font-medium">
                                                <TbEye className="text-slate-400" />
                                                {blog.views.toLocaleString()}
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 hidden lg:table-cell text-[10px] md:text-xs text-slate-400 font-medium">{formatDate(blog.created_at)}</td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => setViewTarget(blog)}
                                                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
                                                >
                                                    <TbEye className="text-xs md:text-sm" />
                                                </button>
                                                <Link
                                                    href={`/dashboard/blogs/${blog.id}/edit`}
                                                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 flex items-center justify-center transition cursor-pointer"
                                                >
                                                    <TbEdit className="text-xs md:text-sm" />
                                                </Link>
                                                <button
                                                    onClick={() => setDeleteTarget({ id: blog.id, title: blog.title })}
                                                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 flex items-center justify-center transition cursor-pointer"
                                                >
                                                    <TbTrash className="text-xs md:text-sm" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Footer */}
                <div className="px-5 py-3 border-t border-slate-50 flex items-center justify-between">
                    <p className="text-[10px] md:text-xs text-slate-400 font-medium">Showing {filtered.length} of {blogs.length} posts</p>
                </div>
            </div>

            {deleteTarget && (
                <DeleteModal
                    title={deleteTarget.title}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                />
            )}

            {viewTarget && (
                <ViewBlogModal blog={viewTarget} onClose={() => setViewTarget(null)} />
            )}
        </div>
    )
}