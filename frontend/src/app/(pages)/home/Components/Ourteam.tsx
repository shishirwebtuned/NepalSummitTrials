import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

const TeamCard = ({ image, name, experience, icons }: { image: string; name: string; experience: string; icons: string[] }) => {
  return (
    <div className="relative rounded-xl cursor-pointer group overflow-hidden h-70 w-36 md:w-40 shadow-md group">
      {/* Team Member Image */}
      <Image
        src={image}
        alt={name}
        width={203}
        height={364}
        className="object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
        <h3 className="lg:text-[20px] md:text-lg text-base jakarata text-[#FFFFFF]">
          {name}
        </h3>
        <p className=" md:text-[13px] text-xs lg:text-sm jakarata text-[#FFFFFF]">
          {experience}
        </p>
      </div>

      {/* Staggered Slide-in Icons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="w-[30px] h-[30px] bg-[#D5E880] rounded-full relative opacity-0 group-hover:opacity-100 group-hover-slide-in"
            style={{
              animationDelay: `${index * 0.05}s`, // slight stagger (0.05s)
            }}
          // style={{
          //   animationDelay: `${index * 0.2}s`,
          //   animationDuration: "0.4s",
          //   animationFillMode: "forwards",
          //   animationName: "slideInRight",
          // }}
          >
            <Image
              src={icon}
              alt={`social-icon-${index}`}
              fill
              className="object-contain p-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const OurTeam = () => {
  const teamMembers = [
    {
      image: "/images/bg/Component 15.png",
      name: "Tzugyu Sherpa",
      experience: "5+ Year Experience",
    },
    {
      image: "/images/bg/Component 16.png",
      name: "Tzugyu Sherpa",
      experience: "8+ Year Experience",
    },
    {
      image: "/images/bg/Component 17.png",
      name: "Tzugyu Sherpa",
      experience: "8+ Year Experience",
    },
    {
      image: "/images/bg/Component 18.png",
      name: "Tzugyu Sherpa",
      experience: "8+ Year Experience",
    },
  ];

  const socialIcons = [
    "/images/icons/Vector(6).png", // Facebook
    "/images/icons/Vector(7).png", // LinkedIn
    "/images/icons/mingcute_instagram-fill.png", // Instagram
    "/images/icons/ic_twotone-tiktok.png", // TikTok
    "/images/icons/mage_youtube.png", //Youtube
  ];

  return (
    <div className="bg-[#DDF8FF] relative h-full w-full py-12 overflow-hidden">
      {/* Background dotted pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/images/bg/dotted-pattern.png"
            alt="background pattern"
            fill
            className="object-cover opacity-30"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
          {/* First two team members */}
          {teamMembers.slice(0, 2).map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              experience={member.experience}
              icons={socialIcons}
            />
          ))}

          {/* Center Text Block */}
          <div className="flex flex-col items-center text-center max-w-xs px-4">
            <p className="text-sm md:text-[15px] lg:text-base text-[#0D3A48] mb-1 jakarta">
              Your Companion in the wild
            </p>
            <h2 className="text-[20px] md:text-[24px] lg:text-[30px] text-[#0D3A48] gloock mb-2">
              Experts Who Turn Treks Into Journeys
            </h2>

            <div className="flex flex-row justify-between items-center gap-4 mb-2">
              <div className="w-[70px] h-[2px] bg-[#0B2839]"></div>
              <div>
                <Image
                  src="/images/icons/765737_09 1.png"
                  alt="mountain"
                  width={120}
                  height={12}
                  className="mb-2"
                />
              </div>
              <div className="w-[70px] h-[2px] bg-[#0B2839]"></div>
            </div>

            <p className="lg:text-base md:text-sm text-xs text-[#000000] jakarta">
              Our experienced guides bring deep trail knowledge, safety, and
              heart to every trek—turning hikes into unforgettable journeys.
            </p>
          </div>

          {/* Last two team members */}
          {teamMembers.slice(2).map((member, index) => (
            <TeamCard
              key={index + 2}
              image={member.image}
              name={member.name}
              experience={member.experience}
              icons={socialIcons}
            />
          ))}
        </div>

        {/* View Team Button */}
        <div className="flex justify-center">
          <button className="bg-[#D5E880] px-4 py-2 rounded-md flex items-center gap-1  md:text-base text-sm lg:text-lg text-[#0D3A48] hover:bg-yellow-400 transition-colors">
            View Our Team
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
