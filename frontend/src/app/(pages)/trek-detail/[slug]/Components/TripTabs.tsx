"use client";
import React, { useState } from "react";
import {
  FaListUl,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaWater,
  FaStar,
  FaImage,
} from "react-icons/fa";
import { MdPushPin } from "react-icons/md";
import TrekItinerary from "./TrekItinerary";
import Checklist from "./Checklist";
import Reviews from "./Reviews";
import GalleryBentoGrid from "./Gallery";

const tabs = [
  { id: "overview", label: "Overview", icon: <FaListUl /> },
  { id: "itinerary", label: "Itinerary", icon: <FaMapMarkedAlt /> },
  { id: "checklist", label: "Checklist", icon: <FaCheckCircle /> },
  { id: "season", label: "Season", icon: <FaWater /> },
  { id: "review", label: "Review", icon: <FaStar /> },
  { id: "gallery", label: "Image Gallery", icon: <FaImage /> },
];

const overviewContent = (
  <div className="space-y-4 mt-6 text-black/80 jakarta lg:text-sm md:text-[13px] text-xs tracking-wide leading-5">
    <div className="flex items-center gap-2 text-[#ED4E39] font-semibold lg:text-[15px] md:text-sm text-[13px]">
      <MdPushPin className="text-lg" />
      Important Note
    </div>
    <p>
      Our Guest’s security is of dominant concern to Himalayan Vacation Treks
      and Expedition. Please understand that the HV Treks trekking leader has
      the authority to adjust or cancel any part of the itinerary if it is found
      prudent. Unfavorable circumstances may occur during the trek. Such as
      dangerous weather conditions, the condition of a group member, natural
      events like landslides, can force changes in the itinerary. All efforts
      will be made to keep to the planned itinerary. The HV Treks leader will
      try his/her best to ensure that the trip goes smoothly and according to
      plan, but please be ready to be flexible if necessary. Himalayan Vacation
      Treks and Expedition is capable, experienced, and prepared to give a
      24–hour emergency response to an accident or condition that requires
      attention or evacuation.
    </p>
    <p>
      The Airport is at high-altitude and flights in or out are prone to delays
      due to weather conditions. In the wetter, cloudy months, flights are
      sometimes delayed or canceled until next day or when the weather permits.
      Guests should please make sure their timetable for the trip allows for
      these possible delays.
    </p>
    <p>
      Himalayan Vacation Treks & Expedition requires that trekking and
      expedition guests have Insurance Policies. A Travel Insurance Policy
      should cover the cost of emergencies (including altitude sickness),
      injuries, and evacuations. Please, it is essential to bring your Travel
      Insurance Policy, or copies of your pertinent existing insurance coverage
      with you to Nepal. HV Treks will require a copy for our office records.
      We, as well, advise you to inform your existing insurance agent/company of
      your itinerary, including trekking, climbing, and hiking, and insure your
      current policy provides sufficient coverage.
    </p>
  </div>
);

const seasons = [
  {
    month: "December, January, And February",
    description: `It is called the winter season in Nepal. It is a season for snowfall in mountain region above 4300m in Nepal. So trekking is possible below 4500m during this period. This season is noted for occasional snowfall at higher elevations in the Himalayas. Though it gets colder in a night, often it offers the clear day / blue sky and relatively fewer trekkers on the trail. Sunrise and Sunset are seen very clear and beautiful in this season. So tourist who wants to pass short holidays during this period Himalayan vacation Treks and Expedition welcomes to see a splendid view of nature. During this period, we arrange a family tour to experience natural beauty with short hikes and cultural tour. It is suitable for homestay tour through which different rituals and culture can be experienced during this period. The famous homestay like Sailung Timal homestay, Timal homestay, Tamang Heritage Homestay, Ghalegaon Homestay are the special places to visit. Himalayan Vacation Treks and Expedition arranges a tour for these places.`,
  },
  {
    month: "March, April, And May",
    description: `It is spring season which is known as trekking season in Nepal. A smooth wind and gentle breeze are felt all over the country. Sunny days and clear weather are the supportive factors for trekking in this season. Presence of a cloud can be seen in the sky during this season. So a short rainfall can be felt during this period. It is the season of an expedition and climbing high peaks in Nepal. So many tourists from different parts of the world come to climb peaks above 7000m in this season. Himalayan Vacation Treks and Expedition arranges tour and journey for climbing during this period. Peak climbing period can be in length up to June so Himalayan Vacation Treks and Expedition arranges attractive programmes during this period. This period offers plenty of opportunities for clear mountain views. It is also the time for flowers to blossom, and the national flower of Nepal – rhododendrons – coat the mountainsides with its colorful beauty throughout the spring. Except for rhododendrons, any kind of natural flora and fauna makes Nepal very beautiful during this season.`,
  },
];
const seasonContent = (
  <div className=" px-4 py-5">
    <h2 className="lg:text-2xl md:text-xl text-lg font-semibold mb-6 text-[#0a2540]">
      Season
    </h2>
    {seasons.map((season, index) => (
      <div key={index} className="mb-10 border-b pb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-4 h-4 rounded-full border-2 border-[#D5FF00] bg-white"></span>
          <h3 className="lg:text-lg md:text-base text-sm font-semibold text-[#0a2540]">
            {season.month}
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed lg:text-sm md:text-xs text-xs">
          {season.description}
        </p>
      </div>
    ))}
  </div>
);

const TripTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="w-full py-6 mt-4">
      {/* Tabs */}
      <div className="flex flex-wrap border-b border-gray-200 text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer flex items-center gap-1 py-2 px-4 border-b-2 ${
              activeTab === tab.id
                ? "border-[#D5E880] text-black font-semibold"
                : "border-transparent text-gray-500 hover:text-black"
            } transition-all duration-200`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "overview" && overviewContent}
        {activeTab === "itinerary" && (
          <div className="mt-6">
            <TrekItinerary />
          </div>
        )}
        {activeTab === "checklist" && (
          <div className="mt-6">
            <Checklist />
          </div>
        )}
        {activeTab === "season" && seasonContent}
        {activeTab === "review" && (
          <div className="mt-6">
            <Reviews />
          </div>
        )}
        {activeTab === "gallery" && (
          <div className="mt-6">
            <GalleryBentoGrid />
          </div>
        )}
      </div>
    </div>
  );
};

export default TripTabs;
