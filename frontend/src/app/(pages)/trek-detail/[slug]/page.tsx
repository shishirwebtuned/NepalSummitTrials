import React from "react";
import FAQ from "@/components/FAQ/FAQ";
import { MustSeeTrekComp } from "@/components/shared/MustSeeTrekComp";
import HoverpersonCard from "@/components/HoverPersonCard";
import ContactUs from "../../aboutus/Components/ContactUs";
import { TrekDetail } from "./Components/TrekDetail";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type Trek = {
    id: string
    name: string
    slug: string
    description: string
    duration_days: number
    difficulty: string
    max_altitude: number | null
    price_adult: number
    price_child: number | null
    category: string
    cover_image: string | null
    gallery: string[] | null
    highlights: string[] | null
    itinerary: { day: number; title: string; description: string }[] | null
    includes: string[] | null
    excludes: string[] | null
    best_season: string[] | null
    group_size: string | null
    status: string
}

export default async function TrekDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const supabase = await createClient()

    const { data: trek } = await supabase
        .from('treks')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'active')
        .single()

    if (!trek) notFound()

    return (
        <div className="text-black pt-[6.5rem]">
            <TrekDetail trek={trek as Trek} />
            {/* <MustSeeTrekComp /> */}
            {/* <FAQ />
            <div>
                <HoverpersonCard
                    title=" Step into the Wild. Discover Trails That Change You."
                    desc="Join guided treks to breathtaking destinations. Nature is calling."
                    buttonText="Discover more"
                    reverse
                    image="/images/about/maleHiker.png"
                />
            </div>
            <ContactUs /> */}
        </div>
    );
};

