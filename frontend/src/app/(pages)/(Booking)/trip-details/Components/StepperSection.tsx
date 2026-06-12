"use client";
import Stepper from "@/components/shared/Stepper";
import React, { useState } from "react";
import FormSection from "./FormSection";
import Payment from "./Payment";
import TravelerInfoForm from "./TravelerInfoForm";
import TravelerInfo from "./TravelerInfo";

const StepperSection = () => {
    const [activeStep, setActiveStep] = useState(0);
    const steps = ["Trip Details", "Traveler Info", "Review", "Payment"];

    const handleNext = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prev) => prev - 1);
        }
    };

    return (
        <div className="mt-[6rem]">
            <Stepper steps={steps} activeStep={activeStep} />
            {activeStep === 0 && <FormSection onNext={handleNext} />}
            {activeStep === 1 && (
                <TravelerInfoForm onBack={handleBack} onNext={handleNext} />
            )}
            {activeStep === 2 && (
                <TravelerInfo onNext={handleNext} onBack={handleBack} />
            )}
            {activeStep === 3 && <Payment onNext={handleNext} onBack={handleBack} />}
        </div>
    );
};

export default StepperSection;