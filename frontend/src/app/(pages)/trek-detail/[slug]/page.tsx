import React from "react";
import FAQ from "@/components/FAQ/FAQ";
import { MustSeeTrekComp } from "@/components/shared/MustSeeTrekComp";
import HoverpersonCard from "@/components/HoverPersonCard";
import ContactUs from "../../aboutus/Components/ContactUs";
import { TrekDetail } from "./Components/TrekDetail";

const page = () => {
    return (
        <div className="text-black pt-[6.5rem]">
            <TrekDetail />
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

export default page;
