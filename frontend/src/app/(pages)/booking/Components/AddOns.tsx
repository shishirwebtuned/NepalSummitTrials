import React from "react";
import { GrCircleInformation } from "react-icons/gr";
import { GiCommercialAirplane } from "react-icons/gi";
import { Controller } from "react-hook-form";
import CounterInput from "@/components/shared/CounterInput";

const AddOns = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <GiCommercialAirplane />
                <h2>Kathmandu to Pokhara Flight Ticket</h2>
                <GrCircleInformation />
            </div>
            <div className="flex items-center gap-3">
                <h3 className="jakarta font-semibold text-base md:text-lg lg:text-xl">
                    +US $100{" "}
                    <span className="jakarta text-sm text-[#888888]">/Per Person</span>
                </h3>
                {/* <Controller
                    name="tickets"
                    control={control}
                    render={({ field }) => (
                        <CounterInput
                            register={register}
                            control={control}
                            name="tickets"
                            errors={errors}
                            label="Number of Tickets"
                            required={true}
                            min={1}
                            max={5}
                            step={1}
                            defaultValue={1}
                            placeholder="Select tickets"
                            validationRules={{
                                required: "Number of tickets is required",
                                min: { value: 1, message: "At least 1 ticket is required" },
                                max: { value: 5, message: "Cannot exceed 5 tickets" },
                            }}
                        />
                    )}
                /> */}
            </div>
        </div>
    );
};

export default AddOns;
