"use client";
import MountainHeader from "@/components/MountainHeader";
import { useRef, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { IoIosMail, IoMdArrowForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BsCalendar2DateFill } from "react-icons/bs";
import { TbLoader2 } from "react-icons/tb";
import ContactCard from "./ContactCard";
import { submitContactMessage } from "@/app/actions/contact";
import toast from "react-hot-toast";

type FormValues = {
  Name: string
  email: string
  phoneNumber: string
  // destination: string
  date: string
  travelers: number
  description: string
}

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      Name: '',
      email: '',
      phoneNumber: '',
      date: '',
      travelers: 1,
      description: '',
    },
  });

  const dateInputRef = useRef<HTMLInputElement | null>(null);
  const [isPending, startTransition] = useTransition();
  const { ref: dateRef, ...dateFieldProps } = register("date");

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      try {
        await submitContactMessage({
          full_name: data.Name,
          email: data.email,
          phone: data.phoneNumber,
          // destination: data.destination,
          travel_date: data.date || undefined,
          num_travelers: data.travelers ? Number(data.travelers) : undefined,
          message: data.description,
        })
        toast.success('Message sent! We\'ll get back to you soon.')
        reset()
      } catch (err: any) {
        toast.error(err.message || 'Failed to send message')
      }
    })
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
                    message: "Enter a valid full name (e.g. John Doe)",
                  },
                })}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
              />
            </div>
            {errors.Name && (
              <p className="text-red-500 text-xs">{errors.Name.message}</p>
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
                    message: "Enter a valid email address",
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
              <p className="text-red-500 text-xs">{errors.email.message}</p>
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
                    message: "Phone number must contain digits only",
                  },
                })}
                type="text"
                placeholder="Phone Number"
                className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs">{errors.phoneNumber.message}</p>
            )}
          </div>

          {/* Destination */}
          {/* <div className="space-y-1">
            <div className="relative">
              <select
                {...register("destination", {
                  required: "Please select a destination",
                })}
                className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-400 focus:outline-none border border-gray-300 pr-10 appearance-none"
              >
                <option value="" disabled>Destination</option>
                <option value="Everest Base Camp">Everest Base Camp</option>
                <option value="Annapurna Circuit">Annapurna Circuit</option>
                <option value="Langtang Valley">Langtang Valley</option>
                <option value="Manaslu Circuit">Manaslu Circuit</option>
                <option value="Gokyo Lakes">Gokyo Lakes</option>
              </select>
              <IoLocation
                className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6"
                style={{ color: "#D5E880" }}
              />
            </div>
            {errors.destination && (
              <p className="text-red-500 text-xs">{errors.destination.message}</p>
            )}
          </div> */}

          {/* Date and Travelers */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="w-full space-y-1">
              <div className="relative">
                <input
                  {...dateFieldProps}
                  ref={(el) => {
                    dateRef(el);
                    dateInputRef.current = el;
                  }}
                  type="date"
                  className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300 pr-10 appearance-none"
                />
                <style>{`
                  input[type="date"]::-webkit-calendar-picker-indicator { display: none; }
                `}</style>
                <BsCalendar2DateFill
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6 cursor-pointer"
                  style={{ color: "#D5E880" }}
                  onClick={() => {
                    if (dateInputRef.current) {
                      dateInputRef.current.focus()
                      dateInputRef.current.showPicker?.()
                    }
                  }}
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-xs">{errors.date.message}</p>
              )}
            </div>

            <div className="w-full space-y-1">
              <div className="relative">
                <input
                  {...register("travelers")}
                  type="number"
                  min="1"
                  placeholder="No. of travelers"
                  className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1">
            <div className="relative">
              <textarea
                placeholder="Enter your message"
                className="resize-none w-full h-[6rem] lg:h-[8rem] rounded-xl bg-white text-gray-800 px-4 py-3 focus:outline-none border border-gray-300"
                {...register("description", {
                  required: "Message is required",
                  minLength: { value: 10, message: "At least 10 characters" },
                  maxLength: { value: 500, message: "Maximum 500 characters" },
                })}
              />
            </div>
            {errors.description && (
              <p className="text-red-500 text-xs">{errors.description.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="bg-[#D5E880] rounded-xl flex items-center gap-2 py-2 lg:py-3 px-5 hover:bg-[#c0d370] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <>
                <TbLoader2 className="animate-spin size-5" /> Sending...
              </>
            ) : (
              <>
                Send Message <IoMdArrowForward className="size-5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;