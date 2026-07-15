// app/(pages)/dashboard/treks/TreksTable.tsx
'use client'
import Link from 'next/link'
import { useState, useTransition, useMemo } from 'react'
import toast from 'react-hot-toast'
import { TbPlus, TbEdit, TbTrash, TbEye, TbSearch, TbMountain, TbClock, TbUsers } from 'react-icons/tb'
import { deleteTrek } from '../actions'
import DeleteModal from '../../blogs/new/DeleteModal'
import ViewTrekModal from './ViewTrekModal'

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
    created_at: string
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

export default function TreksTable({ treks }: { treks: Trek[] }) {
    const [deleteTarget, setDeleteTarget] = useState<{ id: string; title: string } | null>(null)
    const [viewTarget, setViewTarget] = useState<Trek | null>(null)
    const [search, setSearch] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('All categories')
    const [statusFilter, setStatusFilter] = useState('All status')
    const [isPending, startTransition] = useTransition()

    const categories = useMemo(
        () => Array.from(new Set(treks.map((t) => t.category))),
        [treks]
    )

    const filtered = treks.filter((t) => {
        const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = categoryFilter === 'All categories' || t.category === categoryFilter
        const matchesStatus = statusFilter === 'All status' || t.status === statusFilter.toLowerCase()
        return matchesSearch && matchesCategory && matchesStatus
    })

    const activeCount = treks.filter((t) => t.status === 'active').length
    const avgDuration = treks.length
        ? Math.round(treks.reduce((sum, t) => sum + t.duration_days, 0) / treks.length)
        : 0

    const handleDelete = () => {
        if (!deleteTarget) return
        startTransition(async () => {
            try {
                await deleteTrek(deleteTarget.id)
                toast.success('Trek deleted successfully')
                setDeleteTarget(null)
            } catch (err: any) {
                toast.error(err.message || 'Failed to delete trek')
            }
        })
    }

    return (
        <div className="space-y-4 jakarta overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[11px] md:text-[12px] tracking-widest text-[#0A5482] uppercase font-semibold mb-1">Packages</p>
                    <h1 className="gloock text-xl md:text-2xl text-[#0d1f2d]">Treks</h1>
                </div>
                <Link
                    href="/dashboard/treks/new"
                    className="flex items-center gap-1.5 md:gap-2 bg-[#0A5482] hover:bg-[#083d61] transition text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2 md:py-2.5 rounded-xl"
                >
                    <TbPlus className="text-xs md:text-base" /> New trek
                </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                    { label: 'Total treks', value: treks.length },
                    { label: 'Active', value: activeCount },
                    { label: 'Categories', value: categories.length },
                    { label: 'Avg. duration', value: `${avgDuration}d` },
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
                            placeholder="Search treks..."
                            className="bg-transparent text-xs md:text-sm text-slate-600 outline-none w-full placeholder:text-slate-400"
                        />
                    </div>
                    <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="border border-slate-200 rounded-xl px-3 py-2 text-xs md:text-sm text-slate-500 bg-slate-50 outline-none"
                    >
                        <option>All categories</option>
                        {categories.map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border border-slate-200 rounded-xl px-3 py-2 text-xs md:text-sm text-slate-500 bg-slate-50 outline-none"
                    >
                        <option>All status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>

                {/* Empty state */}
                {filtered.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-sm text-slate-400 font-medium">No treks found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-50">
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Trek</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden md:table-cell">Difficulty</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden lg:table-cell">Duration</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden lg:table-cell">Price</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Status</th>
                                    <th className="text-right text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((trek) => (
                                    <tr key={trek.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                {trek.cover_image && (
                                                    <img
                                                        src={trek.cover_image}
                                                        alt={trek.name}
                                                        className="w-10 h-10 rounded-lg object-cover hidden sm:block shrink-0"
                                                    />
                                                )}
                                                <div>
                                                    <p className="font-semibold text-[#0d1f2d] text-xs md:text-sm">{trek.name}</p>
                                                    <p className="text-[10px] md:text-xs text-slate-400 mt-0.5">{trek.category} · {trek.duration_days} days</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 hidden md:table-cell">
                                            <span className={`text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-full capitalize ${difficultyStyle[trek.difficulty]}`}>
                                                {trek.difficulty}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 hidden lg:table-cell">
                                            <div className="flex items-center gap-1.5 text-slate-500 text-[10px] md:text-xs font-medium">
                                                <TbClock className="text-slate-400" />
                                                {trek.duration_days} days
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 hidden lg:table-cell text-[11px] md:text-sm font-semibold text-[#0d1f2d]">
                                            ${trek.price_adult.toLocaleString()}
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`text-[9px] md:text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${statusStyle[trek.status]}`}>
                                                {trek.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => setViewTarget(trek)}
                                                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
                                                >
                                                    <TbEye className="text-xs md:text-sm" />
                                                </button>
                                                <Link
                                                    href={`/dashboard/treks/${trek.id}/edit`}
                                                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 flex items-center justify-center transition cursor-pointer"
                                                >
                                                    <TbEdit className="text-xs md:text-sm" />
                                                </Link>
                                                <button
                                                    onClick={() => setDeleteTarget({ id: trek.id, title: trek.name })}
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
                    <p className="text-[10px] md:text-xs text-slate-400 font-medium">Showing {filtered.length} of {treks.length} treks</p>
                </div>
            </div>

            {deleteTarget && (
                <DeleteModal
                    title={deleteTarget.title}
                    modalTitle="trek"
                    type='trek'
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                />
            )}

            {viewTarget && (
                <ViewTrekModal trek={viewTarget} onClose={() => setViewTarget(null)} />
            )}
        </div>
    )
}