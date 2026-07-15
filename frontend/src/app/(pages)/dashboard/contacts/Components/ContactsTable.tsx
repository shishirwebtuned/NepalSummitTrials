// app/(pages)/dashboard/contacts/ContactsTable.tsx
'use client'
import { useState, useTransition } from 'react'
import { TbSearch, TbTrash, TbEye, TbMail, TbMailOpened, TbCheck } from 'react-icons/tb'
import toast from 'react-hot-toast'
import { deleteContact, updateContactStatus } from '../actions'
import DeleteModal from '../../blogs/new/DeleteModal'

type Contact = {
    id: string
    full_name: string
    email: string
    phone: string | null
    destination: string | null
    travel_date: string | null
    num_travelers: number | null
    message: string
    status: 'unread' | 'read' | 'replied'
    created_at: string
}

const statusStyle: Record<string, string> = {
    unread: 'bg-blue-50 text-blue-800',
    read: 'bg-slate-100 text-slate-600',
    replied: 'bg-green-50 text-green-800',
}

export default function ContactsTable({ contacts }: { contacts: Contact[] }) {
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [viewTarget, setViewTarget] = useState<Contact | null>(null)
    const [deleteTarget, setDeleteTarget] = useState<{ id: string; title: string } | null>(null)
    const [isPending, startTransition] = useTransition()

    const filtered = contacts.filter((c) => {
        const matchesSearch =
            c.full_name.toLowerCase().includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
        const matchesStatus = statusFilter === 'All' || c.status === statusFilter.toLowerCase()
        return matchesSearch && matchesStatus
    })

    const unread = contacts.filter((c) => c.status === 'unread').length
    const read = contacts.filter((c) => c.status === 'read').length
    const replied = contacts.filter((c) => c.status === 'replied').length

    const handleDelete = () => {
        if (!deleteTarget) return
        startTransition(async () => {
            try {
                await deleteContact(deleteTarget.id)
                toast.success('Message deleted')
                setDeleteTarget(null)
            } catch (err: any) {
                toast.error(err.message || 'Failed to delete')
            }
        })
    }

    const handleStatusChange = (id: string, status: 'read' | 'replied') => {
        startTransition(async () => {
            try {
                await updateContactStatus(id, status)
                toast.success(`Marked as ${status}`)
            } catch (err: any) {
                toast.error(err.message || 'Failed to update status')
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
                    <p className="text-[11px] md:text-[12px] tracking-widest text-[#0A5482] uppercase font-semibold mb-1">Inbox</p>
                    <h1 className="gloock text-xl md:text-2xl text-[#0d1f2d]">Contact Messages</h1>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
                {[
                    { label: 'Total', value: contacts.length },
                    { label: 'Unread', value: unread },
                    { label: 'Replied', value: replied },
                ].map(({ label, value }) => (
                    <div key={label} className="bg-white border border-slate-100 rounded-2xl px-2.5 md:px-4 py-2 md:py-3">
                        <p className="text-[11px] md:text-[12px] font-semibold text-slate-500 mb-1">{label}</p>
                        <p className="text-xl md:text-2xl font-semibold text-[#0d1f2d]/90">{value}</p>
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
                            placeholder="Search by name or email..."
                            className="bg-transparent text-xs md:text-sm text-slate-600 outline-none w-full placeholder:text-slate-400"
                        />
                    </div>
                    <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="border border-slate-200 rounded-xl px-3 py-2 text-xs md:text-sm text-slate-500 bg-slate-50 outline-none"
                    >
                        <option>All</option>
                        <option>Unread</option>
                        <option>Read</option>
                        <option>Replied</option>
                    </select>
                </div>

                {/* Empty state */}
                {filtered.length === 0 ? (
                    <div className="py-16 text-center">
                        <p className="text-sm text-slate-400 font-medium">No messages found.</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-slate-50">
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">From</th>
                                    {/* <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden md:table-cell">Destination</th> */}
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden lg:table-cell">Travel date</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Status</th>
                                    <th className="text-left text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider hidden lg:table-cell">Received</th>
                                    <th className="text-right text-[9px] md:text-[11px] font-semibold text-slate-400 px-5 py-3 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filtered.map((contact) => (
                                    <tr
                                        key={contact.id}
                                        className={`border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition ${contact.status === 'unread' ? 'bg-blue-50/30' : ''
                                            }`}
                                    >
                                        <td className="px-5 py-4">
                                            <p className={`text-xs md:text-sm ${contact.status === 'unread' ? 'font-bold text-[#0d1f2d]' : 'font-semibold text-[#0d1f2d]'}`}>
                                                {contact.full_name}
                                            </p>
                                            <p className="text-[10px] md:text-xs text-slate-400 mt-0.5">{contact.email}</p>
                                            {contact.phone && (
                                                <p className="text-[10px] text-slate-400">{contact.phone}</p>
                                            )}
                                        </td>
                                        {/* <td className="px-5 py-4 hidden md:table-cell">
                                            <span className="text-[10px] md:text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
                                                {contact.destination || '—'}
                                            </span>
                                        </td> */}
                                        <td className="px-5 py-4 hidden lg:table-cell text-[10px] md:text-xs text-slate-400 font-medium">
                                            {contact.travel_date ? formatDate(contact.travel_date) : '—'}
                                            {contact.num_travelers && (
                                                <p className="text-[10px] text-slate-400">{contact.num_travelers} travelers</p>
                                            )}
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`text-[9px] md:text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${statusStyle[contact.status]}`}>
                                                {contact.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 hidden lg:table-cell text-[10px] md:text-xs text-slate-400 font-medium">
                                            {formatDate(contact.created_at)}
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center justify-end gap-1">
                                                {/* View */}
                                                <button
                                                    onClick={() => {
                                                        setViewTarget(contact)
                                                        if (contact.status === 'unread') handleStatusChange(contact.id, 'read')
                                                    }}
                                                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 flex items-center justify-center transition cursor-pointer"
                                                    title="View message"
                                                >
                                                    <TbEye className="text-xs md:text-sm" />
                                                </button>

                                                {/* Mark replied */}
                                                {contact.status !== 'replied' && (
                                                    <button
                                                        onClick={() => handleStatusChange(contact.id, 'replied')}
                                                        className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-green-50 text-green-700 hover:bg-green-100 flex items-center justify-center transition cursor-pointer"
                                                        title="Mark as replied"
                                                    >
                                                        <TbCheck className="text-xs md:text-sm" />
                                                    </button>
                                                )}

                                                {/* Delete */}
                                                <button
                                                    onClick={() => setDeleteTarget({ id: contact.id, title: contact.full_name })}
                                                    className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-red-50 text-red-700 hover:bg-red-100 flex items-center justify-center transition cursor-pointer"
                                                    title="Delete message"
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
                    <p className="text-[10px] md:text-xs text-slate-400 font-medium">
                        Showing {filtered.length} of {contacts.length} messages
                    </p>
                </div>
            </div>

            {/* View Modal */}
            {viewTarget && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl border border-slate-100 w-full max-w-lg shadow-xl jakarta overflow-hidden">
                        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full capitalize ${statusStyle[viewTarget.status]}`}>
                                    {viewTarget.status}
                                </span>
                            </div>
                            <button
                                onClick={() => setViewTarget(null)}
                                className="text-slate-400 hover:text-slate-600 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-50 transition"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <div>
                                <h2 className="gloock text-xl text-[#0d1f2d]">{viewTarget.full_name}</h2>
                                <p className="text-sm text-slate-400 mt-0.5">{viewTarget.email}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { label: 'Phone', value: viewTarget.phone },
                                    { label: 'Destination', value: viewTarget.destination },
                                    { label: 'Travel date', value: viewTarget.travel_date ? formatDate(viewTarget.travel_date) : null },
                                    { label: 'Travelers', value: viewTarget.num_travelers ? `${viewTarget.num_travelers} people` : null },
                                ].filter(i => i.value).map(({ label, value }) => (
                                    <div key={label} className="bg-slate-50 rounded-xl px-3 py-2.5">
                                        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                                        <p className="text-sm font-medium text-[#0d1f2d]">{value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-50 rounded-xl px-4 py-3">
                                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</p>
                                <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{viewTarget.message}</p>
                            </div>

                            <p className="text-xs text-slate-400">Received {formatDate(viewTarget.created_at)}</p>

                            <div className="flex gap-2 pt-1">
                                <a
                                    href={`mailto:${viewTarget.email}`}
                                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0A5482] hover:bg-[#083d61] text-white text-sm font-semibold transition"
                                >
                                    <TbMail className="text-base" /> Reply via email
                                </a>
                                {viewTarget.status !== 'replied' && (
                                    <button
                                        onClick={() => {
                                            handleStatusChange(viewTarget.id, 'replied')
                                            setViewTarget(null)
                                        }}
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-green-200 bg-green-50 text-green-700 text-sm font-semibold transition hover:bg-green-100"
                                    >
                                        <TbCheck className="text-base" /> Mark replied
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }

            {
                deleteTarget && (
                    <DeleteModal
                        title={deleteTarget.title}
                        modalTitle="contact"
                        type='contact'
                        onConfirm={handleDelete}
                        onCancel={() => setDeleteTarget(null)}
                    />
                )
            }
        </div >
    )
}