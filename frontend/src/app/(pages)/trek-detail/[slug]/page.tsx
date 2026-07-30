import React from "react";
import FAQ from "@/components/FAQ/FAQ";
import { MustSeeTrekComp } from "@/components/shared/MustSeeTrekComp";
import HoverpersonCard from "@/components/HoverPersonCard";
import ContactUs from "../../aboutus/Components/ContactUs";
import { TrekDetail } from "./Components/TrekDetail";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { Trek } from "../../dashboard/treks/type";


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

