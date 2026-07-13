import BookingButtons from '@/components/BookingButtons'
import React from 'react'
import { TbEdit } from 'react-icons/tb'
import { BookingData } from './StepperSection'

type Trek = {
    name: string
    price_adult: number
    price_child: number | null
}

const TravelerInfo = ({
    onNext,
    onBack,
    trek,
    bookingData,
}: {
    onNext: () => void
    onBack: () => void
    trek: Trek
    bookingData: BookingData
}) => {
    const { numAdults, numChildren, totalAmount, advanceAmount, startDate, travelers } = bookingData

    const tripDetails = [
        { label: 'Duration', value: `${trek.name}` },
        { label: 'Trip Start', value: startDate || 'N/A' },
        { label: 'Adults', value: `${numAdults} Person(s) × $${trek.price_adult.toLocaleString()}` },
        ...(numChildren > 0 && trek.price_child !== null
            ? [{ label: 'Children', value: `${numChildren} Child(ren) × $${trek.price_child.toLocaleString()}` }]
            : []),
        { label: 'Advance Payable', value: `US $${advanceAmount?.toLocaleString()} (10% of Total)` },
    ]

    return (
        <div className="jakarta sm:px-8 px-5 md:px-16 lg:px-24">
            <p className="text-[#0B2839] font-semibold lg:text-xl md:text-lg text-base">
                Review Booking Details
            </p>

            {/* Trek summary */}
            <div className="bg-[#F1FCFF] mt-5 border border-[#A3BCC9]/60 rounded-xl lg:px-6 md:px-5 px-3 lg:py-6 md:py-5 py-4 flex flex-col sm:gap-2 gap-4">
                <div className="flex sm:flex-row flex-col text-center justify-center sm:justify-between items-center sm:gap-1 gap-2">
                    <p className="text-[#2A78A6] lg:text-xl md:text-lg text-base font-semibold">{trek.name}</p>
                    <button
                        onClick={onBack}
                        className="bg-[#0B2839]/80 flex flex-row items-center gap-2 cursor-pointer text-white px-3 py-1 rounded-md hover:bg-[#0B2839] transition-all duration-200"
                    >
                        <p className="lg:text-lg md:text-base text-sm">Edit</p>
                        <TbEdit />
                    </button>
                </div>
                <div className="flex flex-col justify-center items-start gap-1">
                    {tripDetails.map((detail, index) => (
                        <div key={index} className="flex flex-row items-center justify-start gap-2 text-[#6F717C] lg:text-base md:text-sm text-xs">
                            <span className="font-semibold">{detail.label}:</span>
                            <p className="font-medium">{detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Price breakdown */}
            <div className="flex flex-col mt-8 gap-6">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-col justify-center items-start gap-[3px] lg:text-lg md:text-base text-sm">
                        <span className="text-black">Adults ({numAdults})</span>
                        <p className="text-[#6F717C]">US ${trek.price_adult.toLocaleString()} × {numAdults}</p>
                    </div>
                    <p className="text-black lg:text-lg md:text-base text-sm font-semibold">
                        US ${(numAdults * trek.price_adult).toLocaleString()}
                    </p>
                </div>
                {numChildren > 0 && trek.price_child !== null && (
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-col justify-center items-start gap-[3px] lg:text-lg md:text-base text-sm">
                            <span className="text-black">Children ({numChildren})</span>
                            <p className="text-[#6F717C]">US ${trek.price_child.toLocaleString()} × {numChildren}</p>
                        </div>
                        <p className="text-black lg:text-lg md:text-base text-sm font-semibold">
                            US ${(numChildren * trek.price_child).toLocaleString()}
                        </p>
                    </div>
                )}
            </div>

            {/* Totals */}
            <div className="flex flex-col justify-between mt-6 gap-2">
                <div className="flex flex-row justify-between items-center text-[#2A78A6] lg:text-xl md:text-lg text-base font-semibold">
                    <span>Total Price:</span>
                    <p>US ${totalAmount?.toLocaleString()}</p>
                </div>
                <div className="flex flex-row justify-between items-center text-[#2A78A6] lg:text-xl md:text-lg text-base font-semibold">
                    <span>Payable Now:</span>
                    <p>US ${advanceAmount?.toLocaleString()}</p>
                </div>
            </div>

            <div className="bg-[#F1FCFF] border mt-7 border-[#A3BCC9]/60 rounded-md lg:px-4 px-3 lg:py-5 md:py-4 py-3">
                <p className="lg:text-xl md:text-lg text-base">
                    The Balance of{' '}
                    <span className="text-[#2A78A6] font-semibold">
                        US ${((totalAmount ?? 0) - (advanceAmount ?? 0)).toLocaleString()}
                    </span>{' '}
                    is payable upon arrival.
                </p>
            </div>

            {/* Travelers review */}
            <div className="flex flex-col gap-10 w-full mt-10">
                {travelers?.map((traveler, index) => (
                    <div key={index} className="w-full">
                        <p className="bg-[#D5E880]/20 px-4 py-3 w-full text-[#0B2839] lg:text-xl md:text-lg text-base font-semibold rounded-md flex items-center gap-3">
                            {index === 0 ? 'Lead Traveler' : `Traveler ${index + 1}`}
                            {traveler.isChild && (
                                <span className="text-xs font-semibold text-[#2A78A6] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                                    Child
                                </span>
                            )}
                        </p>
                        <div className="lg:px-10 md:px-6 px-3">
                            <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 items-center justify-center mt-4">
                                {[
                                    { label: 'Full Name', value: `${traveler.title} ${traveler.firstName} ${traveler.lastName}` },
                                    { label: 'Gender', value: traveler.gender },
                                    { label: 'Nationality', value: traveler.nationality || traveler.country || 'N/A' },
                                    { label: 'Phone', value: traveler.phone },
                                    { label: 'Email', value: traveler.email },
                                    { label: 'Type', value: traveler.isChild ? 'Child' : 'Adult' },
                                ].map((info, i) => (
                                    <div key={i} className="flex flex-col items-start justify-between md:gap-1 gap-[2px]">
                                        <span className="font-medium text-[#000000]/60 lg:text-sm md:text-xs text-[10px]">{info.label}</span>
                                        <p className="font-semibold text-black lg:text-base md:text-sm text-xs">{info.value}</p>
                                    </div>
                                ))}
                            </div>

                            {index === 0 && traveler.mailingAddress && (
                                <div className="flex flex-col mt-6">
                                    <div className="text-[#628DA7] border-b pb-1 border-[#D9D9D9] lg:text-base md:text-sm text-xs">Address</div>
                                    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 items-center justify-center mt-4">
                                        {[
                                            { label: 'Mailing Address', value: traveler.mailingAddress },
                                            { label: 'City', value: traveler.city },
                                            { label: 'Province', value: traveler.province },
                                        ].filter(i => i.value).map((info, i) => (
                                            <div key={i} className="flex flex-col items-start justify-between md:gap-1 gap-[2px]">
                                                <span className="font-medium text-[#000000]/60 lg:text-sm md:text-xs text-[10px]">{info.label}</span>
                                                <p className="font-semibold text-black lg:text-base md:text-sm text-xs">{info.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {index === 0 && traveler.emergencyContact && (
                                <div className="flex flex-col mt-6">
                                    <div className="text-[#628DA7] border-b pb-1 border-[#D9D9D9] lg:text-base md:text-sm text-xs">Emergency Contact</div>
                                    <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 items-center justify-center mt-4">
                                        {[
                                            { label: 'Full Name', value: traveler.emergencyContact.fullName },
                                            { label: 'Relationship', value: traveler.emergencyContact.relationship },
                                            { label: 'Phone', value: traveler.emergencyContact.phone },
                                        ].map((info, i) => (
                                            <div key={i} className="flex flex-col items-start justify-between md:gap-1 gap-[2px]">
                                                <span className="font-medium text-[#000000]/60 lg:text-sm md:text-xs text-[10px]">{info.label}</span>
                                                <p className="font-semibold text-black lg:text-base md:text-sm text-xs">{info.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="lg:mt-16 md:mt-10 mt-6">
                <BookingButtons onBackClick={onBack} onNextClick={onNext} />
            </div>
        </div>
    )
}

export default TravelerInfo