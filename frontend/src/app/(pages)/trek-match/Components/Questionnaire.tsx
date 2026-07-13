'use client'
import { useState } from 'react'
import { TbArrowRight, TbArrowLeft } from 'react-icons/tb'
import { Answers } from './TrekMatchClient'

const questions = [
    {
        key: 'fitness',
        title: "What's your fitness level?",
        sub: 'Be honest — it helps us find the right challenge for you.',
        opts: [
            { value: 'beginner', label: 'Beginner', sub: 'Light walks only' },
            { value: 'moderate', label: 'Moderate', sub: 'Regular exercise' },
            { value: 'experienced', label: 'Experienced', sub: 'Long hikes, gym' },
            { value: 'athlete', label: 'Athlete', sub: 'Serious training' },
        ],
    },
    {
        key: 'duration',
        title: 'How long can you trek?',
        sub: 'Include travel days in your estimate.',
        opts: [
            { value: '2-4 days', label: 'Weekend', sub: '2–4 days' },
            { value: '5-8 days', label: 'Short trip', sub: '5–8 days' },
            { value: '10-14 days', label: 'Medium', sub: '10–14 days' },
            { value: '15+ days', label: 'Long expedition', sub: '15+ days' },
        ],
    },
    {
        key: 'budget',
        title: "What's your budget per person?",
        sub: 'Includes guide, permits, accommodation, and meals.',
        opts: [
            { value: 'under $1000', label: 'Under $1,000', sub: 'Budget' },
            { value: '$1000-$3000', label: '$1,000–$3,000', sub: 'Mid range' },
            { value: '$3000-$6000', label: '$3,000–$6,000', sub: 'Premium' },
            { value: '$6000+', label: '$6,000+', sub: 'Luxury' },
        ],
    },
    {
        key: 'goal',
        title: "What's your main goal?",
        sub: 'Pick the experience that excites you most.',
        opts: [
            { value: 'scenery', label: 'Scenery & photos', sub: 'Iconic views' },
            { value: 'culture', label: 'Culture & villages', sub: 'Local immersion' },
            { value: 'summit', label: 'Summit & challenge', sub: 'Push your limits' },
            { value: 'nature', label: 'Nature & wildlife', sub: 'Flora and fauna' },
        ],
    },
    {
        key: 'group',
        title: 'Who are you trekking with?',
        sub: 'Group type affects route and pace choices.',
        opts: [
            { value: 'solo', label: 'Solo', sub: 'Just me' },
            { value: 'couple', label: 'Couple', sub: 'Two of us' },
            { value: 'family', label: 'Family', sub: 'Kids included' },
            { value: 'friends', label: 'Friends', sub: '3 or more' },
        ],
    },
    {
        key: 'season',
        title: 'When are you planning to go?',
        sub: 'Season affects trail conditions and visibility.',
        opts: [
            { value: 'Spring', label: 'Spring', sub: 'Mar–May' },
            { value: 'Summer', label: 'Summer', sub: 'Jun–Aug' },
            { value: 'Autumn', label: 'Autumn', sub: 'Sep–Nov' },
            { value: 'Winter', label: 'Winter', sub: 'Dec–Feb' },
        ],
    },
    {
        key: 'accommodation',
        title: 'How do you like to sleep?',
        sub: 'Accommodation style shapes your daily comfort.',
        opts: [
            { value: 'teahouse', label: 'Teahouse', sub: 'Shared guesthouses' },
            { value: 'camping', label: 'Camping', sub: 'Tents & sleeping bags' },
            { value: 'lodge', label: 'Lodges', sub: 'Private rooms' },
            { value: 'luxury', label: 'Luxury', sub: 'Best available' },
        ],
    },
]

export default function Questionnaire({ onComplete }: { onComplete: (a: Answers) => void }) {
    const [current, setCurrent] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})

    const q = questions[current]
    const selected = answers[q.key]
    const progress = ((current + 1) / questions.length) * 100

    const handleSelect = (value: string) => {
        setAnswers((prev) => ({ ...prev, [q.key]: value }))
    }

    const handleNext = () => {
        if (!selected) return
        if (current === questions.length - 1) {
            onComplete(answers as Answers)
            return
        }
        setCurrent((c) => c + 1)
    }

    const handleBack = () => {
        if (current > 0) setCurrent((c) => c - 1)
    }

    return (
        <div className="jakarta">
            {/* Progress */}
            <div className="h-1 bg-slate-100 rounded-full mb-6 overflow-hidden">
                <div
                    className="h-full bg-[#0A5482] rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <p className="text-xs text-slate-400 font-medium mb-1 tracking-wider uppercase">
                Step {current + 1} of {questions.length}
            </p>
            <h2 className="gloock text-2xl text-[#0d1f2d] mb-1">{q.title}</h2>
            <p className="text-sm text-slate-500 mb-6">{q.sub}</p>

            {/* Options */}
            <div className="grid grid-cols-2 gap-3 mb-8">
                {q.opts.map((opt) => (
                    <button
                        key={opt.value}
                        onClick={() => handleSelect(opt.value)}
                        className={`flex items-center gap-3 p-4 rounded-2xl border text-left cursor-pointer transition-all ${selected === opt.value
                            ? 'border-[#0A5482] bg-blue-50 border-[1.5px]'
                            : 'border-slate-200 bg-white hover:border-[#0A5482]/40'
                            }`}
                    >
                        <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold transition-colors ${selected === opt.value
                                ? 'bg-[#0A5482] text-[#D5E880]'
                                : 'bg-slate-100 text-slate-500'
                                }`}
                        >
                            {opt.label.charAt(0)}
                        </div>
                        <div>
                            <p className={`text-sm font-semibold ${selected === opt.value ? 'text-[#0A5482]' : 'text-slate-800'}`}>
                                {opt.label}
                            </p>
                            <p className="text-xs text-slate-400 mt-0.5">{opt.sub}</p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-1.5 mb-6">
                {questions.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6 bg-[#0A5482]' : 'w-1.5 bg-slate-300'
                            }`}
                    />
                ))}
            </div>

            {/* Nav */}
            <div className="flex items-center justify-between">
                <button
                    onClick={handleBack}
                    disabled={current === 0}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-500 hover:bg-slate-50 transition disabled:opacity-30 cursor-pointer"
                >
                    <TbArrowLeft className="text-base" /> Back
                </button>
                <button
                    onClick={handleNext}
                    disabled={!selected}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A5482] hover:bg-[#083d61] text-white text-sm font-semibold transition disabled:opacity-60 cursor-pointer"
                >
                    {current === questions.length - 1 ? 'Find my trek' : 'Next'}
                    <TbArrowRight className="text-base" />
                </button>
            </div>
        </div>
    )
}