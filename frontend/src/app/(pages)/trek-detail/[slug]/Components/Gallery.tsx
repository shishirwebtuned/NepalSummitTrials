import React from "react";

const images = [
  { src: "/images/homepage/1.jpg", span: "col-span-2 row-span-1" },
  { src: "/images/homepage/1.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/homepage/5.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/homepage/10.jpg", span: "col-span-1 row-span-2" },
  { src: "/images/homepage/17.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/homepage/30.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/homepage/219.jpg", span: "col-span-1 row-span-1" },
  { src: "/images/homepage/289.jpg", span: "col-span-2 row-span-1" },
];

const GalleryBentoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl ${img.span}`}
          >
            <img
              src={img.src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryBentoGrid;
