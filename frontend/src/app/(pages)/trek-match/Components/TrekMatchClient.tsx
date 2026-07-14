'use client'
import { useState } from 'react'
import Questionnaire from './Questionnaire'
import LoadingScreen from './LoadingScreen'
import ResultsSection from './ResultsSection'

type Trek = {
    id: string
    name: string
    slug: string
    difficulty: string
    duration_days: number
    price_adult: number
    price_child: number | null
    cover_image: string | null
    highlights: string[] | null
    best_season: string[] | null
    category: string
    description: string
}

export type Answers = {
    fitness: string
    duration: string
    budget: string
    goal: string
    group: string
    season: string
    accommodation: string
}

export type TrekMatch = {
    trekId: string
    matchScore: number
    reason: string
}

type Screen = 'quiz' | 'loading' | 'results'

export default function TrekMatchClient({ treks }: { treks: Trek[] }) {
    const [screen, setScreen] = useState<Screen>('quiz')
    const [answers, setAnswers] = useState<Answers | null>(null)
    const [matches, setMatches] = useState<TrekMatch[]>([])
    const [error, setError] = useState<string | null>(null)

    const handleQuizComplete = async (userAnswers: Answers) => {
        setAnswers(userAnswers)
        setScreen('loading')
        setError(null)

        try {
            const res = await fetch('/api/trek-match', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers: userAnswers, treks }),
            })

            if (!res.ok) throw new Error('Failed to get recommendations')

            const data = await res.json()
            setMatches(data.matches)
            setScreen('results')
        } catch (err: any) {
            setError('Something went wrong. Please try again.')
            setScreen('quiz')
        }
    }

    const handleRestart = () => {
        setScreen('quiz')
        setAnswers(null)
        setMatches([])
    }

    return (
        <div className="max-w-3xl w-full mx-auto px-3.5 sm:px-4 md:px-6 py-6 md:py-10 shadow-[-1px_2px_20px_7px_rgba(190,190,190,0.3)] rounded-3xl">
            {screen === 'quiz' && (
                <Questionnaire onComplete={handleQuizComplete} />
            )}
            {screen === 'loading' && (
                <LoadingScreen />
            )}
            {screen === 'results' && (
                <div className="">
                    <ResultsSection
                        matches={matches}
                        treks={treks}
                        onRestart={handleRestart}
                    />
                </div>
            )}
            {error && (
                <p className="text-red-500 text-sm text-center mt-4">{error}</p>
            )}
        </div>
    )
}