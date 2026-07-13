// app/(pages)/dashboard/page.tsx
import Link from 'next/link'
import { TbCalendarCheck, TbCash, TbMountain, TbUsers, TbBell, TbSettings, TbTrendingUp, TbClock, TbCheck, TbArrowRight, TbPlus, TbArticle, TbUserPlus, TbMail, TbCalendarPlus, TbX } from 'react-icons/tb'
import BookingDonut from './Components/BookingDonut'
import RevenueChart from './Components/RevenueChart'

const stats = [
    { label: 'Total bookings', value: '284', delta: '+12% from last month', up: true, icon: TbCalendarCheck, accent: '#0A5482', bg: 'bg-blue-50', ic: 'text-blue-900', badge: 'Bookings' },
    { label: 'Total this year', value: '$48.2K', delta: '+8% from last month', up: true, icon: TbCash, accent: '#D5E880', bg: 'bg-lime-50', ic: 'text-lime-900', badge: 'Revenue' },
    { label: 'Active packages', value: '18', delta: '3 starting this week', up: null, icon: TbMountain, accent: '#f59e0b', bg: 'bg-amber-50', ic: 'text-amber-800', badge: 'Treks' },
    { label: 'Total team members', value: '12', delta: '9 available now', up: true, icon: TbUsers, accent: '#8b5cf6', bg: 'bg-violet-50', ic: 'text-violet-800', badge: 'Guides' },
]

const bookings = [
    { name: 'Rajan Sharma', initials: 'RS', trek: 'Everest Base Camp · 14 days', status: 'Paid', ib: 'bg-blue-50 text-blue-900' },
    { name: 'Sarah Mitchell', initials: 'SM', trek: 'Annapurna Circuit · 21 days', status: 'Pending', ib: 'bg-amber-50 text-amber-800' },
    { name: 'Tom Eriksson', initials: 'TE', trek: 'Langtang Valley · 10 days', status: 'Paid', ib: 'bg-green-50 text-green-900' },
    { name: 'Priya Mehta', initials: 'PM', trek: 'Manaslu Circuit · 16 days', status: 'Cancelled', ib: 'bg-red-50 text-red-800' },
    { name: 'James Okafor', initials: 'JO', trek: 'Gokyo Lakes · 12 days', status: 'Pending', ib: 'bg-violet-50 text-violet-800' },
]

const treks = [
    { name: 'Everest Base Camp', pct: 85 },
    { name: 'Annapurna Circuit', pct: 68 },
    { name: 'Langtang Valley', pct: 42 },
    { name: 'Manaslu Circuit', pct: 30 },
]

const quickActions = [
    { label: 'New trek', icon: TbPlus, href: '/dashboard/treks/new', bg: 'bg-blue-50', ic: 'text-blue-900' },
    { label: 'New blog', icon: TbArticle, href: '/dashboard/blogs/new', bg: 'bg-green-50', ic: 'text-green-900' },
    { label: 'Add guide', icon: TbUserPlus, href: '/dashboard/guides/new', bg: 'bg-amber-50', ic: 'text-amber-800' },
    { label: 'Send email', icon: TbMail, href: '/dashboard/email', bg: 'bg-violet-50', ic: 'text-violet-800' },
]

const activity = [
    { text: 'New booking — Rajan Sharma · EBC', time: '2 minutes ago', bg: 'bg-blue-50', ic: 'text-blue-900', icon: TbCalendarPlus },
    { text: 'Blog published — "Top 5 treks in Nepal"', time: '1 hour ago', bg: 'bg-green-50', ic: 'text-green-900', icon: TbArticle },
    { text: 'Booking cancelled — Priya Mehta', time: '3 hours ago', bg: 'bg-red-50', ic: 'text-red-800', icon: TbX },
    { text: 'New guide added — Dawa Sherpa', time: 'Yesterday', bg: 'bg-violet-50', ic: 'text-violet-800', icon: TbUserPlus },
    { text: 'Payment received — $7,500 · Tom Eriksson', time: 'Yesterday', bg: 'bg-amber-50', ic: 'text-amber-800', icon: TbCash },
]

const badgeStyle: Record<string, string> = {
    Paid: 'bg-green-50 text-green-900',
    Pending: 'bg-amber-50 text-amber-800',
    Cancelled: 'bg-red-50 text-red-800',
}

export default function DashboardPage() {
    return (
        <div className="space-y-5 jakarta">

            {/* Top bar */}
            <div className="flex flex-col-reverse md:flex-row md:gap-1 gap-3 items-center justify-between">
                <div>
                    <p className="text-[11px] md:text-[12px] tracking-widest text-[#0A5482] uppercase font-semibold mb-1">Admin panel</p>
                    <h1 className="gloock text-xl md:text-2xl text-[#0d1f2d]">Good morning, Admin ✦</h1>
                    {/* <p className="text-sm text-slate-400 mt-1">Nepal Summit Trials · Dashboard overview</p> */}
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center font-semibold gap-1.5 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs md:text-sm text-slate-500">
                        <TbCalendarCheck className="text-xs md:text-base" /> {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <button className="relative w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-slate-50">
                        <TbBell className="text-base md:text-lg" />
                        <span className="absolute top-1 right-1.5 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full border-2 border-white" />
                    </button>
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
                {/* Bookings — wider */}
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
                    {bookings.map((b) => (
                        <div key={b.name} className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg ${b.ib} flex items-center justify-center text-[11px] font-bold flex-shrink-0`}>
                                    {b.initials}
                                </div>
                                <div>
                                    <p className="text-[13px] md:text-[14px] font-semibold text-slate-800">{b.name}</p>
                                    <p className="text-[11px] md:text-[12px] text-slate-400">{b.trek}</p>
                                </div>
                            </div>
                            <span className={`text-[10px] md:text-[11px] font-semibold px-2.5 py-1 rounded-full ${badgeStyle[b.status]}`}>{b.status}</span>
                        </div>
                    ))}
                </div>

                {/* Right col */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {/* Popular treks */}
                    <div className="bg-white rounded-2xl border border-slate-100 p-5">
                        <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d] mb-1">Popular treks</h2>
                        <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mb-4">By booking volume</p>
                        {treks.map(({ name, pct }) => (
                            <div key={name} className="flex items-center gap-3 mb-3 last:mb-0">
                                <span className="text-xs md:text-[13px] text-slate-400 font-medium w-24 shrink-0 truncate">{name}</span>
                                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full rounded-full bg-[#0A5482]" style={{ width: `${pct}%`, opacity: pct > 60 ? 1 : pct > 40 ? 0.7 : 0.45 }} />
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 w-7 text-right">{pct}%</span>
                            </div>
                        ))}
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

            {/* Bottom */}
            {/* Bottom — replace existing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                {/* Revenue */}
                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d]">Revenue this year</h2>
                            <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mt-0.5">Monthly breakdown</p>
                        </div>
                        <span className="text-xs md:text-[13px] font-semibold text-emerald-700 bg-green-50 px-2.5 py-0.5 rounded-full">↑ 8%</span>
                    </div>
                    <RevenueChart />
                </div>

                {/* Booking status donut */}
                <div className="bg-white rounded-2xl border border-slate-100 p-5">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d]">Booking status</h2>
                            <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mt-0.5">284 total bookings</p>
                        </div>
                    </div>
                    <BookingDonut />
                </div>

            </div>
            {/* Activity */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <h2 className="jakarta text-sm md:text-base font-semibold text-[#0d1f2d]">Recent activity</h2>
                        <p className="text-[11px] md:text-[12px] font-semibold text-slate-500  mt-0.5">Latest updates</p>
                    </div>
                    <button className="text-xs md:text-[13px] font-semibold text-[#0A5482] hover:underline flex items-center gap-1">
                        See all <TbArrowRight className="text-xs md:text-sm" />
                    </button>
                </div>
                {activity.map(({ text, time, bg, ic, icon: Icon }) => (
                    <div key={text} className="flex items-start gap-3 py-2.5 border-b border-slate-50 last:border-0">
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-lg ${bg} ${ic} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Icon className="text-sm md:text-base" />
                        </div>
                        <div>
                            <p className="text-[12px]  md:text-[13px] font-semibold text-slate-700 leading-relaxed">{text}</p>
                            <p className="text-[11px] md:text-[12px] text-slate-500 mt-0.5">{time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}