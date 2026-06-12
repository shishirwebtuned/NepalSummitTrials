import Topsection from "@/components/Topsection";
import React from "react";
import StepperSection from "./Components/StepperSection";
import FormSection from "./Components/FormSection";
import TravelerInfoForm from "./Components/TravelerInfoForm";
import TravelerInfo from "./Components/TravelerInfo";
import Payment from "./Components/Payment";

const page = () => {
    return (
        <div>
            <Topsection
                title="Your journey starts with a message"
                image="/images/about/aboutbg.png"
            />
            <StepperSection />
            {/* <FormSection /> */}
            {/* <TravelerInfoForm /> */}
            {/* <TravelerInfo /> */}
        </div>
    );
};

export default page;
