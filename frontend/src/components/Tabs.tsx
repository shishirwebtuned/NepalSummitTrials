

"use client";
import React, { useState } from "react";
import clsx from "clsx";

const Tabs = ({ tabs = [], defaultTab = "" }: { tabs: Array<{ label: string; content: React.ReactNode }>; defaultTab?: string }) => {

  const initialTab = tabs.find((tab) => tab.label === defaultTab)
    ? defaultTab
    : tabs[0]?.label || "";
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const handleTabClick = (tabLabel: string) => {
    setSelectedTab(tabLabel);
  };

  const activeTab = tabs.find((tab) => tab.label === selectedTab);

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex w-full overflow-x-auto space-x-2 mb-4 sm:overflow-x-visible">
        {tabs.map(({ label }) => (
          <button
            key={label}
            onClick={() => handleTabClick(label)}
            onTouchStart={() => handleTabClick(label)} // Ensure touch support
            className={clsx(
              "px-4 py-2 jakarta rounded-md font-medium w-full text-xs md:text-base xl:text-lg transition-colors duration-200 whitespace-nowrap",
              selectedTab === label
                ? "bg-[#0D3A48] text-white"
                : "bg-[#D5E880] text-black hover:bg-[#c1d86a]"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 w-full rounded-md bg-white">
        {activeTab?.content || "No content available."}
      </div>
    </div>
  );
};

export default Tabs;
