'use client'
import React, { useState } from 'react'
import {
  FaListUl, FaMapMarkedAlt, FaCheckCircle, FaWater, FaStar, FaImage,
} from 'react-icons/fa'
import { MdPushPin } from 'react-icons/md'
import TrekItinerary from './TrekItinerary'
import Checklist from './Checklist'
// import Reviews from './Reviews'
import GalleryBentoGrid from './Gallery'

type ItineraryDay = { day: number; title: string; description: string }

type Trek = {
  description: string
  itinerary: ItineraryDay[] | null
  gallery?: string[] | null
  best_season: string[] | null
}

const tabs = [
  { id: 'overview', label: 'Overview', icon: <FaListUl /> },
  { id: 'itinerary', label: 'Itinerary', icon: <FaMapMarkedAlt /> },
  { id: 'checklist', label: 'Checklist', icon: <FaCheckCircle /> },
  { id: 'season', label: 'Season', icon: <FaWater /> },
  // { id: 'review', label: 'Review', icon: <FaStar /> },
  { id: 'gallery', label: 'Image Gallery', icon: <FaImage /> },
]

const overviewContent = (
  <div className="space-y-4 mt-6 text-black/80 jakarta lg:text-sm md:text-[13px] text-xs tracking-wide leading-5">
    <div className="flex items-center gap-2 text-[#ED4E39] font-semibold lg:text-[15px] md:text-sm text-[13px]">
      <MdPushPin className="text-lg" />
      Important Note
    </div>
    <p>
      Our Guest's security is of dominant concern to Himalayan Vacation Treks
      and Expedition. Please understand that the HV Treks trekking leader has
      the authority to adjust or cancel any part of the itinerary if it is found
      prudent. Unfavorable circumstances may occur during the trek...
    </p>
    {/* keep your existing paragraphs unchanged */}
  </div>
)

const TripTabs = ({ trek }: { trek: Trek }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const seasonContent = (
    <div className="px-4 py-5">
      <h2 className="lg:text-2xl md:text-xl text-lg font-semibold mb-6 text-[#0a2540]">
        Best Season
      </h2>
      {trek.best_season && trek.best_season.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {trek.best_season.map((s, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-4 py-2 border border-[#D5E880] rounded-full text-sm font-medium text-[#0a2540]"
            >
              <span className="w-3 h-3 rounded-full bg-[#D5E880] inline-block" />
              {s}
            </span>
          ))}
        </div>
      ) : (
        // fallback to your existing static season content
        <div className="space-y-8">
          {[
            { month: 'December, January, and February', description: 'Winter season in Nepal...' },
            { month: 'March, April, and May', description: 'Spring season — best trekking season...' },
          ].map((season, i) => (
            <div key={i} className="border-b pb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-4 h-4 rounded-full border-2 border-[#D5FF00] bg-white" />
                <h3 className="lg:text-lg md:text-base text-sm font-semibold text-[#0a2540]">{season.month}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed lg:text-sm md:text-xs text-xs">{season.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className="w-full py-6 mt-4">
      <div className="flex flex-wrap border-b border-gray-200 text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer flex items-center gap-1 py-2 px-4 border-b-2 ${activeTab === tab.id
              ? 'border-[#D5E880] text-black font-semibold'
              : 'border-transparent text-gray-500 hover:text-black'
              } transition-all duration-200`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === 'overview' && overviewContent}
        {activeTab === 'itinerary' && <div className="mt-6"><TrekItinerary itinerary={trek.itinerary || []} /></div>}
        {activeTab === 'checklist' && <div className="mt-6"><Checklist /></div>}
        {activeTab === 'season' && seasonContent}
        {/* {activeTab === 'review' && <div className="mt-6"><Reviews /></div>} */}
        {activeTab === 'gallery' && <div className="mt-6"><GalleryBentoGrid images={trek.gallery || []} /></div>}
      </div>
    </div>
  )
}

export default TripTabs