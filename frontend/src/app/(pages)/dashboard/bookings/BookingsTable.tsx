'use client'

import { useMemo, useState } from 'react'
import { TbSearch, TbCalendarCheck, TbCash, TbEye, TbClockHour3, TbX, TbUser, TbMountain, TbCalendar, TbPhone, TbMail, TbUsers } from 'react-icons/tb'

type Booking = {
    id: string
    lead_first_name: string | null
    lead_last_name: string | null
    lead_email: string | null
    lead_phone: string | null
    lead_nationality: string | null
    lead_mailing_address: string | null
    lead_city: string | null
    lead_province: string | null
    emergency_contact_name: string | null
    emergency_contact_relationship: string | null
    emergency_contact_phone: string | null
    start_date: string | null
    num_adults: number | null
    num_children: number | null
    base_amount: number | null
    vat_amount: number | null
    total_with_vat: number | null
    advance_amount: number | null
    remaining_amount: number | null
    payment_method: string | null
    payment_status: string | null
    status: string | null
    travelers: any[] | null
    created_at: string
    trek_name?: string | null
}

const paymentStatusStyle: Record<string, string> = {
    paid: 'bg-green-50 text-green-800',
    pending: 'bg-amber-50 text-amber-800',
    cancelled: 'bg-red-50 text-red-800',
    refunded: 'bg-slate-100 text-slate-500',
}

const bookingStatusStyle: Record<string, string> = {
    pending: 'bg-amber-50 text-amber-700',
    confirmed: 'bg-blue-50 text-blue-800',
    cancelled: 'bg-red-50 text-red-800',
    completed: 'bg-green-50 text-green-800',
}

export default function BookingsTable({ bookings }: { bookings: Booking[] }) {
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('All status')
    const [viewTarget, setViewTarget] = useState<Booking | null>(null)

    const filtered = useMemo(() => {
        return bookings.filter((booking) => {
            const fullName = `${booking.lead_first_name ?? ''} ${booking.lead_last_name ?? ''}`.trim().toLowerCase()
            const trekName = booking.trek_name?.toLowerCase() ?? ''
            const query = search.toLowerCase()
            const matchesSearch =
                fullName.includes(query) ||
                trekName.includes(query) ||
                (booking.lead_email ?? '').toLowerCase().includes(query)
            const matchesStatus =
                statusFilter === 'All status' ||
                booking.payment_status === statusFilter.toLowerCase()
            return matchesSearch && matchesStatus
        })
    }, [bookings, search, statusFilter])

    const paidCount = bookings.filter((b) => b.payment_status === 'paid').length
    const pendingCount = bookings.filter((b) => b.payment_status === 'pending').length
    const totalRevenue = bookings.reduce((sum, b) => sum + (b.total_with_vat ?? 0), 0)

    const formatDate = (date: string | null) => {
        if (!date) return '—'
        return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    }

    return (
        <div className="space-y-4 jakarta overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-[11px] md:text-[12px] tracking-widest text-[#0A5482] uppercase font-semibold mb-1">Sales</p>
                    <h1 className="gloock text-xl md:text-2xl text-[#0d1f2d]">Bookings</h1>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                    { label: 'Total bookings', value: bookings.length, icon: TbCalendarCheck },
                    { label: 'Pending', value: pendingCount, icon: TbClockHour3 },
                    { label: 'Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: TbCash },
                ].map(({ label, value, icon: Icon }) => (
                    <div key={label} className="bg-white border border-slate-100 rounded-2xl px-3 md:px-4 py-3 md:py-4">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-[11px] md:text-[12px] font-semibold text-slate-500">{label}</p>
                            <div className="w-8 h-8 rounded-xl bg-slate-50 text-[#0A5482] flex items-center justify-center">
                                <Icon className="text-sm md:text-base" />
                            </div>
                        </div>
                        <p className="text-xl md:text-2xl font-semibold text-[#0d1f2d]/90 jakarta">{value}</p>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-100">

                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row gap-3 p-3.5 md:p-5 border-b border-slate-50">
                    <div className="flex items-center gap-2 flex-1 border border-slate-200 rounded-xl px-2 md:px-3 py-2 bg-slate-50">
                        <TbSearch className="text-slate-400 text-sm md:text-base shrink-0" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name, email or trek..."
                            className="bg-transparent text-xs md:text-sm text-slate-600 outline-none w-full placeholder:text-slate-400"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border border-slate-200 rounded-xl px-3 py-2 text-xs md:text-sm text-slate-500 bg-slate-50 outline-none"
                    >
                        <option>All status</option>
                        <option>Paid</option>
                        <option>Pending</option>
                        <option>Cancelled</option>
                        <option>Refunded</option>
                    </select>
                </div>

                {filtered.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-sm text-slate-400 font-medium">No bookings found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-50">
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Lead</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden md:table-cell">Trek</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden lg:table-cell">Travel date</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Amount</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Payment</th>
                                    <th className="text-right text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((booking) => (
                                    <tr key={booking.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition">
                                        <td className="px-5 py-4">
                                            <p className="font-semibold text-[#0d1f2d] text-xs md:text-sm">
                                                {`${booking.lead_first_name ?? ''} ${booking.lead_last_name ?? ''}`.trim() || 'Unknown'}
                                            </p>
                                            <p className="text-[10px] md:text-xs text-slate-400 mt-0.5">{booking.lead_email ?? '—'}</p>
                                        </td>
                                        <td className="px-5 py-4 hidden md:table-cell">
                                            <span className="text-[10px] md:text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                                                {booking.trek_name ?? 'Unknown trek'}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 hidden lg:table-cell text-[10px] md:text-xs text-slate-400 font-medium">
                                            {formatDate(booking.start_date)}
                                        </td>
                                        <td className="px-5 py-4">
                                            <p className="text-[11px] md:text-sm font-semibold text-[#0d1f2d]">
                                                ${(booking.total_with_vat ?? 0).toLocaleString()}
                                            </p>
                                            <p className="text-[10px] md:text-xs text-slate-400">
                                                {booking.num_adults ?? 0}A · {booking.num_children ?? 0}C
                                            </p>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`text-[9px] md:text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${paymentStatusStyle[booking.payment_status ?? 'pending']}`}>
                                                {booking.payment_status ?? 'pending'}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <button
                                                    onClick={() => setViewTarget(booking)}
                                                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
                                                >
                                                    <TbEye className="text-xs md:text-sm" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                <div className="px-5 py-3 border-t border-slate-50 flex items-center justify-between">
                    <p className="text-[10px] md:text-xs text-slate-400 font-medium">
                        Showing {filtered.length} of {bookings.length} bookings
                    </p>
                </div>
            </div>

            {/* View Modal */}
            {viewTarget && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl border border-slate-100 w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-xl jakarta">

                        {/* Modal header */}
                        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${paymentStatusStyle[viewTarget.payment_status ?? 'pending']}`}>
                                    {viewTarget.payment_status ?? 'pending'}
                                </span>
                                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${bookingStatusStyle[viewTarget.status ?? 'pending']}`}>
                                    {viewTarget.status ?? 'pending'}
                                </span>
                                {viewTarget.payment_method && (
                                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-50 text-slate-600 capitalize">
                                        via {viewTarget.payment_method}
                                    </span>
                                )}
                            </div>
                            <button
                                onClick={() => setViewTarget(null)}
                                className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 transition"
                            >
                                <TbX className="text-lg" />
                            </button>
                        </div>

                        <div className="p-6 space-y-5">

                            {/* Trek + dates */}
                            <div className="bg-slate-50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <TbMountain className="text-[#0A5482] text-base" />
                                    <h3 className="text-sm font-semibold text-[#0d1f2d]">{viewTarget.trek_name ?? 'Unknown trek'}</h3>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {[
                                        { label: 'Travel date', value: formatDate(viewTarget.start_date) },
                                        { label: 'Adults', value: `${viewTarget.num_adults ?? 0}` },
                                        { label: 'Children', value: `${viewTarget.num_children ?? 0}` },
                                        { label: 'Booked on', value: formatDate(viewTarget.created_at) },
                                    ].map(({ label, value }) => (
                                        <div key={label}>
                                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                                            <p className="text-sm font-medium text-[#0d1f2d]">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pricing */}
                            <div>
                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Pricing</h3>
                                <div className="space-y-2">
                                    {[
                                        { label: 'Base amount', value: `$${(viewTarget.base_amount ?? 0).toLocaleString()}` },
                                        { label: 'VAT (13%)', value: `$${(viewTarget.vat_amount ?? 0).toLocaleString()}` },
                                        { label: 'Total incl. VAT', value: `$${(viewTarget.total_with_vat ?? 0).toLocaleString()}`, bold: true },
                                        { label: 'Advance paid', value: `$${(viewTarget.advance_amount ?? 0).toLocaleString()}` },
                                        { label: 'Remaining balance', value: `$${(viewTarget.remaining_amount ?? 0).toLocaleString()}` },
                                    ].map(({ label, value, bold }) => (
                                        <div key={label} className={`flex justify-between items-center py-1.5 ${bold ? 'border-t border-slate-100 pt-2.5' : ''}`}>
                                            <span className={`text-xs ${bold ? 'font-semibold text-[#0d1f2d]' : 'text-slate-500'}`}>{label}</span>
                                            <span className={`text-xs ${bold ? 'font-bold text-[#0d1f2d]' : 'font-medium text-slate-700'}`}>{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Lead traveler */}
                            <div>
                                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Lead traveler</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {[
                                        { label: 'Name', value: `${viewTarget.lead_first_name ?? ''} ${viewTarget.lead_last_name ?? ''}`.trim() },
                                        { label: 'Email', value: viewTarget.lead_email },
                                        { label: 'Phone', value: viewTarget.lead_phone },
                                        { label: 'Nationality', value: viewTarget.lead_nationality },
                                        { label: 'Address', value: viewTarget.lead_mailing_address },
                                        { label: 'City', value: viewTarget.lead_city },
                                    ].filter(i => i.value).map(({ label, value }) => (
                                        <div key={label} className="bg-slate-50 rounded-xl px-3 py-2.5">
                                            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                                            <p className="text-xs font-medium text-[#0d1f2d] break-words">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Emergency contact */}
                            {viewTarget.emergency_contact_name && (
                                <div>
                                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Emergency contact</h3>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {[
                                            { label: 'Name', value: viewTarget.emergency_contact_name },
                                            { label: 'Relationship', value: viewTarget.emergency_contact_relationship },
                                            { label: 'Phone', value: viewTarget.emergency_contact_phone },
                                        ].filter(i => i.value).map(({ label, value }) => (
                                            <div key={label} className="bg-slate-50 rounded-xl px-3 py-2.5">
                                                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                                                <p className="text-xs font-medium text-[#0d1f2d]">{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* All travelers */}
                            {viewTarget.travelers && viewTarget.travelers.length > 0 && (
                                <div>
                                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                        All travelers ({viewTarget.travelers.length})
                                    </h3>
                                    <div className="space-y-2">
                                        {viewTarget.travelers.map((t: any, i: number) => (
                                            <div key={i} className="flex items-center gap-3 bg-slate-50 rounded-xl px-3 py-2.5">
                                                <div className="w-7 h-7 rounded-lg bg-[#0A5482]/10 text-[#0A5482] flex items-center justify-center text-[10px] font-bold shrink-0">
                                                    {t.firstName?.[0]}{t.lastName?.[0]}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-xs font-semibold text-[#0d1f2d]">
                                                        {t.title} {t.firstName} {t.lastName}
                                                        {t.isChild && (
                                                            <span className="ml-2 text-[9px] font-bold bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-full">Child</span>
                                                        )}
                                                    </p>
                                                    <p className="text-[10px] text-slate-400 truncate">{t.email}</p>
                                                </div>
                                                <span className="text-[10px] text-slate-400 shrink-0 capitalize">{t.gender}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Reply button */}
                            {viewTarget.lead_email && (
                                <a
                                    href={`mailto:${viewTarget.lead_email}?subject=Booking confirmation — ${viewTarget.trek_name}`}
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#0A5482] hover:bg-[#083d61] text-white text-sm font-semibold transition"
                                >
                                    <TbMail className="text-base" /> Email the lead traveler
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}