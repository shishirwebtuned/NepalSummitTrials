// app/(pages)/dashboard/blogs/new/page.tsx
'use client'
import { useState, useTransition } from 'react'
import Link from 'next/link'
import { TbArrowLeft, TbPhoto, TbX, TbLoader2 } from 'react-icons/tb'
import { createBlog } from '../actions'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import MasterRichTextEditor from '@/components/MasterRichTextEditor'

export default function NewBlogPage() {
    const [coverPreview, setCoverPreview] = useState<string | null>(null)
    const [coverFile, setCoverFile] = useState<File | null>(null)
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [content, setContent] = useState('')
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<string | null>(null)
    const [pendingStatus, setPendingStatus] = useState<'draft' | 'published' | null>(null)

    const router = useRouter()
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setCoverFile(file)
            setCoverPreview(URL.createObjectURL(file))
        }
    }

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setTitle(value)
        setSlug(value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-'))
    }

    const submitWithStatus = (status: 'draft' | 'published') => (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formEl = e.currentTarget
        const formData = new FormData(formEl)
        formData.set('status', status)
        formData.set('content', content)
        if (coverFile) {
            formData.set('cover_image', coverFile)
        }

        setPendingStatus(status)
        setError(null)
        startTransition(async () => {
            try {
                await createBlog(formData)
                toast.success(status === 'published' ? 'Blog published successfully!' : 'Draft saved successfully!')
                setTimeout(() => router.push('/dashboard/blogs'), 600)


            } catch (err: any) {
                setError(err.message)
                toast.error(err.message || 'Failed to save blog')

                setPendingStatus(null)
            }
        })
    }

    return (
        <form onSubmit={submitWithStatus('draft')} className="space-y-5 jakarta">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        href="/dashboard/blogs"
                        className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition"
                    >
                        <TbArrowLeft className="text-base" />
                    </Link>
                    <div className="ml-3">
                        <p className="text-[11px] md:text-[12px] tracking-widest text-[#0A5482] uppercase font-semibold mb-0.5">Content</p>
                        <h1 className="gloock text-xl md:text-2xl text-[#0d1f2d]">New Blog Post</h1>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer disabled:opacity-50 flex items-center gap-2"
                    >
                        {isPending && pendingStatus === 'draft' && <TbLoader2 className="animate-spin" />} Save draft
                    </button>
                    <button
                        type="button"
                        disabled={isPending}
                        onClick={(e) => {
                            const form = e.currentTarget.closest('form')!
                            const fakeEvent = { currentTarget: form, preventDefault: () => { } } as any
                            submitWithStatus('published')(fakeEvent)
                        }}
                        className="px-4 py-2.5 rounded-xl bg-[#0A5482] hover:bg-[#083d61] transition text-white text-sm font-semibold cursor-pointer disabled:opacity-50 flex items-center gap-2"
                    >
                        {isPending && pendingStatus === 'published' && <TbLoader2 className="animate-spin" />} Publish
                    </button>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="lg:col-span-2 space-y-4">

                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Post title</label>
                        <input
                            name="title"
                            type="text"
                            required
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="Enter a compelling title..."
                            className="w-full text-lg font-semibold text-[#0d1f2d] outline-none placeholder:text-slate-300 placeholder:font-normal"
                        />
                        <div className="mt-3 pt-3 border-t border-slate-50">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Slug</label>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400">/blog/</span>
                                <input
                                    name="slug"
                                    type="text"
                                    required
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    placeholder="post-url-slug"
                                    className="flex-1 text-sm text-slate-600 outline-none placeholder:text-slate-300"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Excerpt (optional)</label>
                        <textarea
                            name="excerpt"
                            rows={2}
                            placeholder="Short summary shown in blog listings..."
                            className="w-full text-sm text-slate-600 outline-none resize-none placeholder:text-slate-300"
                        />
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">Content</label>
                        <MasterRichTextEditor
                            variant="full"
                            value={content}
                            onChange={setContent}
                            placeholder="Write your blog post here..."
                        />
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">Cover image</label>
                        {coverPreview ? (
                            <div className="relative rounded-xl overflow-hidden h-48">
                                <img src={coverPreview} alt="Cover" className="w-full h-full object-cover" />
                                <button
                                    type="button"
                                    onClick={() => { setCoverPreview(null); setCoverFile(null) }}
                                    className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-lg flex items-center justify-center transition"
                                >
                                    <TbX className="text-sm" />
                                </button>
                            </div>
                        ) : (
                            <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-[#0A5482] hover:bg-blue-50/30 transition group">
                                <TbPhoto className="text-3xl text-slate-300 group-hover:text-[#0A5482] transition mb-2" />
                                <p className="text-sm font-semibold text-slate-400 group-hover:text-[#0A5482] transition">Click to upload cover image</p>
                                <p className="text-xs text-slate-300 mt-1">PNG, JPG up to 5MB</p>
                                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                            </label>
                        )}
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <h3 className="text-sm font-semibold text-[#0d1f2d] mb-4">Category & tags</h3>
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Category</label>
                                <select name="category" required className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50">
                                    <option value="Trekking">Trekking</option>
                                    <option value="Guide">Guide</option>
                                    <option value="Tips">Tips</option>
                                    <option value="Story">Story</option>
                                    <option value="News">News</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Tags</label>
                                <input
                                    name="tags"
                                    type="text"
                                    placeholder="everest, trekking, nepal..."
                                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50 placeholder:text-slate-300"
                                />
                                <p className="text-[11px] text-slate-400 mt-1">Separate tags with commas</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <h3 className="text-sm font-semibold text-[#0d1f2d] mb-4">SEO</h3>
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Meta title</label>
                                <input name="meta_title" type="text" placeholder="SEO title..." className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50 placeholder:text-slate-300" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Meta description</label>
                                <textarea name="meta_description" rows={3} placeholder="SEO description..." className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50 resize-none placeholder:text-slate-300" />
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-2 justify-end">
                        <button type="submit" disabled={isPending} className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer disabled:opacity-50">
                            Save draft
                        </button>
                        <button
                            type="button"
                            disabled={isPending}
                            onClick={(e) => {
                                const form = e.currentTarget.closest('form')!
                                const fakeEvent = { currentTarget: form, preventDefault: () => { } } as any
                                submitWithStatus('published')(fakeEvent)
                            }}
                            className="px-4 py-2.5 rounded-xl bg-[#0A5482] hover:bg-[#083d61] transition text-white text-sm font-semibold cursor-pointer disabled:opacity-50"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}