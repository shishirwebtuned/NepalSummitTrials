import { LucideList } from "lucide-react";
import React from "react";
import { IoGrid } from "react-icons/io5";

export const SearchComp = () => {
  return (
    <div className="flex flex-row md:flex-row w-full justify-between items-center md:items-center mb-6 bg-[#F5F7F9]/50 border border-[#ECECEC] rounded-lg">
      <div className="md:w-[65%] w-[50%]">
        <input
          type="text"
          placeholder="Enter Keyword"
          className="w-full px-4 py-3 lg:text-base md:text-sm text-xs rounded-md mb-0 outline-0"
        />
      </div>
      <div className="md:w-[20%] w-[32%] lg:text-base md:text-sm text-xs pl-2 pr-1 flex flex-row items-center justify-center">
        <p>Sort:</p>
        <select className="pl-1 py-3 rounded-md lg:text-sm md:text-xs text-[10px] w-full outline-0">
          <option> Latest</option>
          <option> Price Low to High</option>
          <option> Price High to Low</option>
        </select>
      </div>
      <div className="md:w-[15%] w-[18%] border-l border-[gray] flex flex-row items-center justify-center gap-2 pl-2 pr-1">
        <LucideList className="lg:size-7 md:size-6 size-5" />
        <IoGrid className="lg:size-[23px] md:size-[19px] size-[15px]" />
      </div>
    </div>
  );
};
