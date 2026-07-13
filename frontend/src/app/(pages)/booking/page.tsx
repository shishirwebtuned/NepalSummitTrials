import Topsection from "@/components/Topsection";
import React from "react";
import StepperSection from "./Components/StepperSection";
import FormSection from "./Components/FormSection";
import TravelerInfoForm from "./Components/TravelerInfoForm";
import TravelerInfo from "./Components/TravelerInfo";
import Payment from "./Components/Payment";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function BookingPage({
    searchParams,
}: {
    searchParams: Promise<{ trek?: string }>
}) {

    const { trek: trekId } = await searchParams

    if (!trekId) notFound()

    const supabase = await createClient()
    const { data: trek } = await supabase
        .from('treks')
        .select('id, name, slug, duration_days, difficulty, price_adult, price_child, cover_image, group_size, best_season')
        .eq('id', trekId)
        .eq('status', 'active')
        .single()

    if (!trek) notFound()

    return (
        <div>
            <Topsection
                title="Your journey starts with a message"
                image="/images/about/aboutbg.png"
            />
            <StepperSection trek={trek} />
            {/* <FormSection /> */}
            {/* <TravelerInfoForm /> */}
            {/* <TravelerInfo /> */}
        </div>
    );
};

