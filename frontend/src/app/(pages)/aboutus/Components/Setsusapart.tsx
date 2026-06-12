import MountainHeader from "@/components/MountainHeader";
import React from "react";
import SetUsApartCard from "./SetUsApartCard";
import Image from "next/image";

const Setsusapart = () => {
  const cardDetails = [
    {
      title: "Community-Driven Impact",
      description:
        "Every trek helps fund education, health, and development projects in the Tamang community of Thulo Parsel.",
    },
    {
      title: "Dedicated, Trained Team",
      description:
        "Unlike others, we provide year-round salaries, proper gear, and continuous training to our guides and porters.",
    },
    {
      title: "Expert Local Guides",
      description:
        "Our guides have over 100 years of combined experience, leading treks across Nepal, Tibet, Bhutan, and India.",
    },
    {
      title: "Trusted & Safe Travel",
      description:
        "We offer 24/7 emergency support and full insurance coverage to ensure your safety on every adventure",
    },
  ];
  return (
    <section className="px-4 py-10 lg:px-[4.5rem]">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <MountainHeader title="What Sets us Apart" />
          <h1 className="text-[#0D3A48] gloock text-2xl sm:text-2xl lg:text-3xl mb-4">
            Experience the Himalayas with Heart and Heritage
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {cardDetails.map((item, index) => (
              <SetUsApartCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-[400px] sm:max-w-[500px]">
            <Image
              src="/images/about/shapepic3.png"
              alt="Decorative image"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Setsusapart;
