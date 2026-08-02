'use client'

import React, { useState } from 'react'
import { ChevronDown, MapPin } from 'lucide-react'
import DOMPurify from 'isomorphic-dompurify'

type ItineraryDay = {
  day: number
  title: string
  description: string
  highlights?: string // rich text HTML from the editor; optional since older rows may not have it
}

const TrekItinerary = ({ itinerary }: { itinerary: ItineraryDay[] }) => {
  const [expanded, setExpanded] = useState(0)

  if (!itinerary || itinerary.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-10">
        <p className="text-sm text-gray-400">No itinerary available for this trek.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-semibold text-[#00394f] mb-6">Trek Itinerary</h2>
      <div className="relative pl-8">
        {itinerary.map((item, idx) => (
          <div key={idx} className="relative pb-6">
            {/* Timeline Icon */}
            <span
              className={`absolute left-[-18px] top-[-1] flex items-center justify-center rounded-full ${idx === 0
                ? 'bg-lime-200 w-6 h-6 text-white'
                : 'bg-white w-5 h-5 border-2 border-lime-300'
                }`}
            >
              {idx === 0 ? (
                <MapPin className="w-4 h-4 text-[#00394f]" />
              ) : (
                <span className="w-2 h-2 bg-lime-400 rounded-full" />
              )}
            </span>

            {/* Day Title */}
            <div
              className={`cursor-pointer ml-5 flex items-center justify-between ${idx === expanded ? 'font-semibold text-[#00394f]' : 'text-gray-800'
                }`}
              onClick={() => setExpanded(idx === expanded ? -1 : idx)}
            >
              <p>{`Day ${item.day}: ${item.title}`}</p>
              {(item.description || item.highlights) && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expanded === idx ? 'rotate-180' : ''}`}
                />
              )}
            </div>

            {/* Expanded Content */}
            {expanded === idx && (
              <div className="ml-5 mt-2 space-y-3">
                {item.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.highlights && (
                  <div
                    className="text-sm text-gray-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-1"
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.highlights) }}
                  />
                )}
              </div>
            )}

            <div className="mt-4 border-b border-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrekItinerary