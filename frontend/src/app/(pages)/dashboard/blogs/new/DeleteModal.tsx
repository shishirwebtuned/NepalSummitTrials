// components/dashboard/DeleteModal.tsx
'use client'
import { TbAlertTriangle, TbX } from 'react-icons/tb'

interface Props {
    title: string
    onConfirm: () => void
    type?: 'blog' | 'trek' | 'booking' | 'contact'
    modalTitle?: string
    onCancel: () => void
}

export default function DeleteModal({ title, onConfirm, onCancel, modalTitle, type }: Props) {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 w-full max-w-sm shadow-xl">
                <div className="flex items-center justify-between mb-4">
                    <div className="md:w-10 md:h-10 w-8 h-8 rounded-xl bg-red-50 flex items-center justify-center">
                        <TbAlertTriangle className="text-red-600 text-base md:text-lg" />
                    </div>
                    <h3 className="flex items-center justify-center gloock text-base md:text-lg text-[#0d1f2d] mb-1">Delete {modalTitle || 'post'}?</h3>
                    <button onClick={onCancel} className="text-slate-400 hover:text-slate-600 cursor-pointer transition">
                        <TbX className="text-base md:text-lg" />
                    </button>
                </div>

                <p className="text-[13px] md:text-sm text-slate-500 mb-5 pt-1">
                    <span className="font-semibold text-slate-700"> {type === 'trek' ? 'Trek' : type === 'booking' ? 'Booking' : type === 'contact' ? 'Contact' : 'Post'} "{title}"</span> will be permanently deleted. This action cannot be undone.
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={onCancel}
                        className="flex-1 py-2 md:py-2.5 rounded-xl border border-slate-200 md:text-sm text-[13px] font-semibold text-slate-600 hover:bg-slate-50 transition cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-2 md:py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white md:text-sm text-[13px] font-semibold transition cursor-pointer"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}