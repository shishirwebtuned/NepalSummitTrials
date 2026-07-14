'use client'
import BookingButtons from '@/components/BookingButtons'
import DateInput from '@/components/shared/DateInput'
import InputField from '@/components/shared/InputField'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GrCircleInformation } from 'react-icons/gr'
import { addOnData } from './tripDetailsObj'
import { BookingData } from './StepperSection'

type Trek = {
    id: string
    name: string
    duration_days: number
    price_adult: number
    price_child: number | null
    cover_image: string | null
}

interface FormSectionProps {
    trek: Trek
    bookingData: Partial<BookingData>
    onNext: (data: Partial<BookingData>) => void
}

const FormSection = ({ trek, bookingData, onNext }: FormSectionProps) => {
    const [numAdults, setNumAdults] = useState(bookingData.numAdults ?? 1)
    const [numChildren, setNumChildren] = useState(bookingData.numChildren ?? 0)

    const [startDate, setStartDate] = useState(bookingData.startDate ?? '')
    const adultTotal = numAdults * trek.price_adult
    const childTotal = numChildren * (trek.price_child ?? 0)

    const totalAmount = adultTotal + childTotal
    const vatAmount = Math.round(totalAmount * 0.13)
    const totalWithVat = totalAmount + vatAmount
    const advanceAmount = Math.round(totalWithVat * 0.1)
    const remainingAmount = totalWithVat - advanceAmount

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            startDate: bookingData.startDate || '',
        },
    })

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nextDate = event.target.value
        setStartDate(nextDate)
        setValue('startDate', nextDate, { shouldDirty: true, shouldValidate: true })
    }

    const onSubmit = (data: any) => {
        const selectedDate = startDate || data.startDate || ''

        onNext({
            startDate: selectedDate,
            numAdults,
            numChildren,
            totalAmount,
            vatAmount,
            totalWithVat,
            advanceAmount,
            remainingAmount,
        })
    }

    return (
        <div className="sm:px-8 px-5 md:px-16 lg:px-24">
            {/* Trek summary strip */}
            <div className="flex items-center gap-4 bg-[#F1FCFF] border border-[#A3BCC9]/60 rounded-xl px-4 py-3 mb-5">
                {trek.cover_image && (
                    <img src={trek.cover_image} alt={trek.name} className="w-14 h-14 rounded-lg object-cover hidden sm:block" />
                )}
                <div>
                    <p className="font-semibold text-[#0B2839] text-sm md:text-base">{trek.name}</p>
                    <p className="text-xs text-[#6F717C]">{trek.duration_days} days</p>
                </div>
                <div className="ml-auto text-right">
                    <p className="text-xs text-[#939393]">Adult from</p>
                    <p className="font-bold text-[#0B2839]">${trek.price_adult.toLocaleString()}</p>
                </div>
            </div>

            <h2 className="jakarta font-semibold text-xs md:text-lg lg:text-xl text-[#0B2839]">
                Date & Travelers
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="border-2 border-[#ebebeb] rounded-xl">
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <DateInput
                            register={register}
                            name="startDate"
                            errors={errors}
                            label="Travel Date"
                            placeholder="Date to Travel"
                            className="mb-4"
                            iconColor="#D5E880"
                            value={startDate}
                            onChange={handleDateChange}
                        />

                        {/* Adults counter */}
                        <div>
                            <label className="block text-sm jakarta mb-1 font-medium">No. of Adults</label>
                            <div className="flex items-center gap-3 border border-[#c0c0c0] rounded-lg px-3 py-2 bg-white w-fit">
                                <button
                                    type="button"
                                    onClick={() => setNumAdults(Math.max(1, numAdults - 1))}
                                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold text-lg flex items-center justify-center"
                                >−</button>
                                <span className="w-6 text-center font-semibold">{numAdults}</span>
                                <button
                                    type="button"
                                    onClick={() => setNumAdults(numAdults + 1)}
                                    className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold text-lg flex items-center justify-center"
                                >+</button>
                            </div>
                            <p className="text-xs text-[#939393] mt-1">${trek.price_adult.toLocaleString()} × {numAdults} = <span className="font-semibold text-[#0B2839]">${adultTotal.toLocaleString()}</span></p>
                        </div>

                        {/* Children counter — only if child price exists */}
                        {trek.price_child !== null && (
                            <div>
                                <label className="block text-sm jakarta mb-1 font-medium">No. of Children</label>
                                <div className="flex items-center gap-3 border border-[#c0c0c0] rounded-lg px-3 py-2 bg-white w-fit">
                                    <button
                                        type="button"
                                        onClick={() => setNumChildren(Math.max(0, numChildren - 1))}
                                        className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold text-lg flex items-center justify-center"
                                    >−</button>
                                    <span className="w-6 text-center font-semibold">{numChildren}</span>
                                    <button
                                        type="button"
                                        onClick={() => setNumChildren(numChildren + 1)}
                                        className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 font-bold text-lg flex items-center justify-center"
                                    >+</button>
                                </div>
                                <p className="text-xs text-[#939393] mt-1">${trek.price_child.toLocaleString()} × {numChildren} = <span className="font-semibold text-[#0B2839]">${childTotal.toLocaleString()}</span></p>
                            </div>
                        )}
                    </div>

                    {/* Live total */}
                    <div className="border-t border-[#ebebeb] px-4 py-3 flex items-center justify-between bg-[#F1FCFF] rounded-b-xl">
                        <span className="text-sm font-medium text-[#6F717C]">Estimated total</span>
                        <div className="text-right">
                            <p className="text-lg font-bold text-[#0B2839]">${totalAmount.toLocaleString()}</p>
                            <p className="text-xs text-[#939393]">Advance (10%): ${advanceAmount.toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                {/* <h2 className="jakarta my-4 font-semibold text-base sm:text-lg md:text-xl text-[#0B2839]">
                    Add Ons & Options
                </h2>
                <div className="flex flex-col gap-4 border-2 p-4 border-[#ebebeb] rounded-xl">
                    {addOnData.map((item, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                {React.createElement(item.icon, { className: 'size-5 sm:size-6' })}
                                <h2 className="jakarta text-sm sm:text-base">{item.text}</h2>
                                <GrCircleInformation className="size-5 sm:size-6 text-[#2a78a6]" />
                            </div>
                            <div className="flex items-center gap-4">
                                <h3 className="jakarta font-semibold text-sm sm:text-base md:text-lg">
                                    +US $100 <span className="jakarta text-xs sm:text-sm text-[#888888]">/Per Person</span>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div> */}

                <BookingButtons
                    onNextClick={handleSubmit(onSubmit)}
                    disableBack={true}
                    onBackClick={() => { }}
                />
            </form>
        </div>
    )
}

export default FormSection