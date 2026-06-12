"use client";
import PhoneInputField from "@/components/PhoneInput";
import DropdownField from "@/components/shared/DropdownField";
import InputField from "@/components/shared/InputField";
import React from "react";
import { useForm } from "react-hook-form";
import { IoIosMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

import BookingButtons from "@/components/BookingButtons";
import { countryOptions, nationalityOptions, nepalProvinces, relationshipOptions } from "./tripDetailsObj";

const TravelerInfoForm = ({ onBack, onNext }: { onBack: () => void; onNext: () => void }) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
        onNext();
    };

    return (
        <div className="sm:px-8 px-5 md:px-16 lg:px-24">
            <h2 className="jakarta font-semibold text-base md:text-lg lg:text-xl my-2">
                Lead Traveler Details
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-2 border-[#ebebeb] rounded-xl p-4">
                    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-2">
                        <div className="w-full md:w-auto md:flex-none lg:w-auto lg:flex-none">
                            <DropdownField
                                register={register}
                                name="leadTraveler.title"
                                label="Title"
                                required={true}
                                options={[
                                    { label: "Mr.", value: "Mr." },
                                    { label: "Mrs.", value: "Mrs." },
                                ]}
                                errors={errors}
                                placeholder="Select"
                                className="w-full md:w-24 lg:w-32"
                            />
                        </div>
                        <div className="w-full lg:flex-1">
                            <InputField
                                register={register}
                                name="leadTraveler.firstName"
                                type="text"
                                label="First Name"
                                required={true}
                                placeholder="Eg. John"
                                errors={errors}
                            />
                        </div>
                        <div className="w-full lg:flex-1">
                            <InputField
                                register={register}
                                name="leadTraveler.lastName"
                                type="text"
                                label="Last Name"
                                required={true}
                                placeholder="Eg. Doe"
                                errors={errors}
                            />
                        </div>
                        <div className="w-full md:w-3/4 lg:flex-1">
                            <DropdownField
                                register={register}
                                name="leadTraveler.gender"
                                label="Gender"
                                required={true}
                                options={[
                                    { label: "Male", value: "male" },
                                    { label: "Female", value: "female" },
                                ]}
                                errors={errors}
                                placeholder="Select"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row my-3 gap-2">
                        <InputField
                            register={register}
                            name="leadTraveler.email"
                            type="email"
                            label="Email"
                            required={true}
                            placeholder="Eg.ABC@example.com"
                            icon={<IoIosMail className="size-6" />}
                            iconClassName=" text-[#D5E880]"
                            errors={errors}
                        />

                        <DropdownField
                            register={register}
                            name="leadTraveler.nationality"
                            label="Nationality"
                            required={true}
                            options={nationalityOptions}
                            errors={errors}
                            placeholder="Select"
                        />
                        <PhoneInputField
                            register={register}
                            name="leadTraveler.phone"
                            label="Phone Number"
                            required={true}
                            errors={errors}
                            placeholder="XXXXXXXXXXXX"
                        />
                    </div>
                    <h2 className="jakarta text-sm md:text-base lg:text-lg my-2">
                        Address
                    </h2>

                    <div className="flex flex-col md:flex-row my-3 gap-2">
                        <InputField
                            register={register}
                            name="leadTraveler.mailingAddress"
                            type="text"
                            label="Mailing Address"
                            required={true}
                            placeholder="Enter your mailing address"
                            icon={<IoLocation className="size-6" />}
                            iconClassName=" text-[#D5E880]"
                            errors={errors}
                        />

                        <InputField
                            register={register}
                            name="leadTraveler.city"
                            type="text"
                            label="City"
                            required={true}
                            placeholder="Enter city"
                            errors={errors}
                        />
                        <DropdownField
                            register={register}
                            name="leadTraveler.province"
                            label="Province"
                            required={true}
                            options={nepalProvinces}
                            errors={errors}
                            placeholder="Select"
                        />
                    </div>
                    <h2 className="jakarta text-sm md:text-base lg:text-lg my-2">
                        Emergency Contact
                    </h2>

                    <div className="flex flex-col md:flex-row my-3 gap-2">
                        <InputField
                            register={register}
                            name="leadTraveler.emergencyContact.fullName"
                            type="text"
                            label="Full Name"
                            required={true}
                            placeholder="Eg. John Doe"
                            errors={errors}
                        />

                        <DropdownField
                            register={register}
                            name="leadTraveler.emergencyContact.relationship"
                            label="Relationship"
                            required={true}
                            options={relationshipOptions}
                            errors={errors}
                            placeholder="Select"
                        />
                        <PhoneInputField
                            register={register}
                            name="leadTraveler.emergencyContact.phone"
                            label="Phone Number"
                            required={true}
                            errors={errors}
                            placeholder="XXXXXXXXXXXX"
                        />
                    </div>
                </div>

                <h2 className="jakarta font-semibold text-base md:text-lg lg:text-xl my-2">
                    Traveler -2 Details
                </h2>
                <div className="border-2 border-[#ebebeb] rounded-xl p-4">
                    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-2">
                        <div className="w-full md:w-auto md:flex-none lg:w-auto lg:flex-none">
                            <DropdownField
                                register={register}
                                name="traveler2.title"
                                label="Title"
                                required={true}
                                options={[
                                    { label: "Mr.", value: "Mr." },
                                    { label: "Mrs.", value: "Mrs." },
                                ]}
                                errors={errors}
                                placeholder="Select"
                                className="w-full md:w-24 lg:w-32"
                            />
                        </div>
                        <div className="w-full lg:flex-1">
                            <InputField
                                register={register}
                                name="traveler2.firstName"
                                type="text"
                                label="First Name"
                                required={true}
                                placeholder="Eg. John"
                                errors={errors}
                            />
                        </div>
                        <div className="w-full lg:flex-1">
                            <InputField
                                register={register}
                                name="traveler2.lastName"
                                type="text"
                                label="Last Name"
                                required={true}
                                placeholder="Eg. Doe"
                                errors={errors}
                            />
                        </div>
                        <div className="w-full md:w-3/4 lg:flex-1">
                            <DropdownField
                                register={register}
                                name="traveler2.gender"
                                label="Gender"
                                required={true}
                                options={[
                                    { label: "Male", value: "male" },
                                    { label: "Female", value: "female" },
                                ]}
                                errors={errors}
                                placeholder="Select"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row my-3 gap-2">
                        <InputField
                            register={register}
                            name="traveler2.email"
                            type="email"
                            label="Email"
                            required={true}
                            placeholder="Eg.ABC@example.com"
                            icon={<IoIosMail className="size-6" />}
                            iconClassName=" text-[#D5E880]"
                            errors={errors}
                        />

                        <DropdownField
                            register={register}
                            name="traveler2.country"
                            label="Country"
                            required={true}
                            options={countryOptions}
                            errors={errors}
                            placeholder="Select"
                        />
                        <PhoneInputField
                            register={register}
                            name="traveler2.phone"
                            label="Phone Number"
                            required={true}
                            errors={errors}
                            placeholder="XXXXXXXXXXXX"
                        />
                    </div>
                </div>
                <BookingButtons
                    onBackClick={onBack}
                    onNextClick={() => handleSubmit(onSubmit)()}
                />
            </form>
        </div>
    );
};

export default TravelerInfoForm;
