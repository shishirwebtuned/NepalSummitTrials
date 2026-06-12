import React from "react";

const HomeBanner = ({ image }: { image?: string }) => {
  return (
    <div className="w-full h-full">
      {image ? (
        <img
          src={image}
          alt="Home Page Banner"
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src="/images/homepage/HomePageBanner.png"
          alt="Home Page Banner"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default HomeBanner;
