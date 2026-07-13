import { createClient } from '@/lib/supabase/server'
import TrekMatchClient from './Components/TrekMatchClient'

export default async function TrekMatchPage() {
    const supabase = await createClient()

    const { data: treks } = await supabase
        .from('treks')
        .select('id, name, slug, difficulty, duration_days, price_adult, price_child, cover_image, highlights, best_season, category, description')
        .eq('status', 'active')
        .order('created_at', { ascending: true })

    return (
        <div className="pt-[6.5rem] px-2 flex items-center justify-center min-h-screen h-full">
            <TrekMatchClient treks={treks || []} />
        </div>
    )
}