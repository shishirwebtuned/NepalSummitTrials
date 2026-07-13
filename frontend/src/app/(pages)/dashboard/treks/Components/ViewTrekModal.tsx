// app/(pages)/dashboard/treks/ViewTrekModal.tsx
'use client'
import { TbX, TbClock, TbMountain, TbUsers, TbCheck, TbCircleX, TbCalendarEvent } from 'react-icons/tb'

type ItineraryDay = { day: number; title: string; description: string }

type Trek = {
    id: string
    name: string
    slug: string
    description: string
    duration_days: number
    difficulty: string
    max_altitude: number | null
    price_adult: number
    price_child: number | null
    category: string
    cover_image: string | null
    gallery: string[] | null
    highlights: string[] | null
    itinerary: ItineraryDay[] | null
    includes: string[] | null
    excludes: string[] | null
    best_season: string[] | null
    group_size: string | null
    status: 'active' | 'inactive'
}

const statusStyle: Record<string, string> = {
    active: 'bg-green-50 text-green-800',
    inactive: 'bg-slate-100 text-slate-500',
}

const difficultyStyle: Record<string, string> = {
    easy: 'bg-blue-50 text-blue-800',
    moderate: 'bg-amber-50 text-amber-800',
    difficult: 'bg-orange-50 text-orange-800',
    strenuous: 'bg-red-50 text-red-800',
}

export default function ViewTrekModal({ trek, onClose }: { trek: Trek; onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-100 w-full max-w-3xl max-h-[85vh] overflow-y-auto shadow-xl jakarta">

                {/* Header */}
                <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${statusStyle[trek.status]}`}>
                            {trek.status}
                        </span>
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${difficultyStyle[trek.difficulty]}`}>
                            {trek.difficulty}
                        </span>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 transition">
                        <TbX className="text-lg" />
                    </button>
                </div>

                {/* Cover image */}
                {trek.cover_image && (
                    <div className="h-56 w-full overflow-hidden">
                        <img src={trek.cover_image} alt={trek.name} className="w-full h-full object-cover" />
                    </div>
                )}

                <div className="p-6 space-y-6">

                    {/* Title + meta */}
                    <div>
                        <h2 className="gloock text-2xl text-[#0d1f2d] mb-3">{trek.name}</h2>
                        <div className="flex items-center gap-4 text-xs text-slate-500 font-medium flex-wrap">
                            <span className="flex items-center gap-1.5">
                                <TbClock /> {trek.duration_days} days
                            </span>
                            {trek.max_altitude && (
                                <span className="flex items-center gap-1.5">
                                    <TbMountain /> {trek.max_altitude.toLocaleString()}m max altitude
                                </span>
                            )}
                            {trek.group_size && (
                                <span className="flex items-center gap-1.5">
                                    <TbUsers /> {trek.group_size}
                                </span>
                            )}
                            <span className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-full">
                                {trek.category}
                            </span>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-4 bg-slate-50 rounded-xl p-4">
                        <div>
                            <p className="text-[11px] text-slate-400 font-medium">Adult price</p>
                            <p className="text-lg font-bold text-[#0d1f2d]">${trek.price_adult.toLocaleString()}</p>
                        </div>
                        {trek.price_child !== null && (
                            <>
                                <div className="h-8 w-px bg-slate-200" />
                                <div>
                                    <p className="text-[11px] text-slate-400 font-medium">Child price</p>
                                    <p className="text-lg font-bold text-[#0d1f2d]">${trek.price_child.toLocaleString()}</p>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#0d1f2d] mb-2">Description</h3>
                        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">{trek.description}</p>
                    </div>

                    {/* Highlights */}
                    {trek.highlights && trek.highlights.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-[#0d1f2d] mb-2">Highlights</h3>
                            <div className="flex flex-wrap gap-2">
                                {trek.highlights.map((h) => (
                                    <span key={h} className="text-xs font-medium text-[#0A5482] bg-blue-50 px-2.5 py-1 rounded-full">
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Itinerary */}
                    {trek.itinerary && trek.itinerary.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-[#0d1f2d] mb-3">Itinerary</h3>
                            <div className="space-y-2">
                                {trek.itinerary.map((d) => (
                                    <div key={d.day} className="border border-slate-100 rounded-xl p-3.5">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="text-xs font-bold text-[#0A5482] bg-blue-50 px-2.5 py-1 rounded-full shrink-0">
                                                Day {d.day}
                                            </span>
                                            <p className="text-sm font-medium text-[#0d1f2d]">{d.title}</p>
                                        </div>
                                        {d.description && (
                                            <p className="text-xs text-slate-500 leading-relaxed pl-1">{d.description}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Includes / Excludes */}
                    {((trek.includes && trek.includes.length > 0) || (trek.excludes && trek.excludes.length > 0)) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {trek.includes && trek.includes.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-[#0d1f2d] mb-2">Includes</h3>
                                    <ul className="space-y-1.5">
                                        {trek.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                                                <TbCheck className="text-green-600 mt-0.5 shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {trek.excludes && trek.excludes.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-[#0d1f2d] mb-2">Excludes</h3>
                                    <ul className="space-y-1.5">
                                        {trek.excludes.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                                                <TbCircleX className="text-red-500 mt-0.5 shrink-0" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Best season */}
                    {trek.best_season && trek.best_season.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-[#0d1f2d] mb-2 flex items-center gap-1.5">
                                <TbCalendarEvent /> Best season
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {trek.best_season.map((s) => (
                                    <span key={s} className="text-xs font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Gallery */}
                    {trek.gallery && trek.gallery.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-[#0d1f2d] mb-2">Gallery</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                {trek.gallery.map((src, i) => (
                                    <div key={i} className="rounded-lg overflow-hidden h-20">
                                        <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}