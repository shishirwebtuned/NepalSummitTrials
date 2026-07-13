'use client'
import PhoneInputField from '@/components/PhoneInput'
import DropdownField from '@/components/shared/DropdownField'
import InputField from '@/components/shared/InputField'
import React from 'react'
import { useForm } from 'react-hook-form'
import { IoIosMail } from 'react-icons/io'
import { IoLocation } from 'react-icons/io5'
import BookingButtons from '@/components/BookingButtons'
import { countryOptions, nationalityOptions, nepalProvinces, relationshipOptions } from './tripDetailsObj'
import { BookingData } from './StepperSection'

const TravelerInfoForm = ({
    onBack,
    onNext,
    bookingData,
}: {
    onBack: () => void
    onNext: (data: Partial<BookingData>) => void
    bookingData: Partial<BookingData>
}) => {
    const numAdults = bookingData.numAdults ?? 1
    const numChildren = bookingData.numChildren ?? 0
    const totalTravelers = numAdults + numChildren

    const { register, handleSubmit, control, watch, formState: { errors } } = useForm()

    const onSubmit = (data: any) => {
        const travelerKeys = Array.from({ length: totalTravelers }, (_, i) => `traveler_${i}`)
        const travelers = travelerKeys.map((key) => data[key])
        onNext({ travelers })
    }

    return (
        <div className="sm:px-8 px-5 md:px-16 lg:px-24">
            <h2 className="jakarta font-semibold text-base md:text-lg lg:text-xl my-2">
                Traveler Details ({totalTravelers} {totalTravelers === 1 ? 'person' : 'people'})
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                {Array.from({ length: totalTravelers }, (_, index) => {
                    const isFirstTraveler = index === 0
                    const isLikelyChild = index >= numAdults // travelers after adults are children

                    return (
                        <div key={index} className="border-2 border-[#ebebeb] rounded-xl p-4 mb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-[#0B2839] text-sm md:text-base">
                                    {isFirstTraveler ? 'Lead Traveler' : `Traveler ${index + 1}`}
                                </h3>
                                {/* Child checkbox — noticeable */}
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            defaultChecked={isLikelyChild}
                                            {...register(`traveler_${index}.isChild`)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-10 h-6 bg-slate-200 peer-checked:bg-[#2A78A6] rounded-full transition-colors" />
                                        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow peer-checked:translate-x-4 transition-transform" />
                                    </div>
                                    <span className="text-xs font-semibold text-[#2A78A6] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                                        Child traveler
                                    </span>
                                </label>
                            </div>

                            <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-2">
                                <div className="w-full md:w-auto md:flex-none lg:w-auto lg:flex-none">
                                    <DropdownField
                                        register={register}
                                        name={`traveler_${index}.title`}
                                        label="Title"
                                        required={true}
                                        options={[{ label: 'Mr.', value: 'Mr.' }, { label: 'Mrs.', value: 'Mrs.' }, { label: 'Ms.', value: 'Ms.' }]}
                                        errors={errors}
                                        placeholder="Select"
                                        className="w-full md:w-24 lg:w-32"
                                    />
                                </div>
                                <div className="w-full lg:flex-1">
                                    <InputField register={register} name={`traveler_${index}.firstName`} type="text" label="First Name" required={true} placeholder="Eg. John" errors={errors} />
                                </div>
                                <div className="w-full lg:flex-1">
                                    <InputField register={register} name={`traveler_${index}.lastName`} type="text" label="Last Name" required={true} placeholder="Eg. Doe" errors={errors} />
                                </div>
                                <div className="w-full md:w-3/4 lg:flex-1">
                                    <DropdownField
                                        register={register}
                                        name={`traveler_${index}.gender`}
                                        label="Gender"
                                        required={true}
                                        options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]}
                                        errors={errors}
                                        placeholder="Select"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row my-3 gap-2">
                                <InputField
                                    register={register}
                                    name={`traveler_${index}.email`}
                                    type="email"
                                    label="Email"
                                    required={true}
                                    placeholder="Eg.ABC@example.com"
                                    icon={<IoIosMail className="size-6" />}
                                    iconClassName="text-[#D5E880]"
                                    errors={errors}
                                />
                                <DropdownField
                                    register={register}
                                    name={`traveler_${index}.nationality`}
                                    label="Nationality"
                                    required={true}
                                    options={nationalityOptions}
                                    errors={errors}
                                    placeholder="Select"
                                />
                                <PhoneInputField
                                    register={register}
                                    name={`traveler_${index}.phone`}
                                    label="Phone Number"
                                    required={true}
                                    errors={errors}
                                    placeholder="XXXXXXXXXXXX"
                                />
                            </div>

                            {/* Address — only for lead traveler */}
                            {isFirstTraveler && (
                                <>
                                    <h2 className="jakarta text-sm md:text-base lg:text-lg my-2">Address</h2>
                                    <div className="flex flex-col md:flex-row my-3 gap-2">
                                        <InputField
                                            register={register}
                                            name={`traveler_${index}.mailingAddress`}
                                            type="text"
                                            label="Mailing Address"
                                            required={true}
                                            placeholder="Enter your mailing address"
                                            icon={<IoLocation className="size-6" />}
                                            iconClassName="text-[#D5E880]"
                                            errors={errors}
                                        />
                                        <InputField register={register} name={`traveler_${index}.city`} type="text" label="City" required={true} placeholder="Enter city" errors={errors} />
                                        <DropdownField register={register} name={`traveler_${index}.province`} label="Province" required={true} options={nepalProvinces} errors={errors} placeholder="Select" />
                                    </div>

                                    <h2 className="jakarta text-sm md:text-base lg:text-lg my-2">Emergency Contact</h2>
                                    <div className="flex flex-col md:flex-row my-3 gap-2">
                                        <InputField register={register} name={`traveler_${index}.emergencyContact.fullName`} type="text" label="Full Name" required={true} placeholder="Eg. John Doe" errors={errors} />
                                        <DropdownField register={register} name={`traveler_${index}.emergencyContact.relationship`} label="Relationship" required={true} options={relationshipOptions} errors={errors} placeholder="Select" />
                                        <PhoneInputField register={register} name={`traveler_${index}.emergencyContact.phone`} label="Phone Number" required={true} errors={errors} placeholder="XXXXXXXXXXXX" />
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}

                <BookingButtons
                    onBackClick={onBack}
                    onNextClick={() => handleSubmit(onSubmit)()}
                />
            </form>
        </div>
    )
}

export default TravelerInfoForm