// components/Sidebar.tsx
'use client'
import { logout } from '@/app/(pages)/dashboard/actions'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import toast from 'react-hot-toast'
import { MdDashboard, MdArticle, MdTerrain, MdPeople, MdLogout } from 'react-icons/md'
import LogoutModal from './LogoutModal'

const links = [
    { href: '/dashboard', label: 'Overview', icon: MdDashboard },
    { href: '/dashboard/blogs', label: 'Blogs', icon: MdArticle },
    { href: '/dashboard/treks', label: 'Treks', icon: MdTerrain },
    // { href: '/dashboard/guides', label: 'Guides', icon: MdPeople },
]

export default function Sidebar() {
    const pathname = usePathname()
    const router = useRouter()

    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const [isPending, startTransition] = useTransition()

    const handleLogout = () => {
        startTransition(async () => {
            try {
                await logout()
                toast.success('Logged out successfully')
                setShowLogoutModal(false)
                setTimeout(() => router.push('/login'), 400)
            } catch (err: any) {
                toast.error('Failed to log out')
                setShowLogoutModal(false)
            }
        })
    }
    return (
        <>
            {/* ── Desktop sidebar (md+) ── */}
            <aside className="hidden md:flex w-56 bg-[#0A5482] h-screen sticky top-0 flex-col py-8 px-4 shrink-0 overflow-hidden">
                <div className="mb-10 px-2">
                    <p className="lora text-[#D5E880] font-semibold text-sm lg:text-base">Nepal Summit Trials</p>
                </div>

                <nav className="flex flex-col gap-1 flex-1">
                    {links.map(({ href, label, icon: Icon }) => {
                        const active = pathname === href
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={`flex jakarta items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition
                  ${active
                                        ? 'bg-white/15 text-white font-medium'
                                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <Icon className="text-base shrink-0" />
                                {label}
                            </Link>
                        )
                    })}
                </nav>

                <button
                    onClick={() => setShowLogoutModal(true)}
                    className="flex items-center gap-3 px-3 py-2.5 text-white/50 hover:text-white text-sm w-full transition cursor-pointer"
                >
                    <MdLogout className="text-base" /> Logout
                </button>
            </aside>

            {/* ── Mobile bottom nav ── */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A5482] flex items-center justify-around px-2 py-2 border-t border-white/10">
                {links.map(({ href, label, icon: Icon }) => {
                    const active = pathname === href
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition
                ${active ? 'text-white' : 'text-white/50'}`}
                        >
                            <Icon className={`text-xl ${active ? 'text-[#D5E880]' : ''}`} />
                            <span className="text-[10px]">{label}</span>
                        </Link>
                    )
                })}

                <button
                    onClick={() => setShowLogoutModal(true)}
                    className="flex flex-col items-center gap-0.5 px-3 py-1.5 text-white/50 hover:text-white transition cursor-pointer"
                >
                    <MdLogout className="text-xl" />
                    <span className="text-[10px]">Logout</span>
                </button>
            </nav>

            {showLogoutModal && (
                <LogoutModal
                    onConfirm={handleLogout}
                    onCancel={() => setShowLogoutModal(false)}
                />
            )}
        </>
    )
}