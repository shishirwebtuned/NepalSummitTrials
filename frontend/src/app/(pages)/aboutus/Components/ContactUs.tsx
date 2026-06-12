"use client";
import MountainHeader from "@/components/MountainHeader";
import Image from "next/image";
import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { useForm } from "react-hook-form";
import { FiArrowRight } from "react-icons/fi";
import { MdLocationPin, MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";

const ContactUs = () => {

  const cardDetails = [
    {
      title: "Location",
      desc: "Bakhundole, Lalitpur",
      icon: MdLocationPin,
      href: "https://maps.app.goo.gl/h4bBFpo5DHT2Ch7w5",
    },
    {
      title: "Contact Number",
      desc: "+977-1-5350117",
      icon: MdPhoneInTalk,
      href: "tel:+97715350117",
    },
    {
      title: "Email",
      desc: "Info@Hvtreks.Com",
      icon: MdOutlineEmail,
      href: "mailto:Info@Hvtreks.Com",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("DATA SUBMITTED");
  };

  return (
    <div className="relative w-full flex items-center justify-center min-h-screen px-5 md:px-[3rem] lg:px-[6rem]">
      {/* Background Image */}
      <img
        src="/images/about/contactBackground.png"
        alt="Contact background image"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />

      {/* Content */}
      <div className="relative z-20 flex w-full flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2">
            <MountainHeader title="Contact Us" />
            <h1 className="gloock text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Get in touch
            </h1>
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg my-4 sm:my-6"
              >
                <div>
                  <div className="my-3 sm:my-4">
                    <input
                      {...register("Name", {
                        required: "Full Name is required",
                        pattern: {
                          value: /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/,
                          message: "Name must be a string",
                        },
                      })}
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-3 py-2 text-xs sm:text-sm md:text-base rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
                    />
                    {errors.Name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.Name.message as string}
                      </p>
                    )}
                  </div>

                  <div className="my-3 sm:my-4">
                    <input
                      {...register("Phoneno", {
                        required: "Phone number is required",
                        pattern: {
                          value:
                            /^\+?\d{1,4}?[-.\s]?(?:\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                      type="text"
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 text-xs sm:text-sm md:text-base rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
                    />
                    {errors.Phoneno && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.Phoneno.message as string}
                      </p>
                    )}
                  </div>

                  <div className="my-3 sm:my-4">
                    <input
                      {...register("Email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-3 py-2 text-xs sm:text-sm md:text-base rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
                    />
                    {errors.Email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.Email.message as string}
                      </p>
                    )}
                  </div>

                  <div className="my-3 sm:my-4">
                    <textarea
                      placeholder="Enter your Message"
                      className="resize-none w-full h-32 sm:h-36 rounded-xl bg-white text-gray-800 px-3 py-2 text-xs sm:text-sm md:text-base focus:outline-none border border-gray-300"
                      {...register("description", {
                        required: "Description is required",
                        minLength: {
                          value: 10,
                          message: "Description must be at least 10 characters",
                        },
                        maxLength: {
                          value: 500,
                          message:
                            "Description must be less than 500 characters",
                        },
                      })}
                    />
                    {errors.description && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.description.message as string}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-[#0B2839] transition-transform ease-in-out duration-200 hover:scale-105 cursor-pointer flex items-center gap-2 sm:gap-3 md:gap-4 text-white border border-gray-300 focus:outline-none px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm md:text-base"
                  >
                    Discover More <FiArrowRight className="size-4 sm:size-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <div className="w-full ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.130399581913!2d85.31037978245526!3d27.68236431482236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19628ba30cb5%3A0x7927837c54013d33!2sWeb%20Tuned%20Studio!5e0!3m2!1sen!2snp!4v1781156531109!5m2!1sen!2snp"
                className="w-full h-[15rem] md:h-[28rem] lg:h-[30rem] border-0"
                allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="bg-[#2A78A6] flex flex-col sm:flex-row sm:flex-wrap lg:flex-wrap justify-between px-4 sm:px-6 py-4 sm:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl text-white gap-4 sm:gap-2">
              {cardDetails.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0"
                >
                  <div
                    className="border-2 rounded-xl w-8 sm:w-9 h-8 sm:h-9 flex items-center justify-center shrink-0"
                    style={{ borderColor: "rgba(213, 232, 128, 0.2)" }}
                  >
                    <item.icon className="size-3 sm:size-4 fill-white" />
                  </div>
                  <div className="min-w-0">
                    <h1 className="jakarta font-semibold text-xs sm:text-sm truncate">
                      {item.title}
                    </h1>
                    <a href={item.href}
                      target={index === 0 ? "_blank" : undefined}
                      rel={index === 0 ? "noopener noreferrer" : undefined}
                      className="jakarta text-xs sm:text-sm truncate block hover:underline hover:opacity-80 transition-opacity"
                    >
                      {item.desc}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
