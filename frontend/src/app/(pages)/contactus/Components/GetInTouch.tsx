
"use client";
import MountainHeader from "@/components/MountainHeader";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { IoIosMail, IoMdArrowForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import ContactCard from "./ContactCard";

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dateInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="flex flex-col mx-3 lg:flex-row lg:items-start lg:mx-[7rem] gap-6">
      <div className="w-full lg:w-1/2">
        <ContactCard />
      </div>
      <div className="w-full lg:w-1/2">
        <MountainHeader title="What Sets Us Apart" />
        <h1 className="gloock text-xl lg:text-3xl mb-4">Get in touch</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-[70%] my-3 space-y-4"
        >
          {/* Full Name */}
          <div className="space-y-1">
            <div className="relative">
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
                className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
              />
            </div>
            {errors.Name && (
              <p className="text-red-500 text-xs">{(errors.Name as any).message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <div className="relative">
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email must be valid",
                  },
                })}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300 pr-10"
              />
              <IoIosMail
                className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6"
                style={{ color: "#D5E880" }}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs">{(errors.email as any).message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <div className="relative">
              <input
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Alphabets aren't valid",
                  },
                })}
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs">
                {String(errors.phoneNumber.message)}
              </p>
            )}
          </div>

          {/* Destination */}
          <div className="space-y-1">
            <div className="relative">
              <select
                {...register("Name", {
                  required: "Destination is required",
                  pattern: {
                    value: /^[A-Z][a-z]+(?: [A-Z][a-z]+)+$/,
                    message:
                      "Destination must be a valid name (e.g., New York)",
                  },
                })}
                className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-400 focus:outline-none border border-gray-300 pr-10 appearance-none"
              >
                <option value="" disabled className="text-gray-400 opacity-60">
                  Destination
                </option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="San Francisco">San Francisco</option>
              </select>
              <IoLocation
                className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6"
                style={{ color: "#D5E880" }}
              />
            </div>
            {errors.Name && (
              <p className="text-red-500 text-xs">{(errors.Name as any).message}</p>
            )}
          </div>

          {/* Date and Travelers */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Date */}
            <div className="w-full space-y-1">
              <div className="relative">
                <input
                  {...register("date", {
                    required: "Date is required",
                    pattern: {
                      value:
                        /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
                      message: "Date must be valid",
                    },
                  })}
                  ref={(el) => {
                    // Store reference for the icon click handler
                    dateInputRef.current = el;
                  }}
                  type="date"
                  placeholder="Date to Travel"
                  className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300 pr-10 appearance-none placeholder:text-gray-400 placeholder:opacity-60"
                />
                <style>
                  {`
        input[type="date"]::-webkit-calendar-picker-indicator {
          display: none;
        }
        input[type="date"]::-webkit-inner-spin-button,
        input[type="date"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="date"] {
          -moz-appearance: textfield;
        }
      `}
                </style>
                <BsCalendar2DateFill
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6 cursor-pointer"
                  style={{ color: "#D5E880" }}
                  onClick={() => {
                    if (dateInputRef.current) {
                      dateInputRef.current.focus();
                      dateInputRef.current.showPicker?.();
                    }
                  }}
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-xs">{String(errors.date.message)}</p>
              )}
            </div>

            {/* Travelers */}
            <div className="w-full space-y-1">
              <div className="relative">
                <input
                  {...register("travelers")}
                  type="number"
                  min="0"
                  placeholder="No. of travelers"
                  className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
                />
              </div>
              {errors.travelers && (
                <p className="text-red-500 text-xs">
                  {String(errors.travelers.message)}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <textarea
                placeholder="Enter your Message"
                className="resize-none w-full h-[6rem] lg:h-[8rem] rounded-xl bg-white text-gray-800 px-4 py-3 focus:outline-none border border-gray-300"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                  maxLength: {
                    value: 500,
                    message: "Description must be less than 500 characters",
                  },
                })}
              />
            </div>
            {errors.description && (
              <p className="text-red-500 text-xs">
                {String(errors.description.message)}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#D5E880] rounded-xl flex items-center gap-2 py-2  lg:py-3 px-5 hover:bg-[#c0d370] transition-colors"
          >
            Send Message <IoMdArrowForward className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
