"use client";
import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const HideCard = ({ title, hiddenText, linkTitle, href }: { title: string; hiddenText: string; linkTitle: string; href: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col px-5 py-3 w-full">
      <div className="flex items-center justify-between md:gap-1 gap-5">
        <h1 className="font-semibold tracking-wide gloock lg:text-base md:text-sm text-xs">
          {title}
        </h1>
        <button
          onClick={toggleOpen}
          className="bg-[#0B2839] cursor-pointer rounded-full flex items-center justify-center lg:w-8 lg:h-8 md:w-7 md:h-7 w-5 h-5"
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
            className="overflow-hidden lg:text-base md:text-sm text-xs"
          >
            <div className="pt-3 text-gray-700">
              <p className="jakarta">
                {hiddenText}{" "}
                <span className="underline  text-[#2A78A6] hover:text-[#72aaca]">
                  <Link href={href}>{linkTitle}</Link>
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HideCard;
