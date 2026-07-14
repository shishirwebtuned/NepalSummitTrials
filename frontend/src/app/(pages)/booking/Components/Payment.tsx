'use client'
import React, { useState, useTransition } from 'react'
import { FaFileLines } from 'react-icons/fa6'
import BookingButtons from '@/components/BookingButtons'
import { BookingData } from './StepperSection'
import { createBooking } from '@/app/actions/bookings'
import toast from 'react-hot-toast'

type Trek = {
    name: string
    id: string
}

const paymentMethods = [
    { name: 'Paypal', image: '/images/logo/paypalLogo.svg' },
    { name: 'Esewa', image: '/images/logo/esewaLogo.svg' },
]

const Payment = ({
    onBack,
    onNext,
    trek,
    bookingData,
}: {
    onBack: () => void
    onNext: () => void
    trek: Trek
    bookingData: BookingData
}) => {
    const [selectedMethod, setSelectedMethod] = useState('Paypal')
    const [isPending, startTransition] = useTransition()


    const handlePay = () => {
        startTransition(async () => {
            try {
                const booking = await createBooking(bookingData, trek.id, selectedMethod)
                toast.success('Booking created successfully!')
                onNext()
            } catch (err: any) {
                toast.error(err.message || 'Failed to create booking')
            }
        })
    }

    return (
        <div className="flex jakarta flex-col-reverse md:flex-row-reverse gap-8 w-full sm:px-8 px-5 md:px-16 lg:px-24 md:mt-10 mt-10 items-center">

            {/* Left: Payment method selection */}
            <div className="md:w-1/2 w-full bg-white rounded-md lg:p-6 md:p-5 p-2">
                <h3 className="font-semibold text-[#0B2839] text-base md:text-lg mb-4">
                    Select Payment Method
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-8 max-w-xs">
                    {paymentMethods.map((method) => (
                        <button
                            key={method.name}
                            onClick={() => setSelectedMethod(method.name)}
                            className={`px-4 py-4 border-2 cursor-pointer rounded-xl flex flex-col gap-2 items-center justify-center transition-all ${selectedMethod === method.name
                                ? 'border-[#2A78A6] bg-blue-50'
                                : 'border-[#E0E0E0] hover:border-[#2A78A6]/40'
                                }`}
                        >
                            <img src={method.image} alt={method.name} className="h-6 w-auto" />
                            <p className={`text-sm font-semibold ${selectedMethod === method.name ? 'text-[#2A78A6]' : 'text-[#727F96]'}`}>
                                {method.name}
                            </p>
                        </button>
                    ))}
                </div>

                <div className="bg-[#F1FCFF] border border-[#A3BCC9]/60 rounded-xl p-4 mb-6">
                    <p className="text-sm text-[#6F717C]">
                        You will be redirected to{' '}
                        <span className="font-semibold text-[#2A78A6]">{selectedMethod}</span> to complete
                        your advance payment of{' '}
                        <span className="font-bold text-[#0B2839]">${bookingData.advanceAmount?.toLocaleString()}</span>.
                        The remaining{' '}
                        <span className="font-bold text-[#0B2839]">${bookingData.remainingAmount?.toLocaleString()}</span>{' '}
                        is payable upon arrival.
                    </p>
                </div>

                <div className="flex w-full items-center justify-center pt-4">
                    <BookingButtons
                        nextText={
                            isPending
                                ? 'Creating booking...'
                                : `Pay with ${selectedMethod}`
                        }
                        onBackClick={onBack}
                        onNextClick={handlePay}
                        disableNext={isPending}
                    />
                </div>
            </div>

            {/* Right: Summary */}
            <div className="w-full md:w-1/3 flex flex-col justify-around bg-[#DDEBF5]/70 rounded-2xl p-4 md:p-6 shadow-sm">
                <div>
                    <h2 className="lg:text-xl md:text-lg text-base text-[#253058] font-semibold">Payment Summary</h2>

                    <div className="py-3 md:py-5 space-y-3 mt-4 rounded-2xl px-3 md:px-5 bg-[#DFECF6]">

                        {/* Trek & travelers */}
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">Trek</span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px] text-right max-w-[55%]">
                                {trek.name}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">Travelers</span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                {bookingData.numAdults} Adult{bookingData.numAdults > 1 ? 's' : ''}
                                {bookingData.numChildren > 0
                                    ? ` + ${bookingData.numChildren} Child${bookingData.numChildren > 1 ? 'ren' : ''}`
                                    : ''}
                            </span>
                        </div>

                        <div className="border-t border-[#A3BCC9]/30" />

                        {/* Price breakdown */}
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">Base price</span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                ${bookingData.totalAmount?.toLocaleString()}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">VAT (13%)</span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                ${bookingData.vatAmount?.toLocaleString()}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px] font-semibold">Total incl. VAT</span>
                            <span className="font-semibold text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                ${bookingData.totalWithVat?.toLocaleString()}
                            </span>
                        </div>

                        <div className="border-t border-[#A3BCC9]/30" />

                        {/* Advance & remaining */}
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">Advance now (10%)</span>
                            <span className="font-semibold text-[#2A78A6] lg:text-sm md:text-xs text-[10px]">
                                ${bookingData.advanceAmount?.toLocaleString()}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#7C87AA] lg:text-sm md:text-xs text-[10px]">Remaining on arrival</span>
                            <span className="font-medium text-[#253058] lg:text-sm md:text-xs text-[10px]">
                                ${bookingData.remainingAmount?.toLocaleString()}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-dashed border-t w-full mt-7 md:mt-12" />

                <div className="mt-4 md:mt-6 flex flex-row justify-between items-center">
                    <div>
                        <span className="text-[#7C87AA] tracking-wide lg:text-sm md:text-xs text-[10px]">
                            Amount to be Paid Now
                        </span>
                        <div className="lg:text-2xl md:text-xl mt-1 text-lg font-semibold text-[#253058]">
                            ${bookingData.advanceAmount?.toLocaleString()}
                        </div>
                        <p className="text-xs text-[#7C87AA] mt-1">
                            ${bookingData.remainingAmount?.toLocaleString()} due on arrival
                        </p>
                    </div>
                    <FaFileLines className="lg:size-14 md:size-10 size-8 text-[#7C87AA]" />
                </div>
            </div>

        </div>
    )
}

export default Payment