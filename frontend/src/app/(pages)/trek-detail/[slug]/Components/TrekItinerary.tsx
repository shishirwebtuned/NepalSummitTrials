import React, { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

const itinerary = [
  {
    title: "Arrival In Kathmandu (1,337m)",
    details: [
      "Arrive in Kathmandu, Nepal.",
      "Transfer to hotel.",
      "Briefing and welcome dinner.",
    ],
  },
  {
    title: "Sightseeing In Kathmandu",
    details: [
      "Arrive in Kathmandu, Nepal.",
      "Transfer to hotel.",
      "Briefing and welcome dinner.",
    ],
  },
  {
    title: "Flight To Nepalgunj (150m)",
    details: [
      "Arrive in Kathmandu, Nepal.",
      "Transfer to hotel.",
      "Briefing and welcome dinner.",
    ],
  },
  {
    title: "Flight To Juphal (2,475m) – Trek To Dunai (2,140m)",
  },
  { title: "Dunai To Tarakot (2,540m)" },
  { title: "Tarakot To Laina Odar (3,370m)" },
  { title: "Laina Odar To Nawarpani (3,475m)" },
  { title: "Nawarpani To Dho Tarap (3,944m)" },
];

const TrekItinerary = () => {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h2 className="text-xl font-semibold text-[#00394f] mb-6">
        Trek Itenary
      </h2>
      <div className="relative pl-8">
        {itinerary.map((item, idx) => (
          <div key={idx} className="relative pb-6">
            {/* Timeline Icon */}
            <span
              className={`absolute left-[-18px] top-[-1] flex items-center justify-center rounded-full ${
                idx === 0
                  ? "bg-lime-200  w-6 h-6 text-white"
                  : "bg-white  w-5 h-5 border-2 border-lime-300"
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
              className={`cursor-pointer  ml-5 flex items-center justify-between ${
                idx === expanded
                  ? "font-semibold text-[#00394f]"
                  : "text-gray-800"
              }`}
              onClick={() => setExpanded(idx === expanded ? -1 : idx)}
            >
              <p>{`Day ${idx + 1}:  ${item.title}`}</p>
              {item.details && (
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    expanded === idx ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {/* Expanded Content */}
            {expanded === idx && item.details && (
              <ul className="list-disc ml-5 mt-2 text-sm text-gray-600 space-y-1">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}

            {/* Divider */}
            <div className="mt-4 border-b border-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrekItinerary;
