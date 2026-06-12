

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import OtherAdvCard from "./otherAdvCard";
import { FilterComp } from "./FilterComp";
import { SearchComp } from "./SearchComp";
import { Pagination } from "./Pagination";

export const OtherAdvSection = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const handleNavigate = (trekId: string) => {
    router.push(`/trek-detail/${trekId}`);
  };

  return (
    <div className="flex flex-col md:flex-row pb-6 pt-10 lg:px-24 md:px-14 px-6 gap-5">
      <div className="w-full md:w-1/4 lg:w-1/4">
        <FilterComp />
      </div>
      <div className="lg:w-3/4 md:w-3/4 w-full">
        <SearchComp />

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {cardData.map((card, idx) => (
            <OtherAdvCard
              key={idx}
              image={card.image}
              buttonText={card.buttonText}
              overlayTitle={card.overlayTitle}
              title={card.title}
              description={card.description}
              onClick={() => handleNavigate(card.id)}
            />
          ))}
        </div> */}

        {/* <Pagination
          currentPage={page}
          totalPages={Math.ceil(cardData.length / 9)} // Assuming 9 cards per page
          onPageChange={(newPage) => setPage(newPage)}
        /> */}
      </div>
    </div>
  );
};
