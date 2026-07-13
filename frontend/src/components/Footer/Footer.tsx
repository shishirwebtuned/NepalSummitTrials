import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";

import { BiSolidPhoneCall } from "react-icons/bi";

import { IoIosMail } from "react-icons/io";
import ContactCard from "./components/ContactCard";

const footerLinks = {
  linkGroupOne: [
    { href: "/", title: "Tour Listings" },
    { href: "/", title: "Destinations" },
    { href: "/", title: "Activities" },
    { href: "/", title: "How it Works" },
    { href: "/", title: "How it works" },
  ],
  linkGroupTwo: [
    { href: "/aboutus", title: "About" },
    { href: "/", title: "Our Team" },
    { href: "/", title: "Testimonials" },
    { href: "/", title: "Latest News" },
    { href: "/contactus", title: "Contact Now" },
  ],

  mainLinks: [
    {
      href: "/",
      icon: FaFacebookF,
    },
    {
      href: "/",
      icon: RiInstagramFill,
    },
    {
      href: "/",
      icon: FaTiktok,
    },
    {
      href: "/",
      icon: FaYoutube,
    },
    {
      href: "/",
      icon: RiLinkedinFill,
    },
  ],
  contactGroup: [
    {
      title: "Budanilkantha Kathmandu, Nepal",
      icon: IoLocation,
    },
    {
      title: "(+977) 987654321",
      icon: BiSolidPhoneCall,
    },
    {
      title: "info@event.com",
      icon: IoIosMail,
    },
  ],
};

const Footer = () => {
  return (
    <>
      <div className="flex w-full flex-col justify-center">
        <div className="relative translate-y-[61px] ">
          <img src="/images/FooterPerson.png" />
        </div>
        <div className="bg-[#0B2839] relative">
          <div className="flex relative items-center justify-between text-white px-[9%] z-10">
            <img
              src="/images/mainLogo1.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="md:w-16 w-12 lg:w-20 h-auto"
            />
            <div className="flex items-center lg:gap-3 md:gap-2 gap-1">
              {footerLinks.mainLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="rounded-full flex items-center justify-center bg-[#5F616E57] md:w-8 md:h-8 w-5 h-5 lg:h-10 lg:w-10 "
                >
                  <item.icon className="md:size-4 size-3 lg:size-5 fill-white" />
                </Link>
              ))}
            </div>
          </div>
          <div className="border-b-4 relative border-[#FFFFFF1F] mx-[9%] py-2 z-10 "></div>
        </div>
        <div className="bg-[#0B2839] relative">
          <div className="absolute bottom-0 h-full inset-x-0 w-full flex justify-center items-end z-0">
            <h1 className="font-bold protest text-[#2945564D]  text-[3rem] md:text-[8rem] lg:text-[12rem] overflow-hidden whitespace-nowrap ">
              Adventure Awaits
            </h1>
          </div>

          <div className="relative flex justify-between flex-wrap gap-x-2 gap-y-4 pt-8 px-[9%] z-10 lg:pb-0 pb-8">
            <div className="">
              <h1 className="font-semibold text-white text-base md:text-lg lg:text-xl pb-2">
                Company
              </h1>
              <div className="flex flex-col">
                {footerLinks.linkGroupOne.map((item, index) => (
                  <Link
                    className="text-[#8FB2C6] pb-2 lg:text-base md:text-sm text-xs"
                    key={index}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="">
              <h1 className="font-semibold text-white text-base md:text-lg lg:text-xl pb-2">
                Explore
              </h1>
              <div className="flex flex-col">
                {footerLinks.linkGroupTwo.map((item, index) => (
                  <Link
                    className="text-[#8FB2C6] pb-2 lg:text-base md:text-sm text-xs"
                    key={index}
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="">
              <h1 className="font-semibold text-white text-base md:text-lg lg:text-xl pb-2">
                Company
              </h1>
              {footerLinks.contactGroup.map((item, index) => (
                <div
                  className="flex items-center gap-4 pb-2 lg:text-base md:text-sm text-xs"
                  key={index}
                >
                  <item.icon className="lg:size-5 md:size-4 size-3 fill-[#D5E880]" />
                  <h1 className="text-[#8FB2C6]">{item.title}</h1>
                </div>
              ))}
            </div>

            <div className="">
              <ContactCard />
            </div>
          </div>
        </div>
        <div className="bg-[#3C5361] py-2">
          <h1 className="lg:text-base md:text-sm text-xs text-white text-center">
            &copy; {new Date().getFullYear()} ABC Events. All rights reserved.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
