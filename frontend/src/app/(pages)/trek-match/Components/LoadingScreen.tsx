'use client'
import { useEffect, useState } from 'react'

const tips = [
    'Matching your fitness level to trail difficulty...',
    'Checking best season availability...',
    'Calculating budget compatibility...',
    'Reviewing your group preferences...',
    'Analyzing altitude exposure...',
    'Ranking treks by match score...',
]

export default function LoadingScreen() {
    const [tipIndex, setTipIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex((i) => (i + 1) % tips.length)
        }, 800)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center py-24 jakarta">
            <div className="w-14 h-14 rounded-full border-4 border-slate-100 border-t-[#0A5482] animate-spin mb-6" />
            <h2 className="gloock text-xl text-[#0d1f2d] mb-2">Finding your perfect trek...</h2>
            <p className="text-sm text-slate-400 text-center max-w-xs transition-all duration-300">
                {tips[tipIndex]}
            </p>
        </div>
    )
}