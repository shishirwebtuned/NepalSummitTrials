import Image from "next/image";
import Link from "next/link";

const Aboutus = () => {
  const clientImages = [
    "/images/Ellipse 1.png",
    "/images/Ellipse 2.png",
    "/images/Ellipse 3.png",
    "/images/Ellipse 4.png",
  ];

  return (
    <div className="md:pt-16 md:pb-16 pt-12 pb-0 lg:px-[8%] md:px-[7%] px-[6%]">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-sm md:text-[15px] lg:text-base font-medium text-[#000000] jakarta">
          About Us
        </h2>
        <div className="w-[30px] h-[2px] bg-[#D5E880]"></div>
        <Image
          src="/images/icons/765737_09 1.png"
          alt="Mountain icon"
          width={100}
          height={20}
          className="h-5 w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 relative">
        {/* Left Column - Text Content */}
        <div className="space-y-6">
          <h1 className="text-[20px] md:text-[24px] lg:text-[30px] font-bold text-[#0D3A48] mb-6 gloock">
            Crafting Journeys That Matter
          </h1>

          <p className="text-[#000000] md:text-sm text-xs lg:text-base leading-relaxed jakarta">
            At Nepal Summit Trials, we're more than just a travel company—we're a
            community of explorers, mountaineers, and storytellers who believe
            that the best way to see the world is on foot. With over 15 years of
            experience, we craft immersive trekking and travel experiences that
            balance adventure, safety, and cultural authenticity. Every journey
            we offer is backed by local knowledge and global expertise.
          </p>

          {/* Feature Icons */}
          <div className="md:pt-6 pt-3 lg:space-y-4 md:space-y-3 space-y-2">
            {/* Feature 1 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#D5E880]/30 lg:w-12 lg:p-3 md:p-[10px] p-2 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full flex justify-center items-center">
                <img
                  src="/images/icons/Group(5).png"
                  alt="Certified guides icon"
                />
              </div>
              <h3 className="md:text-sm text-xs lg:text-base font-medium text-[#000000] jakarta">
                Experienced, certified guides
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#D5E880]/30 lg:w-12 lg:p-3 md:p-[10px] p-2 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full flex justify-center items-center">
                <img
                  src="/images/icons/ic_round-eco.png"
                  alt="Eco-conscious icon"
                />
              </div>
              <h3 className="md:text-sm text-xs lg:text-base font-medium text-[#000000] jakarta">
                Eco-conscious trekking practices
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#D5E880]/30 lg:w-12 lg:p-3 md:p-[10px] p-2 lg:h-12 md:w-10 md:h-10 w-8 h-8 rounded-full flex justify-center items-center">
                <img
                  src="/images/icons/ic_outline-support-agent.png"
                  alt="Support icon"
                />
              </div>
              <h3 className="md:text-sm text-xs lg:text-base font-medium text-[#000000] jakarta">
                24/7 support & trip customization
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-5">
            {/* Left - One Tall Image */}
            <div className="h-[25rem] rounded-2xl overflow-hidden">
              <img
                src="/images/about/Rectangle 11.png"
                alt="Mountain village"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right - Two Stacked Images */}
            <div className="flex flex-col gap-6 h-[25rem]">
              <div className="h-1/2 rounded-2xl overflow-hidden">
                <img
                  src="/images/about/Rectangle 12.png"
                  alt="Mountain landscape"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-1/2 rounded-2xl overflow-hidden">
                <img
                  src="/images/about/Rectangle 13.png"
                  alt="Mountain view"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 md:mt-0 mt-4  md:mb-0 flex md:flex-row flex-col justify-between items-center gap-8">
            <div>
              <Link
                href="/aboutus"
                className="bg-[#D5E880] hover:bg-[#c9df69] text-[#0D3A48] px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center gap-2 jakarta md:text-base text-sm lg:text-lg"
              >
                More about Us
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            {/* Client Stats */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {clientImages.map((src, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`Happy client ${index + 1}`}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <h3 className="lg:text-[32px] md:text-[26px] text-[20px] font-bold text-[#000000] gloock">
                  114K+
                </h3>
                <p className="text-[#000000] lg:text-sm md:text-xs text-[10px] jakarta">
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats and CTA Section */}
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        <div className="absolute right-55 -top-28 transform -translate-x-1/2 -translate-y-4 hidden md:block">
          <img
            src="/images/icons/PlaneImg.svg"
            alt="Airplane icon"
            className="w-[85%] h-[85%]"
          />
        </div>
      </div>

      {/* Decorative Path */}
      <div className="md:flex hidden">
        <svg
          className="w-full h-24 text-gray-200"
          viewBox="0 0 1200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C300,120 600,-20 1200,50"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>

        {/* <Image
          src="/images/icons/Vector 3(1).png"
          alt="curve"
          width={800}
          height={158}
        /> */}
      </div>
    </div>
  );
};

export default Aboutus;
