'use client'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

type Trek = {
  id: string
  price_adult: number
  price_child: number | null
}

const Pricing = ({ trek }: { trek: Trek }) => {
  const router = useRouter()

  return (
    <div className="space-y-6 w-full">
      <div className="bg-white rounded-xl shadow-md lg:px-6 md:px-3 px-5 lg:py-10 md:py-8 py-9">
        <h3 className="text-[#0B2839] font-semibold mb-4 lg:text-base md:text-[15px] text-sm">
          Pricing Info
        </h3>
        <div className="flex justify-between items-center text-center text-gray-800 font-medium">
          <div>
            <p className="lg:text-xs md:text-[11px] text-[10px] text-[#939393]">From</p>
            <p className="lg:text-lg md:text-base text-base text-[#0B2839] font-bold">
              ${trek.price_adult.toLocaleString()}
              <span className="text-[#939393] lg:text-[13px] md:text-xs text-[11px]"> / Adult</span>
            </p>
          </div>
          {trek.price_child !== null && (
            <>
              <div className="h-10 w-px bg-gray-300" />
              <div>
                <p className="lg:text-xs md:text-[11px] text-[10px] text-[#939393]">From</p>
                <p className="lg:text-lg md:text-base text-base text-[#0B2839] font-bold">
                  ${trek.price_child.toLocaleString()}
                  <span className="text-[#939393] lg:text-[13px] md:text-xs text-[11px]"> / Child</span>
                </p>
              </div>
            </>
          )}
        </div>

        <button
          onClick={() => router.push(`/booking?trek=${trek.id}`)}
          className="w-full mt-5 bg-[#D5E880] hover:bg-lime-300 transition text-gray-800 font-medium py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer lg:text-lg sm:text-sm text-sm"
        >
          <p>Check Availability</p>
          <ArrowRight className="lg:w-5 lg:h-5 md:w-4 md:h-4 w-4 h-4" />
        </button>

        <div className="mt-4 bg-[#2A78A6] text-white lg:text-sm md:text-xs text-xs rounded-b-xl lg:px-4 px-3 lg:py-3 py-[10px] text-center">
          Need help with booking?{' '}
          <a href="/contactus" className="text-[#D5E880] font-medium hover:underline">
            Send Us A Message
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[#ACC0CC]/34 lg:px-6 md:px-3 px-5 lg:py-10 md:py-8 py-9 text-center">
        <div className="flex justify-center mb-3">
          <img src="/images/icons/questionIcon.svg" alt="Question Icon" className="lg:w-12 lg:h-12 md:h-10 md:w-10 w-9 h-9" />
        </div>
        <h4 className="lg:text-lg md:text-base text-sm font-semibold text-gray-800">Have a Question in mind</h4>
        <p className="lg:text-sm md:text-xs text-[10px] text-gray-500 mt-1 mb-4">
          Looking for more info? Send a question to the tour agent to find out more.
        </p>
        <Link href="/contactus" className="bg-[#0B2839] hover:bg-[#0f557d] transition text-white font-medium py-2 px-4 lg:text-base md:text-sm text-xs cursor-pointer rounded-lg">
          Send the message
        </Link>
      </div>
    </div>
  )
}

export default Pricing