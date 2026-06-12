"use client";

import BookingButtons from "@/components/BookingButtons";
import CounterInput from "@/components/shared/CounterInput";
import DateInput from "@/components/shared/DateInput";
import InputField from "@/components/shared/InputField";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { GrCircleInformation } from "react-icons/gr";
import { addOnData } from "./tripDetailsObj";

interface FormSectionProps {
    onNext: () => void;
}

const FormSection = ({ onNext }: FormSectionProps) => {
    interface FormValues {
        travelDate?: string;
        noOfTravelers?: number;
        addOns: { tickets: number }[];
    }

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>({
        defaultValues: {
            addOns: [{ tickets: 1 }, { tickets: 1 }, { tickets: 1 }, { tickets: 1 }],
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
        onNext(); // Proceed to next step after form submission
    };

    return (
        <div className="sm:px-8 px-5 md:px-16 lg:px-24">
            <h2 className="jakarta font-semibold text-xs md:text-lg lg:text-xl text-[#0B2839]">
                Date & Travelers
            </h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="border-2 border-[#ebebeb] rounded-xl">
                        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <DateInput
                                register={register}
                                name="travelDate"
                                errors={errors}
                                label="Travel Date"
                                // required={true}
                                placeholder="Date to Travel"
                                className="mb-4"
                                iconColor="#D5E880"
                            />
                            <InputField
                                register={register}
                                name="noOfTravelers"
                                errors={errors}
                                label="No. of Travelers"
                                required={true}
                                type="number"
                                min="0"
                                placeholder="No. of Travelers"
                                className="mb-4"
                            />
                        </div>
                    </div>
                    <h2 className="jakarta my-4 font-semibold text-base sm:text-lg md:text-xl text-[#0B2839]">
                        Add Ons & Options
                    </h2>
                    <div className="flex flex-col gap-4 border-2 p-4 border-[#ebebeb] rounded-xl">
                        {addOnData.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    {React.createElement(item.icon, {
                                        className: "size-5 sm:size-6",
                                    })}
                                    <h2 className="jakarta text-sm sm:text-base">{item.text}</h2>
                                    <GrCircleInformation className="size-5 sm:size-6 text-[#2a78a6]" />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-full">
                                        <h3 className="jakarta font-semibold text-sm sm:text-base md:text-lg">
                                            +US $100{" "}
                                            <span className="jakarta text-xs sm:text-sm text-[#888888]">
                                                /Per Person
                                            </span>
                                        </h3>
                                    </div>
                                    {/* <Controller
                                        name={`addOns[${index}].tickets`}
                                        control={control}
                                        render={({ field }) => (
                                            <CounterInput
                                                register={register}
                                                control={control}
                                                name={`addOns[${index}].tickets`}
                                                errors={errors}
                                                step={1}
                                                defaultValue={1}
                                                placeholder="Select tickets"
                                                validationRules={{
                                                    required: "Number of tickets is required",
                                                }}
                                                {...field}
                                            />
                                        )}
                                    /> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <BookingButtons
                        onNextClick={handleSubmit(onSubmit)}
                        disableBack={true}
                        onBackClick={() => { }}
                    />
                </form>
            </div>
        </div>
    );
};

export default FormSection;
