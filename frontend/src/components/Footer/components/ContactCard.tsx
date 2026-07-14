"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { TbLoader2, TbCheck } from "react-icons/tb";
import { subscribeNewsletter } from "@/app/actions/newsletter";

type FormData = {
  Email: string;
  subscribe: boolean;
};

const ContactCard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setServerError(null);
    setIsSubmitting(true);
    try {
      await subscribeNewsletter(data.Email, !!data.subscribe);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 4000);
    } catch (err: any) {
      setServerError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-[1rem] bg-[#041B29] rounded-xl py-4 md:py-8">
      <h1 className="text-white text-sm md:text-base lg:text-lg font-semibold ">
        Signup for our latest news and articles
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2 md:mt-4">
        <div className="relative rounded-xl">
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
            disabled={isSubmitting}
            className="w-full px-4 py-2 lg:text-base md:text-sm text-xs rounded-xl bg-white text-gray-800 focus:outline-none border border-gray-300 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="absolute right-0 top-0 h-full bg-[#D5E880] text-gray-800 font-bold px-4 py-2 rounded-tr-xl rounded-br-xl hover:bg-[#c0d260] transition-colors disabled:opacity-70 cursor-pointer"
          >
            {isSubmitting ? (
              <TbLoader2 className="lg:size-5 md:size-4 size-3 animate-spin" />
            ) : success ? (
              <TbCheck className="lg:size-5 md:size-4 size-3" />
            ) : (
              <FaArrowRight className="lg:size-5 md:size-4 size-3" />
            )}
          </button>


        </div>

        <div className="mt-2 mb-2 flex items-center">
          <input
            {...register("subscribe", {
              required: "You must agree to the privacy policy",
            })}
            type="checkbox"
            className="h-4 w-4 accent-[#D5E880] custom-checkbox focus:ring-[#D5E880] border-gray-300 rounded-full"
          />
          <label className="ml-2 text-white lg:text-sm md:text-[13px] text-xs">
            I agree to privacy policy
          </label>
        </div>

        <div>
          {errors.Email?.message && (
            <p className="text-red-400 text-xs md:text-sm mt-1">{errors.Email.message}</p>
          )}

          {errors.subscribe?.message && (
            <p className="text-red-400 text-xs md:text-sm mt-1">{errors.subscribe.message}</p>
          )}

          {serverError && (
            <p className="text-red-400 text-xs md:text-sm mt-1">{serverError}</p>
          )}
          {success && (
            <p className="text-[#D5E880] text-xs md:text-sm mt-1">Subscribed successfully!</p>
          )}
        </div>

      </form>
    </div>
  );
};

export default ContactCard;