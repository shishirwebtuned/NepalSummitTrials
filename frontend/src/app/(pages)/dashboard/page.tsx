// app/(pages)/dashboard/page.tsx
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import {
    TbCalendarCheck, TbCash, TbMountain, TbUsers, TbBell, TbSettings,
    TbTrendingUp, TbClock, TbArrowRight, TbPlus, TbArticle, TbUserPlus,
    TbMail, TbCalendarPlus, TbX
} from 'react-icons/tb'
import RevenueChart from './Components/RevenueChart'
import BookingDonut from './Components/BookingDonut'

const badgeStyle: Record<string, string> = {
    pending: 'bg-amber-50 text-amber-800',
    paid: 'bg-green-50 text-green-900',
    cancelled: 'bg-red-50 text-red-800',
    refunded: 'bg-slate-100 text-slate-600',
}

const quickActions = [
    { label: 'New trek', icon: TbPlus, href: '/dashboard/treks/new', bg: 'bg-blue-50', ic: 'text-blue-900' },
    { label: 'New blog', icon: TbArticle, href: '/dashboard/blogs/new', bg: 'bg-green-50', ic: 'text-green-900' },
    { label: 'Bookings', icon: TbCalendarCheck, href: '/dashboard/bookings', bg: 'bg-amber-50', ic: 'text-amber-800' },
    { label: 'Messages', icon: TbMail, href: '/dashboard/contacts', bg: 'bg-violet-50', ic: 'text-violet-800' },
]

export default async function DashboardPage() {
    const supabase = await createClient()

    // Fetch all data in parallel
    const [
        { data: bookings },
        { data: treks },
        { data: blogs },
        { data: contacts },
        { data: recentBookings },
    ] = await Promise.all([
        supabase.from('bookings').select('id, payment_status, total_with_vat, created_at'),
        supabase.from('treks').select('id, name, status'),
        supabase.from('blogs').select('id, status'),
        supabase.from('contact_messages').select('id, full_name, status, created_at'),
        supabase
            .from('bookings')
            .select('id, lead_first_name, lead_last_name, payment_status, total_with_vat, created_at, treks(name, duration_days)')
            .order('created_at', { ascending: false })
            .limit(5),
    ])

    // Add to the Promise.all in dashboard/page.tsx
    const { data: allBookingsForRevenue } = await supabase
        .from('bookings')
        .select('total_with_vat, created_at')
        .eq('payment_status', 'paid')  // only count paid bookings as revenue
        .gte('created_at', `${new Date().getFullYear()}-01-01`)  // current year only
        .lte('created_at', `${new Date().getFullYear()}-12-31`)

    // Stats calculations
    const totalBookings = bookings?.length ?? 0
    const totalRevenue = bookings?.reduce((sum, b) => sum + (b.total_with_vat ?? 0), 0) ?? 0
    const activetreks = treks?.filter((t) => t.status === 'active').length ?? 0
    const unreadMessages = contacts?.filter((c) => c.status === 'unread').length ?? 0

    // Booking status breakdown for donut
    const paid = bookings?.filter((b) => b.payment_status === 'paid').length ?? 0
    const pending = bookings?.filter((b) => b.payment_status === 'pending').length ?? 0
    const cancelled = bookings?.filter((b) => b.payment_status === 'cancelled').length ?? 0

    // Popular treks — count bookings per trek name
    const trekBookingCount: Record<string, number> = {}
    recentBookings?.forEach((b: any) => {
        const name = b.treks?.name
        if (name) trekBookingCount[name] = (trekBookingCount[name] ?? 0) + 1
    })

    // All-time trek popularity from all bookings
    const { data: allBookings } = await supabase
        .from('bookings')
        .select('treks(name)')

    const allTrekCount: Record<string, number> = {}
    allBookings?.forEach((b: any) => {
        const name = b.treks?.name
        if (name) allTrekCount[name] = (allTrekCount[name] ?? 0) + 1
    })

    const maxCount = Math.max(...Object.values(allTrekCount), 1)
    const popularTreks = Object.entries(allTrekCount)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 4)
        .map(([name, count]) => ({ name, pct: Math.round((count / maxCount) * 100) }))

    const stats = [
        {
            label: 'Total bookings', value: totalBookings.toString(),
            delta: `${paid} paid · ${pending} pending`,
            up: true, icon: TbCalendarCheck,
            accent: '#0A5482', bg: 'bg-blue-50', ic: 'text-blue-900', badge: 'Bookings',
        },
        {
            label: 'Total revenue', value: `$${(totalRevenue / 1000).toFixed(1)}K`,
            delta: `From ${totalBookings} bookings`,
            up: true, icon: TbCash,
            accent: '#D5E880', bg: 'bg-lime-50', ic: 'text-lime-900', badge: 'Revenue',
        },
        {
            label: 'Active packages', value: activetreks.toString(),
            delta: `${treks?.length ?? 0} total treks`,
            up: null, icon: TbMountain,
            accent: '#f59e0b', bg: 'bg-amber-50', ic: 'text-amber-800', badge: 'Treks',
        },
        {
            label: 'Unread messages', value: unreadMessages.toString(),
            delta: `${contacts?.length ?? 0} total messages`,
            up: unreadMessages > 0, icon: TbMail,
            accent: '#8b5cf6', bg: 'bg-violet-50', ic: 'text-violet-800', badge: 'Messages',
        },
    ]

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    const getInitials = (firstName: string, lastName: string) =>
        `${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`.toUpperCase()

    const initialsColors = [
        'bg-blue-50 text-blue-900',
        'bg-amber-50 text-amber-800',
        'bg-green-50 text-green-900',
        'bg-red-50 text-red-800',
        'bg-violet-50 text-violet-800',
    ]

    // Build 12-month array (index 0 = Jan, index 11 = Dec)
    const monthlyRevenue = Array(12).fill(0)
    allBookingsForRevenue?.forEach((b) => {
        const month = new Date(b.created_at).getMonth() // 0-indexed
        monthlyRevenue[month] += b.total_with_vat ?? 0
    })
    // Round each month to nearest dollar
    const monthlyData = monthlyRevenue.map((v) => Math.round(v))

    return (
        <div className="space-y-5 jakarta">

            {/* Top bar */}
            <div className="flex flex-col-reverse md:flex-row md:gap-1 gap-3 items-center justify-between">
                <div>
                    <p className="text-[11px] md:text-[12px] tracking-widest text-[#0A5482] uppercase font-semibold mb-1">Admin panel</p>
                    <h1 className="gloock text-xl md:text-2xl text-[#0d1f2d]">Good morning, Admin ✦</h1>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center font-semibold gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs md:text-sm text-slate-500">
                        <TbCalendarCheck className="text-xs md:text-base" />
                        {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <Link href="/dashboard/contacts" className="relative w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50">
                        <TbBell className="text-base md:text-lg" />
                        {unreadMessages > 0 && (
                            <span className="absolute top-1 right-1.5 w-2 h-2 md:w-2.5 md:h-2.5 bg-red-500 rounded-full border-2 border-white" />
                        )}
                    </Link>
                    <button className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50">
                        <TbSettings className="text-base md:text-lg" />
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {stats.map(({ label, value, delta, up, icon: Icon, accent, bg, ic, badge }) => (
                    <div key={label} className="bg-white rounded-2xl px-3 py-2.5 sm:py-3 sm:px-3 md:py-5 md:px-5 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-[4px] h-full rounded-l-2xl" style={{ background: accent }} />
                        <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                            <div className={`w-9 h-9 rounded-xl ${bg} ${ic} flex items-center justify-center`}>
                                <Icon className="text-base md:text-lg" />
                            </div>
                            <span className={`text-[10px] md:text-[11px] font-semibold px-2 py-0.5 rounded-full ${bg} ${ic}`}>{badge}</span>
                        </div>
                        <div className="jakarta text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0d1f2d]">{value}</div>
                        <div className="flex flex-row sm:flex-col sm:items-start items-center gap-1 justify-between sm:justify-start">
                            <div className="text-xs md:text-sm text-slate-500 font-medium">{label}</div>
                            <div className={`text-[11px] md:text-[12px] flex items-center gap-1 font-semibold ${up === true ? 'text-emerald-600' : 'text-slate-400'}`}>
                                {up === true ? <TbTrendingUp className="text-xs md:text-sm" /> : <TbClock className="text-xs md:text-sm" />}
                                {delta}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Middle */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

                {/* Recent bookings */}
                <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-100 p-5">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d]">Recent bookings</h2>
                            <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mt-0.5">Last 5 transactions</p>
                        </div>
                        <Link href="/dashboard/bookings" className="flex items-center gap-1 text-xs md:text-[13px] font-semibold text-[#0A5482] hover:underline">
                            View all <TbArrowRight className="text-xs md:text-sm" />
                        </Link>
                    </div>

                    {recentBookings && recentBookings.length > 0 ? (
                        recentBookings.map((b: any, i: number) => (
                            <div key={b.id} className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-lg ${initialsColors[i % initialsColors.length]} flex items-center justify-center text-[11px] font-bold flex-shrink-0`}>
                                        {getInitials(b.lead_first_name, b.lead_last_name)}
                                    </div>
                                    <div>
                                        <p className="text-[13px] md:text-[14px] font-semibold text-slate-800">
                                            {b.lead_first_name} {b.lead_last_name}
                                        </p>
                                        <p className="text-[11px] md:text-[12px] text-slate-400">
                                            {(b.treks as any)?.name ?? 'Unknown trek'} · {(b.treks as any)?.duration_days ?? '?'} days
                                        </p>
                                    </div>
                                </div>
                                <span className={`text-[10px] md:text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${badgeStyle[b.payment_status]}`}>
                                    {b.payment_status}
                                </span>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-slate-400 text-center py-8">No bookings yet.</p>
                    )}
                </div>

                {/* Right col */}
                <div className="lg:col-span-2 flex flex-col gap-4">

                    {/* Popular treks */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d] mb-1">Popular treks</h2>
                        <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mb-4">By booking volume</p>
                        {popularTreks.length > 0 ? (
                            popularTreks.map(({ name, pct }) => (
                                <div key={name} className="flex items-center gap-3 mb-3 last:mb-0">
                                    <span className="text-xs md:text-[13px] text-slate-400 font-medium w-24 shrink-0 truncate">{name}</span>
                                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full rounded-full bg-[#0A5482]" style={{ width: `${pct}%`, opacity: pct > 60 ? 1 : pct > 40 ? 0.7 : 0.45 }} />
                                    </div>
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 w-7 text-right">{pct}%</span>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-slate-400">No booking data yet.</p>
                        )}
                    </div>

                    {/* Quick actions */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d] mb-3">Quick actions</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {quickActions.map(({ label, icon: Icon, href, bg, ic }) => (
                                <Link key={label} href={href} className="flex items-center gap-2 px-3 py-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition text-[12px] md:text-[13px] font-semibold text-slate-600 bg-slate-50/50">
                                    <div className={`w-7 h-7 rounded-lg ${bg} ${ic} flex items-center justify-center shrink-0`}>
                                        <Icon className="text-sm md:text-base" />
                                    </div>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d]">Revenue this year</h2>
                            <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mt-0.5">Monthly breakdown</p>
                        </div>
                        <span className="text-xs md:text-[13px] font-semibold text-emerald-700 bg-green-50 px-2.5 py-0.5 rounded-full">
                            ${totalRevenue.toLocaleString()} total
                        </span>
                    </div>
                    <RevenueChart monthlyData={monthlyData} />
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d]">Booking status</h2>
                            <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mt-0.5">{totalBookings} total bookings</p>
                        </div>
                    </div>
                    <BookingDonut paid={paid} pending={pending} cancelled={cancelled} />
                </div>
            </div>

            {/* Recent contact messages */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d]">Recent messages</h2>
                        <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mt-0.5">
                            {unreadMessages > 0 ? `${unreadMessages} unread` : 'All caught up'}
                        </p>
                    </div>
                    <Link href="/dashboard/contacts" className="text-xs md:text-[13px] font-semibold text-[#0A5482] hover:underline flex items-center gap-1">
                        See all <TbArrowRight className="text-xs md:text-sm" />
                    </Link>
                </div>
                {contacts && contacts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
                        {contacts.slice(0, 6).map((c: any) => (
                            <div key={c.id} className={`flex items-start gap-3 py-2.5 border-b border-slate-50 last:border-0 ${c.status === 'unread' ? 'bg-blue-50/30 -mx-2 px-2 rounded-lg' : ''}`}>
                                <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${c.status === 'unread' ? 'bg-blue-50 text-blue-900' : 'bg-slate-50 text-slate-500'}`}>
                                    <TbMail className="text-sm md:text-base" />
                                </div>
                                <div className="min-w-0">
                                    <p className={`text-[12px] md:text-[13px] font-semibold text-slate-700 truncate ${c.status === 'unread' ? 'text-[#0d1f2d]' : ''}`}>
                                        {c.full_name ?? 'Unknown'}
                                    </p>
                                    <p className="text-[11px] md:text-[12px] text-slate-500 mt-0.5">
                                        {formatDate(c.created_at)}
                                    </p>
                                </div>
                                {c.status === 'unread' && (
                                    <span className="ml-auto text-[9px] font-bold bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full shrink-0">New</span>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-slate-400 text-center py-6">No messages yet.</p>
                )}
            </div>

        </div>
    )
}