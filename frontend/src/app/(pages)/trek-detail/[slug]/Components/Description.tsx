import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import TripTabs from "./TripTabs";

const Description = () => {
  const includes = [
    "All Meals During Trek",
    "Private vehicle for all transport",
    "Domestic Flights",
    "Satellite mobile phone for communication",
    "TIMS card & required permits (Lower Dolpa, Shey-Phoksundo National Park)",
    "Licensed English-speaking guide & assistant guide",
  ];

  const excludes = [
    "Nepal visa fees (US$30–50/15–30 days)",
    "Extra baggage charges (if any)",
    "Meals in Kathmandu (lunch & dinner)",
    "International airfare",
    "Travel/rescue insurance (including helicopter rescue)",
    "Extra nights in Kathmandu due to early return or delays",
  ];

  const tripInfoData = [
    { label: "Duration", value: "19 Days" },
    { label: "Group Size", value: "6 – 12" },
    { label: "Trek Style", value: "Camping Trek" },
    { label: "Best Season", value: "Spring (March–May)" },
  ];

  const highlights = [
    "Visit Nepal’s hidden gem, renowned for its turquoise waters and remote surroundings.",
    "Explore remote villages and experience Tibetan culture in the Himalayas.",
    "Trek through off-the-beaten-path trails to Shey Phoksundo and secluded monasteries.",
    "Encounter wild animals and diverse plant species in Shey Phoksundo National Park.",
  ];

  return (
    <section className="text-sm jakarta text-gray-800 w-full">
      {/* Include / Exclude */}
      <div className="flex flex-col justify-center items-start text-left gap-3 text-black/80 lg:text-sm md:text-[13px] text-xs">
        <p>
          Dolpo is located in the far western hilly region of Nepal and is one
          of the most remote districts in the country, lying in the rain shadow
          of the Himalayas. Trekking in this region offers a unique experience,
          with landscapes resembling the Tibetan highlands. A key highlight of
          this trek, specially organized by Himalayan Vacation Treks and
          Expeditions, is the visit to Shey Phoksundo National Park, Nepal’s
          largest national park.
        </p>
        <p>
          Another unforgettable destination on this trek is Shey Phoksundo Lake,
          renowned for its crystal-clear waters, completely free of aquatic
          life. Surrounded by rugged rocks, dense forests, and snow-capped
          peaks, this area is often described as one of the world’s “Natural
          Hidden Wonders.”
        </p>
      </div>
      <div className="flex flex-col gap-2 py-10">
        <h2 className="text-[#0B2839] lg:text-[19px] md:text-[17px] text-[15px] font-semibold">
          Include/Exclude
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mt-1">
          <div>
            <h3 className="font-semibold lg:text-base md:text-sm text-xs mb-3">
              Cost Includes
            </h3>
            <ul className="space-y-2 text-green-600">
              {includes.map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <img
                    src={"/images/icons/rightIcon.svg"}
                    alt="Check"
                    className="w-4 h-4"
                  />
                  <span className="lg:text-[15px] md:text-[13px] text-[11px] text-[#7F7F7F]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold lg:text-base md:text-sm text-xs mb-3">
              Cost Excludes
            </h3>
            <ul className="space-y-2 text-red-600">
              {excludes.map((item, i) => (
                <li key={i} className="flex gap-2 items-center">
                  <img
                    src={"/images/icons/wrongIcon.svg"}
                    alt="Check"
                    className="w-4 h-4"
                  />
                  <span className="lg:text-[15px] md:text-[13px] text-[11px] text-[#7F7F7F]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-[#2A78A6] lg:text-[14px] md:text-[12px] text-[10px] font-semibold mt-3">
          View More
        </p>
      </div>

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
                <p className="text-[#7F7F7F] lg:text-sm md:text-[13px] text-xs font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-black lg:text-sm md:text-[13px] text-xs font-semibold">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TripTabs />

      {/* Highlights */}
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
        <h3 className="font-semibold text-green-700 mb-2 lg:text-base md:text-[15px] text-sm">
          Trip Highlights
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-green-800">
          {highlights.map((h, i) => (
            <li key={i} className="lg:text-sm md:text-[13px] text-xs">
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Route Map */}
      <div className="mt-10">
        <h3 className="text-[17px] md:text-lg lg:text-[19px] font-semibold mb-4">
          Route Map
        </h3>
        <div className="w-full h-full">
          <img
            src="/images/campingTrek/routeMap.png"
            alt="Route Map"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
