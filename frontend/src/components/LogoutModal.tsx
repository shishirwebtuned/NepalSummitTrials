// components/LogoutModal.tsx
'use client'
import { TbLogout, TbX } from 'react-icons/tb'

interface Props {
    onConfirm: () => void
    onCancel: () => void
}

export default function LogoutModal({ onConfirm, onCancel }: Props) {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 w-full max-w-sm shadow-xl">
                <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                        <TbLogout className="text-red-600 text-lg" />
                    </div>
                    <button onClick={onCancel} className="text-slate-400 hover:text-slate-600">
                        <TbX className="text-lg" />
                    </button>
                </div>
                <h3 className="gloock text-lg text-[#0d1f2d] mb-1">Log out?</h3>
                <p className="text-sm text-slate-500 mb-5">
                    Are you sure you want to log out? You'll need to sign in again to access the dashboard.
                </p>
                <div className="flex gap-2">
                    <button
                        onClick={onCancel}
                        className="flex-1 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
                    >
                        Log out
                    </button>
                </div>
            </div>
        </div>
    )
}