import Description from "./Description";
import ImageAndOfferSection from "./ImageAndOfferSection";
import Pricing from "./Pricing";
import RatingAndSocials from "./RatingsAndSocials";

export const TrekDetail = () => {
    return (
        <div className="">
            <ImageAndOfferSection />
            <RatingAndSocials />
            <div className="relative jakarta flex flex-col md:flex-row lg:gap-4 gap-6 lg:px-24 md:px-14 px-6 py-8">
                <div className="md:w-[70%] w-full ">
                    <Description />
                </div>
                <div className="md:w-[30%] w-full self-start sticky top-[84px]">
                    <Pricing />
                </div>
            </div>
        </div>
    );
};
