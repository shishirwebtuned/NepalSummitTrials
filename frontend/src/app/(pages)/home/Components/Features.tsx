
"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Trek {
  id: string;
  name: string;
  price_adult: string;
  duration_days: number;
  description: string;
  cover_image: string;
  slug: string;
}

interface FeaturesProps {
  treks: Trek[];
}


const Features = ({ treks }: FeaturesProps) => {
  const router = useRouter();

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationRef = useRef<number | null>(null);


  const smoothScrollBy = useCallback((distance: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const start = container.scrollLeft;
    const target = start + distance;
    const duration = 500;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      container.scrollLeft = start + (target - start) * eased;

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      // Initial calculation
      handleScroll();

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Frame 29.png"
          alt="Mountain background"
          fill
          className="object-cover"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[87%] px-4 py-12 mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="text-[#0D3A48] text-sm md:text-[15px] lg:text-base jakarta">
            Featured Treks
          </p>
          <h2 className="mt-2 text-[20px] md:text-[24px] lg:text-[30px] text-[#0D3A48] gloock">
            Iconic Trails That Belong on
            <br />
            Every Bucket List
          </h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-32 h-px bg-[#0B2839]"></div>
            <img
              src="/images/icons/765737_09 1.png"
              alt="Mountain icon"
              className="mx-3 w-[101px] h-[34px]"
            />
            <div className="w-32 h-px bg-[#0B2839]"></div>
          </div>
        </div>

        {/* Trail cards */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => smoothScrollBy(-320)}
            className="flex absolute -left-9 md:-left-14 top-1/2 -translate-y-1/2 z-20 w-7.5 h-7.5 md:w-10 md:h-10 items-center justify-center rounded-full shadow-lg bg-[#2A78A6] text-white transition-all duration-300 cursor-pointer"
          >
            <ChevronLeft className="md:w-5 md:h-5 w-4 h-4" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => smoothScrollBy(320)}
            className="flex absolute -right-9 md:-right-14 top-1/2 -translate-y-1/2 z-20 w-7.5 h-7.5 md:w-10 md:h-10 items-center justify-center rounded-full  shadow-lg bg-[#2A78A6] text-white text-[#2A78A6] transition-all duration-300 cursor-pointer"
          >
            <ChevronRight className="md:w-5 md:h-5 w-4 h-4" />
          </button>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="flex gap-6 min-w-fit px-1">
              {treks.slice(0, 8).map((trail) => (
                <div
                  key={trail.id}
                  onClick={() => router.push(`/trek-detail/${trail.slug}`)}
                  className="relative md:min-w-[280px] min-w-[240px] group transition-all ease-linear duration-700 cursor-pointer rounded-[106px] overflow-hidden"
                >
                  <div className="relative flex items-end justify-center p-2 h-[400px] overflow-hidden">
                    <Image
                      src={trail.cover_image || "/placeholder.svg"}
                      alt={trail.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-125 group-hover:translate-y-10 group-hover:translate-x-4"
                    />

                    <div className="relative px-4 py-4 text-center bg-[#E3E3E3] group-hover:bg-[#2A78A6] rounded-b-[106px] mb-1 mx-2 transition-all duration-700 ease-in-out w-full">
                      <div className="absolute bg-[#E3E3E3] group-hover:bg-[#2A78A6] rounded-full p-2 -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-700 ease-in-out">
                        <div className="z-10 bg-[#2A78A6] group-hover:bg-white group-hover:text-[#2A78A6] text-white px-5 py-2 rounded-full text-sm font-bold shadow-md transition-all duration-700 ease-in-out">
                          ${trail.price_adult}
                        </div>
                      </div>

                      <div className="flex items-center mb-1 text-xs mt-7 group-hover:text-[#D5E880] text-gray-600 justify-center transition-all duration-700 ease-in-out">
                        <Clock
                          size={16}
                          className="text-gray-700 group-hover:text-[#D5E880] transition-all duration-700 ease-in-out mr-1"
                        />
                        {trail.duration_days} Days
                      </div>

                      <h3 className="mb-1 text-sm font-bold text-black group-hover:text-white transition-all duration-700 ease-in-out line-clamp-1 min-h-[1.25rem]">
                        {trail.name}
                      </h3>
                      <p className="mb-2 text-xs group-hover:text-white text-gray-600 transition-all duration-700 ease-in-out line-clamp-2 min-h-[2rem]">
                        {trail.description}
                      </p>

                      <div className="flex justify-center">
                        <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-lg group-hover:bg-[#D5E880] transition-all duration-700 ease-in-out">
                          <ArrowRight size={14} className="text-[#2A78A6]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Scrollbar */}
        <div className="mt-16">
          <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
            <motion.div
              className="h-2 bg-[#2A78A6] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
                mass: 0.8,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
