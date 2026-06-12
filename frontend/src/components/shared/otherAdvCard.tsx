

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const OtherAdvCard = ({
  image,
  buttonText,
  overlayTitle,
  title,
  description,
  onClick,
}: {
  image: string;
  buttonText: string;
  overlayTitle: string;
  title: string;
  description: string;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
      <div
        className="relative rounded-xl cursor-pointer"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        onClick={onClick}
      >
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-xl">
          {/* Image - Scales with zoom effect */}
          <motion.div
            className="relative"
            animate={{
              scale: isHovered ? 1.15 : 1,
            }}
            transition={{
              duration: 0.7,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            style={{
              transformOrigin: "center center",
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="Adventure card"
              width={800}
              height={400}
              className="w-full h-56 sm:h-60 md:h-64 object-cover rounded-xl"
            />
          </motion.div>

          {/* Glass-like Overlay - Starts from center, moves to bottom */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 rounded-xl flex items-center justify-center z-30 border border-white/20"
                style={{
                  backgroundColor: "rgba(42, 120, 166, 0.4)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                  background:
                    "linear-gradient(135deg, rgba(42, 120, 166, 0.5) 0%, rgba(42, 120, 166, 0.3) 100%)",
                }}
                initial={{ opacity: 0, y: -200, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -200, scale: 0.8 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.div
                  initial={{ y: 0, opacity: 0, rotateX: 90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: 0, opacity: 0, rotateX: -90 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.2, 0.8, 0.2, 1],
                    delay: 0.3,
                  }}
                  className="text-white text-center px-4 sm:px-6 md:px-8"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-white/90"
                    animate={{
                      textShadow: isHovered
                        ? "0 0 20px rgba(255,255,255,0.5)"
                        : "none",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {overlayTitle}
                  </motion.div>
                  <motion.button
                    className="text-sm md:text-base jakarta cursor-pointer hover:text-black opacity-90 hover:opacity-100 hover:bg-[#D5E880] border border-white/40 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl transition-colors duration-200 backdrop-blur-sm bg-white/10  font-semibold"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onClick();
                    }}
                  >
                    {buttonText}
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Original Text Overlay - Starts from bottom, moves to center */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4 md:p-6"
            animate={{
              y: isHovered ? -180 : 0,
              x: isHovered ? 50 : 0,
              scale: isHovered ? 0.8 : 1,
              opacity: isHovered ? 0.4 : 1,
              rotateZ: isHovered ? 10 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              pointerEvents: isHovered ? "none" : "auto",
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-lg bg-[#D5E880] mb-2 sm:mb-3 md:mb-4 inline-block"
              animate={{
                rotateY: isHovered ? 15 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <h2 className="text-sm md:text-base lg:text-lg font-medium">
                {title}
              </h2>
            </motion.div>
            <motion.div
              animate={{
                rotateY: isHovered ? -10 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1,
              }}
            >
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow-lg">
                {description}
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OtherAdvCard;
