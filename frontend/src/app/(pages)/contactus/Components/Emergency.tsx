import Image from "next/image";
import React from "react";

const Emergency = () => {
  const PhoneIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="62"
      viewBox="0 0 60 62"
      fill="none"
    >
      <g clipPath="url(#clip0_372_22109)">
        <g clipPath="url(#clip1_372_22109)">
          <g clipPath="url(#clip2_372_22109)">
            <path
              d="M47.5781 4.89062H33.5156C26.7315 4.89062 21.2109 10.4112 21.2109 17.1953C21.2109 23.3837 25.8029 28.5198 31.7578 29.3747V34.7734C31.7578 35.4841 32.1852 36.1261 32.8427 36.3973C33.4911 36.6679 34.2517 36.5228 34.7585 36.0162L41.2747 29.5H47.5781C54.3622 29.5 60 23.9794 60 17.1953C60 10.4112 54.3622 4.89062 47.5781 4.89062ZM33.5156 18.9529C32.5446 18.9529 31.7578 18.1659 31.7578 17.1951C31.7578 16.2243 32.5446 15.4373 33.5156 15.4373C34.4864 15.4373 35.2734 16.2243 35.2734 17.1951C35.2734 18.1659 34.4864 18.9529 33.5156 18.9529ZM40.5469 18.9529C39.5759 18.9529 38.7891 18.1659 38.7891 17.1951C38.7891 16.2243 39.5759 15.4373 40.5469 15.4373C41.5177 15.4373 42.3047 16.2243 42.3047 17.1951C42.3047 18.1659 41.5177 18.9529 40.5469 18.9529ZM47.5781 18.9529C46.6071 18.9529 45.8203 18.1659 45.8203 17.1951C45.8203 16.2243 46.6071 15.4373 47.5781 15.4373C48.5489 15.4373 49.3359 16.2243 49.3359 17.1951C49.3359 18.1659 48.5489 18.9529 47.5781 18.9529Z"
              fill="#D5E880"
            />
            <path
              d="M39.4922 57.625C42.4001 57.625 44.7656 55.2595 44.7656 52.3516V45.3203C44.7656 44.5633 44.2815 43.892 43.564 43.6534L33.0418 40.1378C32.5268 39.9645 31.9638 40.0434 31.5107 40.3421L27.0371 43.3238C22.2993 41.0648 16.6774 35.4428 14.4183 30.7049L17.4 26.2314C17.7004 25.7799 17.7759 25.2152 17.6043 24.7002L14.0886 14.1781C13.8502 13.4607 13.1789 12.9766 12.4219 12.9766H5.27344C2.36555 12.9766 0 15.3174 0 18.2253C0 38.4779 19.2396 57.625 39.4922 57.625Z"
              fill="#D5E880"
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_372_22109">
          <rect
            width="60"
            height="61"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
        <clipPath id="clip1_372_22109">
          <rect
            width="60"
            height="61"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
        <clipPath id="clip2_372_22109">
          <rect
            width="60"
            height="61"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between  gap-14 mx-3 mt-10 mb-[6rem] lg:mx-[8rem]">
      <div className="flex items-center gap-8">
        <PhoneIcon />
        <div className="flex flex-col gap-2">
          <p className="text-[#58587B] text-sm">
            For quick support or inquiries, feel free to call or message us
            anytime
          </p>
          <h1
            style={{
              fontWeight: 700,
            }}
            className=" lg:text-2xl"
          >
            Reach us via Whatsapp or Viber
          </h1>
          <h2 className="text-base lg:text-lg">
            <span className="text-[#5e5e5e]">Immediate Assistance: </span>
            +977-9841506950
          </h2>
          <h2 className="text-base lg:text-lg">
            <span className="text-[#5e5e5e] ">Operation Manager: </span>
            +977-9746238671
          </h2>
        </div>
      </div>

      <Image
        src="/images/contact/Emergency.png"
        alt="Emergency image"
        height={400}
        width={600}
      />
    </div>
  );
};

export default Emergency;
