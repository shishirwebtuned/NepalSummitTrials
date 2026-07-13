'use client'
import Link from 'next/link'
import { TbArrowRight, TbClock, TbMountain, TbRefresh, TbStar } from 'react-icons/tb'
import { TrekMatch } from './TrekMatchClient'

type Trek = {
    id: string
    name: string
    slug: string
    difficulty: string
    duration_days: number
    price_adult: number
    cover_image: string | null
    category: string
}

const difficultyColor: Record<string, string> = {
    easy: 'bg-blue-50 text-blue-800',
    moderate: 'bg-amber-50 text-amber-800',
    difficult: 'bg-orange-50 text-orange-800',
    strenuous: 'bg-red-50 text-red-800',
}

export default function ResultsSection({
    matches,
    treks,
    onRestart,
}: {
    matches: TrekMatch[]
    treks: Trek[]
    onRestart: () => void
}) {
    const matchedTreks = matches
        .map((m) => ({
            ...m,
            trek: treks.find((t) => t.id === m.trekId),
        }))
        .filter((m) => m.trek)

    return (
        <div className="jakarta">
            <div className="mb-6">
                <p className="text-xs text-[#0A5482] font-semibold tracking-widest uppercase mb-1">AI recommendations</p>
                <h2 className="gloock text-2xl text-[#0d1f2d]">Your perfect treks</h2>
                <p className="text-sm text-slate-500 mt-1">Based on your answers, here are our top picks.</p>
            </div>

            <div className="space-y-4">
                {matchedTreks.map(({ trek, matchScore, reason }, index) => (
                    <div
                        key={trek!.id}
                        className={`bg-white rounded-2xl border overflow-hidden ${index === 0 ? 'border-[#0A5482] border-[1.5px]' : 'border-slate-100'
                            }`}
                    >
                        {/* Cover image */}
                        {trek!.cover_image ? (
                            <img
                                src={trek!.cover_image}
                                alt={trek!.name}
                                className="w-full h-36 object-cover"
                            />
                        ) : (
                            <div className="w-full h-24 bg-[#0A5482]" />
                        )}

                        <div className="p-5">
                            {/* Top match badge */}
                            {index === 0 && (
                                <span className="inline-block bg-[#0A5482] text-[#D5E880] text-[10px] font-bold px-2.5 py-1 rounded-full mb-3">
                                    Best match
                                </span>
                            )}

                            <div className="flex items-start justify-between mb-3">
                                <h3 className="text-base font-semibold text-[#0d1f2d]">{trek!.name}</h3>
                                <div className="flex items-center gap-1 bg-blue-50 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ml-2">
                                    <TbStar className="text-sm" />
                                    {matchScore}% match
                                </div>
                            </div>

                            <div className="flex items-center gap-3 flex-wrap mb-3">
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                    <TbClock className="text-slate-400" /> {trek!.duration_days} days
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                                    <TbMountain className="text-slate-400" /> {trek!.category}
                                </div>
                                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full capitalize ${difficultyColor[trek!.difficulty]}`}>
                                    {trek!.difficulty}
                                </span>
                                <span className="text-xs font-bold text-[#0d1f2d]">
                                    ${trek!.price_adult.toLocaleString()}
                                </span>
                            </div>

                            {/* AI reason */}
                            <div className="bg-slate-50 rounded-xl px-4 py-3 mb-4">
                                <p className="text-xs text-slate-600 leading-relaxed">{reason}</p>
                            </div>

                            <div className="flex gap-2">
                                <Link
                                    href={`/trek-detail/${trek!.slug}`}
                                    className="flex-1 text-center py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                                >
                                    View details
                                </Link>
                                <Link
                                    href={`/booking?trek=${trek!.id}`}
                                    className="flex-1 text-center py-2.5 rounded-xl bg-[#0A5482] hover:bg-[#083d61] text-white text-sm font-semibold transition flex items-center justify-center gap-2"
                                >
                                    Book now <TbArrowRight className="text-base" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={onRestart}
                className="w-full mt-4 py-3 rounded-xl border border-slate-200 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition flex items-center justify-center gap-2"
            >
                <TbRefresh className="text-base" /> Try different answers
            </button>
        </div>
    )
}