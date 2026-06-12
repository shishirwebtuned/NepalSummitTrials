import React from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useMediaQuery } from "./useMediaQuery";

export const Pagination = ({
  currentPage = 1,
  totalPages = 10,
  onPageChange,
  siblingCount = 1,
}: {
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const generatePages = () => {
    const DOTS = "...";

    if (isSmallScreen) {
      return totalPages > 2
        ? [1, 2, DOTS, totalPages]
        : Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];
    const startPage = Math.max(2, currentPage - siblingCount);
    const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

    pages.push(1);
    if (startPage > 2) pages.push(DOTS);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push(DOTS);
    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex md:justify-between justify-center items-center jakarta md:space-x-2 space-x-1 mt-10">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex flex-row gap-3 cursor-pointer hover:bg-[#ACC0CC]/15 font-semibold items-center justify-center py-2 lg:px-4 md:px-3 px-2 border border-[#0000001A] text-black rounded-lg lg:text-[15px] md:text-[13px] text-[11px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <IoArrowBackOutline className="lg:size-5 md:size-4 size-3" />
        <p>Previous</p>
      </button>

      {/* Page Numbers */}
      <div className="flex flex-row items-center justify-center gap-2">
        {pages.map((page, i) => (
          <button
            key={i}
            onClick={() => typeof page === "number" && onPageChange(page)}
            disabled={page === "..."}
            className={`lg:px-4 md:px-3 px-[10px] py-2 rounded lg:text-sm md:text-xs text-[10px] cursor-pointer transition-all ${page === currentPage
                ? "bg-[#ACC0CC33] text-black font-semibold"
                : "text-[#000000]/50"
              } ${page === "..." ? "cursor-default" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex flex-row gap-3 cursor-pointer hover:bg-[#ACC0CC]/15 font-semibold items-center justify-center py-2 lg:px-4 md:px-3 px-2 border border-[#0000001A] text-black rounded-lg lg:text-[15px] md:text-[13px] text-[11px] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <p>Next</p>
        <IoArrowForwardOutline className="lg:size-5 md:size-4 size-3" />
      </button>
    </div>
  );
};
