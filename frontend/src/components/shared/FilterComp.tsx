"use client";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RangeInputFilter } from "./RangeInputFilter";

export const FilterComp = () => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  const toggleSection = (id: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filterSections = [
    {
      id: 1,
      label: "Country",
      type: "checkbox",
      options: ["Nepal", "Bhutan", "Tibet"],
    },
    {
      id: 2,
      label: "Destination Region",
      type: "checkbox",
      options: ["Everest", "Annapurna", "Langtang"],
    },
    {
      id: 3,
      label: "Duration",
      type: "range",
      unit: "days",
      minLimit: 1,
      maxLimit: 50,
    },
    {
      id: 4,
      label: "Difficulty Level",
      type: "checkbox",
      options: ["Easy", "Moderate", "Challenging"],
    },
    {
      id: 5,
      label: "Special Offers",
      type: "checkbox",
      options: ["Discounted", "Popular", "Limited Time"],
    },
    {
      id: 6,
      label: "Altitude Range",
      type: "range",
      unit: "m",
      minLimit: 1000,
      maxLimit: 5400,
    },
    {
      id: 7,
      label: "Budget",
      type: "range",
      unit: "$",
      minLimit: 1000,
      maxLimit: 5400,
    },
    {
      id: 8,
      label: "Tags",
      type: "options",
      tags: ["Family", "Adventure", "Photography"],
    },
  ];

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow mb-6 md:mb-0 md:mr-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="lg:text-[20px] md:text-[19px] text-lg font-medium tracking-wide gloock">
          Criteria
        </h3>
        <button className="lg:text-sm md:text-[13px] text-xs px-2 py-[6px] rounded-lg bg-[#D5E880] text-[#0B2839]/80 hover:underline">
          Clear All
        </button>
      </div>

      <div className="flex flex-col">
        {filterSections.map((section, index) => {
          const isOpen = openSections[section.id];
          return (
            <div
              key={section.id || index}
              className={`mb-3 px-3 ${index !== filterSections.length - 1
                ? "border-b border-gray-100 pb-3"
                : ""
                }`}
            >
              <div className="flex flex-row items-center justify-between">
                <h4 className="lg:text-base md:text-[15px] text-sm jakarta font-medium text-black mb-2">
                  {section.label}
                </h4>
                <div
                  className={`bg-[#0B2839]/5 rounded-full p-1 cursor-pointer transition-transform duration-400 ${isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  onClick={() => toggleSection(section.id)}
                >
                  {isOpen ? (
                    <FiMinus className="text-[#0B2839] transition-transform duration-400" />
                  ) : (
                    <FiPlus className="text-[#0B2839] transition-transform duration-400" />
                  )}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen
                  ? "max-h-40 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
                  }`}
              >
                {section.type === "checkbox" ? (
                  <div className="space-y-3 text-gray-600 transition-all duration-300 ease-in-out">
                    {section.options?.map((option, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between lg:text-[15px] md:text-sm text-[13px] jakarta
                     text-[#4F4F4F]"
                      >
                        <div className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <label>{option}</label>
                        </div>
                        <p className="lg:text-sm md:text-[13px] text-xs">
                          (10)
                        </p>
                      </div>
                    ))}
                  </div>
                ) : section.type === "range" ? (
                  <div className=" text-gray-600 transition-all duration-300 ease-in-out">
                    <RangeInputFilter
                      minLimit={section.minLimit}
                      maxLimit={section.maxLimit}
                      minValue={3}
                      maxValue={20}
                      unit={section.unit}
                      onChange={({ min, max }: { min: number; max: number }) => {
                        console.log("Selected Range:", min, max);
                      }}
                    />
                  </div>
                ) : (
                  <div className="mt-3 text-gray-600 transition-all duration-300 ease-in-out">
                    <div className="flex flex-row flex-wrap gap-3">
                      {section.tags?.map((tag, index) => (
                        <div
                          key={index}
                          className="bg-[#659CBC]/18 text-[#4F4F4F] px-4 py-1 rounded-lg lg:text-[15px] md:text-sm text-[13px] jakarta"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
