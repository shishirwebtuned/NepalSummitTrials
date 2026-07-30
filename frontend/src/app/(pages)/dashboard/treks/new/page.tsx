// app/(pages)/dashboard/treks/new/page.tsx
'use client'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import toast from 'react-hot-toast'
import {
    TbArrowLeft,
    TbPhoto,
    TbX,
    TbLoader2,
    TbPlus,
    TbTrash,
    TbGripVertical,
} from 'react-icons/tb'
import { createTrek } from '../actions'
import RichTextEditor from '@/components/RichTextEditor'
import { ItineraryDay } from '../type'

export default function NewTrekPage() {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const [pendingStatus, setPendingStatus] = useState<'active' | 'inactive' | null>(null)

    const [name, setName] = useState('')
    const [slug, setSlug] = useState('')
    const [includes, setIncludes] = useState('')
    const [excludes, setExcludes] = useState('')

    const [coverPreview, setCoverPreview] = useState<string | null>(null)
    const [coverFile, setCoverFile] = useState<File | null>(null)

    const [galleryFiles, setGalleryFiles] = useState<File[]>([])
    const [galleryPreviews, setGalleryPreviews] = useState<string[]>([])

    const [itinerary, setItinerary] = useState<ItineraryDay[]>([
        { day: 1, title: '', description: '', highlights: '' },
    ])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setName(value)
        setSlug(value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-'))
    }

    const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setCoverFile(file)
            setCoverPreview(URL.createObjectURL(file))
        }
    }

    const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        if (files.length === 0) return
        setGalleryFiles((prev) => [...prev, ...files])
        setGalleryPreviews((prev) => [...prev, ...files.map((f) => URL.createObjectURL(f))])
        e.target.value = '' // allow re-selecting the same file later
    }

    const removeGalleryImage = (index: number) => {
        setGalleryFiles((prev) => prev.filter((_, i) => i !== index))
        setGalleryPreviews((prev) => prev.filter((_, i) => i !== index))
    }

    const addItineraryDay = () => {
        setItinerary((prev) => [
            ...prev,
            { day: prev.length + 1, title: '', description: '', highlights: '' },
        ])
    }

    const removeItineraryDay = (index: number) => {
        setItinerary((prev) =>
            prev
                .filter((_, i) => i !== index)
                .map((d, i) => ({ ...d, day: i + 1 }))
        )
    }

    const updateItineraryDay = (index: number, field: 'title' | 'description' | 'highlights', value: string) => {
        setItinerary((prev) =>
            prev.map((d, i) => (i === index ? { ...d, [field]: value } : d))
        )
    }

    const submitForm = (status: 'active' | 'inactive', formEl: HTMLFormElement) => {
        const formData = new FormData(formEl)
        formData.set('status', status)
        formData.set('itinerary', JSON.stringify(itinerary.filter((d) => d.title.trim())))

        formData.set('includes', includes)
        formData.set('excludes', excludes)

        if (coverFile) {
            formData.set('cover_image', coverFile)
        } else {
            formData.delete('cover_image')
        }

        formData.delete('gallery_images')
        galleryFiles.forEach((file) => formData.append('gallery_images', file))

        setPendingStatus(status)
        startTransition(async () => {
            try {
                await createTrek(formData)
                toast.success(status === 'active' ? 'Trek published successfully!' : 'Trek saved as inactive!')
                setTimeout(() => router.push('/dashboard/treks'), 600)
            } catch (err: any) {
                toast.error(err.message || 'Failed to save trek')
                setPendingStatus(null)
            }
        })
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        submitForm('active', e.currentTarget)
    }

    const handleSaveInactiveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const form = e.currentTarget.closest('form')
        if (form) submitForm('inactive', form)
    }

    return (
        <form id="trek-form" onSubmit={handleFormSubmit} className="space-y-5 jakarta">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link
                        href="/dashboard/treks"
                        className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50 transition"
                    >
                        <TbArrowLeft className="text-base" />
                    </Link>
                    <div className="ml-3">
                        <p className="text-[11px] md:text-[12px] tracking-widest text-[#0A5482] uppercase font-semibold mb-0.5">Packages</p>
                        <h1 className="gloock text-xl md:text-2xl text-[#0d1f2d]">New Trek</h1>
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <button
                        type="button"
                        onClick={handleSaveInactiveClick}
                        disabled={isPending}
                        className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer disabled:opacity-50 flex items-center gap-2"
                    >
                        {isPending && pendingStatus === 'inactive' && <TbLoader2 className="animate-spin" />} Save inactive
                    </button>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="px-4 py-2.5 rounded-xl bg-[#0A5482] hover:bg-[#083d61] transition text-white text-sm font-semibold cursor-pointer disabled:opacity-50 flex items-center gap-2"
                    >
                        {isPending && pendingStatus === 'active' && <TbLoader2 className="animate-spin" />} Publish trek
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                {/* Main content */}
                <div className="lg:col-span-2 space-y-4">

                    {/* Basic info */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5 space-y-4">
                        <div>
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Trek name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Everest Base Camp"
                                className="w-full text-lg font-semibold text-[#0d1f2d] outline-none placeholder:text-slate-300 placeholder:font-normal"
                            />
                        </div>

                        <div className="pt-3 border-t border-slate-50">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Slug</label>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-slate-400">/treks/</span>
                                <input
                                    name="slug"
                                    type="text"
                                    required
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                    placeholder="everest-base-camp"
                                    className="flex-1 text-sm text-slate-600 outline-none placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div className="pt-3 border-t border-slate-50">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Description</label>
                            <textarea
                                name="description"
                                required
                                rows={5}
                                placeholder="Describe the trek experience..."
                                className="w-full text-sm text-slate-700 outline-none resize-none leading-relaxed placeholder:text-slate-300"
                            />
                        </div>
                    </div>

                    {/* Itinerary builder */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <div className="flex items-center justify-between mb-3">
                            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Itinerary</label>
                            <button
                                type="button"
                                onClick={addItineraryDay}
                                className="flex items-center gap-1.5 text-xs font-semibold text-[#0A5482] hover:underline"
                            >
                                <TbPlus className="text-sm" /> Add day
                            </button>
                        </div>

                        <div className="space-y-3">
                            {itinerary.map((dayItem, index) => (
                                <div key={index} className="border border-slate-100 rounded-xl p-3.5 bg-slate-50/50">
                                    <div className="flex items-center gap-2 mb-2.5">
                                        <TbGripVertical className="text-slate-300 text-base shrink-0" />
                                        <span className="text-xs font-bold text-[#0A5482] bg-blue-50 px-2.5 py-1 rounded-full shrink-0">
                                            Day {dayItem.day}
                                        </span>
                                        <input
                                            type="text"
                                            value={dayItem.title}
                                            onChange={(e) => updateItineraryDay(index, 'title', e.target.value)}
                                            placeholder="Day title (e.g. Arrival in Lukla)"
                                            className="flex-1 text-sm font-medium text-[#0d1f2d] outline-none bg-transparent placeholder:text-slate-300 placeholder:font-normal"
                                        />
                                        {itinerary.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeItineraryDay(index)}
                                                className="text-slate-300 hover:text-red-500 transition shrink-0"
                                            >
                                                <TbTrash className="text-base" />
                                            </button>
                                        )}
                                    </div>
                                    <textarea
                                        value={dayItem.description}
                                        onChange={(e) => updateItineraryDay(index, 'description', e.target.value)}
                                        placeholder="Describe what happens this day..."
                                        rows={2}
                                        className="w-full text-xs text-slate-600 outline-none resize-none leading-relaxed placeholder:text-slate-300 bg-transparent pl-7"
                                    />
                                    <div className="pl-7 mt-2">
                                        <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                                            Highlights
                                        </label>
                                        <RichTextEditor
                                            value={dayItem.highlights}
                                            onChange={(html) => updateItineraryDay(index, 'highlights', html)}
                                            placeholder="Key highlights for this day..."
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Cover image */}
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
                                <input type="file" accept="image/*" className="hidden" onChange={handleCoverChange} />
                            </label>
                        )}
                    </div>

                    {/* Gallery */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-3">Gallery images</label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-3">
                            {galleryPreviews.map((src, index) => (
                                <div key={index} className="relative rounded-lg overflow-hidden h-24">
                                    <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                                    <button
                                        type="button"
                                        onClick={() => removeGalleryImage(index)}
                                        className="absolute top-1.5 right-1.5 w-6 h-6 bg-black/50 hover:bg-black/70 text-white rounded-md flex items-center justify-center transition"
                                    >
                                        <TbX className="text-xs" />
                                    </button>
                                </div>
                            ))}
                            <label className="flex flex-col items-center justify-center h-24 border-2 border-dashed border-slate-200 rounded-lg cursor-pointer hover:border-[#0A5482] hover:bg-blue-50/30 transition group">
                                <TbPlus className="text-xl text-slate-300 group-hover:text-[#0A5482] transition" />
                                <input type="file" accept="image/*" multiple className="hidden" onChange={handleGalleryChange} />
                            </label>
                        </div>
                        <p className="text-[11px] text-slate-400">Add multiple photos for the trek gallery</p>
                    </div>

                </div>

                {/* Sidebar */}
                <div className="space-y-4">

                    {/* Pricing & details */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <h3 className="text-sm font-semibold text-[#0d1f2d] mb-4">Trek details</h3>
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Duration (days)</label>
                                    <input
                                        name="duration_days"
                                        type="number"
                                        required
                                        min={1}
                                        placeholder="14"
                                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Max altitude (m)</label>
                                    <input
                                        name="max_altitude"
                                        type="number"
                                        placeholder="5364"
                                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Difficulty</label>
                                <select name="difficulty" required className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50">
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                    <option value="strenuous">Strenuous</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Category</label>
                                <select name="category" required className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50">
                                    <option value="Himalaya">Himalaya</option>
                                    <option value="Valley">Valley</option>
                                    <option value="Lake">Lake</option>
                                    <option value="Peak">Peak Climbing</option>
                                    <option value="Cultural">Cultural</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Adult price ($)</label>
                                    <input
                                        name="price_adult"
                                        type="number"
                                        required
                                        min={0}
                                        placeholder="7500"
                                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Child price ($)</label>
                                    <input
                                        name="price_child"
                                        type="number"
                                        min={0}
                                        placeholder="5000"
                                        className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Group size</label>
                                <input
                                    name="group_size"
                                    type="text"
                                    placeholder="2-12 people"
                                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50 placeholder:text-slate-300"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Highlights, includes, excludes */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <h3 className="text-sm font-semibold text-[#0d1f2d] mb-4">Highlights & inclusions</h3>
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Highlights</label>
                                <input
                                    name="highlights"
                                    type="text"
                                    placeholder="Sunrise at Kala Patthar, Sherpa villages..."
                                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50 placeholder:text-slate-300"
                                />
                                <p className="text-[11px] text-slate-400 mt-1">Separate with commas</p>
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Includes</label>
                                {/* <input
                                    name="includes"
                                    type="text"
                                    placeholder="Permits, guide, meals during trek..."
                                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50 placeholder:text-slate-300"
                                /> */}
                                <RichTextEditor
                                    value={includes}
                                    onChange={setIncludes}
                                    placeholder="Permits, guide, meals during trek..."
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Excludes</label>
                                {/* <input
                                    name="excludes"
                                    type="text"
                                    placeholder="International flights, travel insurance..."
                                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50 placeholder:text-slate-300"
                                /> */}

                                <RichTextEditor
                                    value={excludes}
                                    onChange={setExcludes}
                                    placeholder="International flights, travel insurance..."
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1.5">Best season</label>
                                <input
                                    name="best_season"
                                    type="text"
                                    placeholder="Spring, Autumn..."
                                    className="w-full border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-600 outline-none bg-slate-50 placeholder:text-slate-300"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-2 justify-end">
                        <button
                            type="button"
                            onClick={handleSaveInactiveClick}
                            disabled={isPending}
                            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer disabled:opacity-50"
                        >
                            Save inactive
                        </button>
                        <button
                            type="submit"
                            disabled={isPending}
                            className="px-4 py-2.5 rounded-xl bg-[#0A5482] hover:bg-[#083d61] transition text-white text-sm font-semibold cursor-pointer disabled:opacity-50"
                        >
                            Publish trek
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}