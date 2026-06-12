import React from "react";

const WhyChoose = () => {
  return (
    <div className="relative bg-gray-100 py-16 overflow-hidden">
      {/* Blue wave background */}
      {/* <div className="absolute bottom-0 left-0 w-1/2 h-3/4 bg-[#1A75A0] rounded-tr-full z-0"></div> */}

      <img
        src="/images/whychoosebg.png"
        className="absolute bg-cover left-0 bottom-0"
      />
      {/* <svg
        className="absolute top-0 left-0 w-[60%] h-full mt-10"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0H550C700 0 800 300 925 450C1025 560 1100 600 1200 600V600H0V0Z"
          fill="#1A75A0"
        />
      </svg> */}

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        {/* Speech bubble with images */}
        <div className="relative w-full lg:w-1/2">
          <div className="relative">
            {/* Main speech bubble shape */}
            <div className="relative w-[400px] h-[400px] mx-auto -right-30 -top-2">
              {/* Large circular image */}
              <div className="absolute inset-0 rounded-full bg-white p-3">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/Ellipse 7.png"
                    alt="Mountain landscape with glacier and water"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Small circular image */}
              <div className="absolute bottom-0 right-0 w-[180px] h-[180px] rounded-full bg-white p-3">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/images/Ellipse 9.png"
                    alt="Group of hikers on a trek"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Speech bubble pointer */}
            {/* <div className="absolute -bottom-8 right-20 w-16 h-16 bg-white transform rotate-45"></div> */}
          </div>
        </div>

        {/* Text content */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 p-8">
          <p className="text-[#0D3A48] text-sm md:text-[15px] lg:text-base font-medium flex items-center mb-2 jakarta">
            Why Choose Us?
            <span className="ml-2 bg-[#2A78A6]/10 h-[2px] w-[40px] inline-block"></span>
            <img
              src="/images/icons/765737_09 1.png"
              alt="Mountain icon"
              className="ml-2 h-8"
            />
          </p>

          <h2 className="text-[#0D3A48] text-[20px] md:text-[24px] lg:text-[30px] gloock mb-4">
            See What Makes Us the Preferred Choice
          </h2>

          <p className="text-[#000000] jakarta lg:text-base md:text-sm text-xs mb-8">
            Choosing TrailBlazers for your trekking adventures means joining
            passionate guides on unforgettable journeys. Experience breathtaking
            views and build lasting friendships. Discover the difference with us
            on your next adventure!
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-2 md:gap-6 gap-4 mb-8 bg-white rounded-lg md:p-4 p-3">
            {/* Feature 1 */}
            <div className="flex items-center">
              <div className="lg:w-12 lg:h-12 md:w-10 md:h-10 w-9 h-9 rounded-full bg-[#1A75A0]/10 flex items-center justify-center mr-4">
                <img
                  src="/images/icons/Vector (1).png"
                  alt="Certificate icon"
                  className="lg:w-6 lg:h-6 w-5 h-5"
                />
              </div>
              <div>
                <p className="text-[#000000] jakarta text-xs md:text-sm lg:text-base font-bold">
                  Professional &
                </p>
                <p className="text-[#000000] jakarta text-xs md:text-sm lg:text-base font-bold">
                  Certified
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center">
              <div className="lg:w-12 lg:h-12 md:w-10 md:h-10 w-9 h-9 rounded-full bg-[#1A75A0]/10 flex items-center justify-center mr-4">
                <img
                  src="/images/icons/Capa_1.png"
                  alt="Price tag icon"
                  className="lg:w-6 lg:h-6 w-5 h-5"
                />
              </div>
              <div>
                <p className="text-[#000000] jakarta text-xs md:text-sm lg:text-base  font-bold">
                  Best Price
                </p>
                <p className="text-[#000000] jakarta text-xs md:text-sm lg:text-base  font-bold">
                  Guarantee
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center">
              <div className="lg:w-12 lg:h-12 md:w-10 md:h-10 w-9 h-9 rounded-full bg-[#1A75A0]/10 flex items-center justify-center mr-4">
                <img
                  src="/images/icons/online_booking.png"
                  alt="Calendar icon"
                  className="lg:w-6 lg:h-6 w-5 h-5"
                />
              </div>
              <div>
                <p className="text-[#000000] jakarta text-xs md:text-sm lg:text-base  font-bold">
                  Get Instant Tour
                </p>
                <p className="ttext-[#000000] jakarta text-xs md:text-sm lg:text-base  font-bold">
                  & Trek Booking
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center">
              <div className="lg:w-12 lg:h-12 md:w-10 md:h-10 w-9 h-9 rounded-full bg-[#1A75A0]/10 flex items-center justify-center mr-4">
                <img
                  src="/images/icons/Vector.png"
                  alt="Guide icon"
                  className="lg:w-6 lg:h-6 w-5 h-5"
                />
              </div>
              <div>
                <p className="text-[#000000] jakarta text-xs md:text-sm lg:text-base font-bold">
                  Experienced
                </p>
                <p className="text-[#000000] jakarta text-xs md:text-sm lg:text-base font-bold">
                  Guide
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-[#CADF63] text-[#0D3A48] lg:px-6 md:px-5 px-4 md:py-3 py-2 rounded-md lg:text-base md:text-sm text-xs font-medium flex items-center hover:bg-[#CADF63]/80 transition-colors">
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
