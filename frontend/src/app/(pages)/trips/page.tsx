import Topsection from "@/components/Topsection";
import React from "react";
import HomeBanner from "../home/Components/HomeBanner";
import FAQ from "@/components/FAQ/FAQ";
import HoverpersonCard from "@/components/HoverPersonCard";
import ContactUs from "../aboutus/Components/ContactUs";
import PercentImageCard from "@/components/PercentImageCard";
import { progressData, textData } from "./Components/tripsObj";
import { CampaignTrek } from "./Components/CampaignTrek";
import { MustSeeTrekComp } from "@/components/shared/MustSeeTrekComp";

const page = () => {
    return (
        <div className="overflow-hidden">
            <Topsection
                title="Explore Untouched Trails"
                image="/images/campingTrek/Bannerbg1.png"
            />
            <div className="my-8 mx-[2rem] md:mx-[4rem] lg:mx-[8rem]">
                <PercentImageCard
                    progressData={progressData}
                    description={textData.description}
                    href={textData.href}
                    linkTitle={textData.linkTitle}
                    title={textData.title}
                    image={textData.image1}
                />
            </div>
            <CampaignTrek />
            {/* <HomeBanner /> */}
            {/* <MustSeeTrekComp /> */}
            <FAQ reverse />
            {/* <div className="lg:-translate-y-5">
                <HoverpersonCard
                    title=" Step into the Wild. Discover Trails That Change You."
                    desc="Join guided treks to breathtaking destinations. Nature is calling."
                    buttonText="Discover more"
                    image="/images/about/maleHiker.png"
                />
            </div> */}
            {/* <ContactUs /> */}
        </div>
    );
};

export default page;
