"use client";
import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const FaqHideCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col px-2 md:px-4 lg:px-5 md:py-3 py-2 w-full">
      <div className="flex flex-row items-center justify-between w-full md:gap-1 gap-0">
        <h1 className="font-semibold tracking-wide gloock lg:text-base md:text-sm text-xs">
          {title}
        </h1>
        <button
          onClick={toggleOpen}
          className="bg-[#0B2839] cursor-pointer rounded-full flex items-center justify-center lg:w-8 lg:h-8 md:w-7 md:h-7 w-6 h-6"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <HiMinus className="lg:size-5 md:size-4 size-3 fill-white" />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <HiPlus className="lg:size-5 md:size-4 size-3 fill-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className=" mt-4 overflow-hidden w-full rounded-xl lg:text-base md:text-sm text-xs"
            style={{ backgroundColor: "#f2f6f9" }}
          >
            <div className="p-4 text-gray-700">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqHideCard;
