"use client";
import Stepper from "@/components/shared/Stepper";
import React, { useState } from "react";
import FormSection from "./FormSection";
import Payment from "./Payment";
import TravelerInfoForm from "./TravelerInfoForm";
import TravelerInfo from "./TravelerInfo";

type Trek = {
    id: string
    name: string
    slug: string
    duration_days: number
    difficulty: string
    price_adult: number
    price_child: number | null
    cover_image: string | null
    group_size: string | null
    best_season: string[] | null
}

export type BookingData = {
    trekId: string
    startDate: string
    numAdults: number
    numChildren: number
    totalAmount: number
    vatAmount: number
    totalWithVat: number
    advanceAmount: number
    remainingAmount: number
    travelers: TravelerDetail[]
}

export type TravelerDetail = {
    isChild: boolean
    title: string
    firstName: string
    lastName: string
    gender: string
    email: string
    nationality?: string
    country?: string
    phone: string
    mailingAddress?: string
    city?: string
    province?: string
    emergencyContact?: {
        fullName: string
        relationship: string
        phone: string
    }
}

const StepperSection = ({ trek }: { trek: Trek }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [bookingData, setBookingData] = useState<Partial<BookingData>>({
        trekId: trek.id,
        startDate: "",
        numAdults: 1,
        numChildren: 0,

        totalAmount: 0,
        advanceAmount: 0,
        remainingAmount: 0,
    })
    const steps = ["Trip Details", "Traveler Info", "Review", "Payment"];

    const handleNext = (data?: Partial<BookingData>) => {
        if (data) setBookingData((prev) => ({ ...prev, ...data }))
        if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1)
    }

    const handleBack = () => {
        if (activeStep > 0) setActiveStep((prev) => prev - 1)
    }

    return (
        <div className="mt-[6rem]">
            <Stepper steps={steps} activeStep={activeStep} />
            {activeStep === 0 && (
                <FormSection trek={trek} bookingData={bookingData} onNext={handleNext} />
            )}
            {activeStep === 1 && (
                <TravelerInfoForm bookingData={bookingData} onBack={handleBack} onNext={handleNext} />
            )}
            {activeStep === 2 && (
                <TravelerInfo trek={trek} bookingData={bookingData as BookingData} onNext={handleNext} onBack={handleBack} />
            )}
            {activeStep === 3 && (
                <Payment trek={trek} bookingData={bookingData as BookingData} onNext={handleNext} onBack={handleBack} />
            )}
        </div>
    );
};

export default StepperSection;