import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import TripTabs from './TripTabs'

type Trek = {
  description: string
  duration_days: number
  group_size: string | null
  best_season: string[] | null
  difficulty: string
  includes: string[] | null
  excludes: string[] | null
  highlights: string[] | null
  itinerary: { day: number; title: string; description: string }[] | null
}

const Description = ({ trek }: { trek: Trek }) => {
  const tripInfoData = [
    { label: 'Duration', value: `${trek.duration_days} Days` },
    { label: 'Group Size', value: trek.group_size || 'N/A' },
    { label: 'Difficulty', value: trek.difficulty.charAt(0).toUpperCase() + trek.difficulty.slice(1) },
    { label: 'Best Season', value: trek.best_season?.join(', ') || 'N/A' },
  ]

  return (
    <section className="text-sm jakarta text-gray-800 w-full">
      {/* Description */}
      <div className="flex flex-col justify-center items-start text-left gap-3 text-black/80 lg:text-sm md:text-[13px] text-xs">
        <p>{trek.description}</p>
      </div>

      {/* Include / Exclude */}
      {((trek.includes && trek.includes.length > 0) || (trek.excludes && trek.excludes.length > 0)) && (
        <div className="flex flex-col gap-2 py-10">
          <h2 className="text-[#0B2839] lg:text-[19px] md:text-[17px] text-[15px] font-semibold">
            Include/Exclude
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-1">
            {trek.includes && trek.includes.length > 0 && (
              <div>
                <h3 className="font-semibold lg:text-base md:text-sm text-xs mb-3">Cost Includes</h3>
                <ul className="space-y-2 text-green-600">
                  {trek.includes.map((item, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <img src="/images/icons/rightIcon.svg" alt="Check" className="w-4 h-4" />
                      <span className="lg:text-[15px] md:text-[13px] text-[11px] text-[#7F7F7F]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {trek.excludes && trek.excludes.length > 0 && (
              <div>
                <h3 className="font-semibold lg:text-base md:text-sm text-xs mb-3">Cost Excludes</h3>
                <ul className="space-y-2 text-red-600">
                  {trek.excludes.map((item, i) => (
                    <li key={i} className="flex gap-2 items-center">
                      <img src="/images/icons/wrongIcon.svg" alt="X" className="w-4 h-4" />
                      <span className="lg:text-[15px] md:text-[13px] text-[11px] text-[#7F7F7F]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Trip Info */}
      <div className="lg:p-6 md:p-4 p-4 relative bg-[#F1FCFF] rounded-xl border border-blue-200">
        <div className="-mt-8 mb-4 ml-3 inline-block bg-white border border-[#A3BCC9]/60 px-4 py-[7px] lg:-translate-y-[90%] -translate-y-[80%] rounded shadow text-[#0B2839] font-semibold lg:text-base md:text-sm text-xs">
          Trip Information
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 -mt-8 lg:p-4 md:p-3 p-2">
          {tripInfoData.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-lime-100 p-2 rounded shadow text-lime-600">
                <FaWhatsapp size={20} />
              </div>
              <div>
                <p className="text-[#7F7F7F] lg:text-sm md:text-[13px] text-xs font-semibold mb-1">{item.label}</p>
                <p className="text-black lg:text-sm md:text-[13px] text-xs font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TripTabs trek={trek} />

      {/* Highlights */}
      {trek.highlights && trek.highlights.length > 0 && (
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6 mt-6">
          <h3 className="font-semibold text-green-700 mb-2 lg:text-base md:text-[15px] text-sm">
            Trip Highlights
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-green-800">
            {trek.highlights.map((h, i) => (
              <li key={i} className="lg:text-sm md:text-[13px] text-xs">{h}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Description