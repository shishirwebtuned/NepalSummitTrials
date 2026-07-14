import React from "react";
import Image from "next/image";

const Cardimages = () => {
  // Data for the journey cards
  const journeyData = [
    {
      id: 1,
      image: "/images/homepage/5.jpg",
      imageAlt: "Mountain village with traditional houses",
      stat: "100K+",
      description: "Happy Trekkers",
      imageRotation: "rotate-7",
    },
    {
      id: 2,
      image: "/images/homepage/165.jpg",
      imageAlt: "Hikers near mountain peak",
      stat: "500+",
      description: "TRAILS EXPLORED",
      imageRotation: "-rotate-13",
    },
    {
      id: 3,
      image: "/images/homepage/664.jpg",
      imageAlt: "Person trekking in mountain valley",
      stat: "99%",
      description: "POSITIVE REVIEWS",
      imageRotation: "rotate-11",
    },
    {
      id: 4,
      image: "/images/homepage/165.jpg",
      imageAlt: "River landscape with mountains",
      stat: "15 Yrs",
      description: "OF ADVENTURE",
      imageRotation: "-rotate-15",
    },
  ];

  return (
    <div className="w-full py-10 md:py-16 px-4 bg-white relative bg-no-repeat md:bg-top md:bg-contain md:bg-[url('/images/PlanePathImg.svg')]">
      {/* Container for the entire timeline */}
      <div className="max-w-7xl mx-auto relative">
        {/* Dotted path connecting the images */}
        {/* <div className="absolute top-32 left-0 right-0 z-10">
          <svg
            className="w-full h-16"
            preserveAspectRatio="none"
            viewBox="0 0 1200 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,25 C300,5 600,45 900,25 C1050,15 1150,25 1200,25"
              stroke="#D1D5DB"
              strokeWidth="3"
              strokeDasharray="8 8"
              fill="none"
            />
          </svg>
        </div> */}

        {/* <div className="absolute -right-12 top-32 z-10">
          <div className="relative w-20 h-20">
            <Image
              src="/images/homepage/Vector.png"
              alt="Decorative vector"
              fill
              className="object-cover" // or object-contain depending on the image
            />
          </div>
        </div> */}

        {/* Journey cards container */}
        <div className="flex flex-wrap justify-between relative z-10">
          {journeyData.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/4 px-2 mb-6 md:mb-12 flex flex-col items-center"
            >
              {/* Polaroid image */}
              <div
                className={`md:mb-16 mb-4 transform ${item.imageRotation} hover:rotate-0 transition-transform duration-300`}
              >
                <div className="bg-[#CDE2F0] lg:w-[180px] lg:h-[200px] md:w-[120px] md:h-[140px] w-[100px] h-[100px] px-3 pt-3 pb-5 shadow-md inline-block">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>

              {/* Stats badge */}
              <div className="relative lg:mt-4 mt-0">
                <div
                  className="relative bg-no-repeat bg-top bg-contain flex items-center justify-center"
                  style={{
                    backgroundImage: `url(/images/homepage/XMLID_166061_.png)`,
                  }}
                >
                  {/* <Image
                    src="/images/homepage/XMLID_166061_.png"
                    width={190}
                    height={150}
                    alt="Homepage.jpg"
                    className="-z-10 absolute top-0 left-0"
                  /> */}
                  <div className="px-10 md:px-13 py-6 md:py-8 flex flex-col justify-center items-center">
                    <div className="font-bold lg:text-[28px] md:text-xl text-[16px] jakarta">
                      {item.stat}
                    </div>
                    <div className="lg:text-[15px] md:text-sm text-[10px] jakarta text-center uppercase font-medium mt-1">
                      {item.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardimages;
