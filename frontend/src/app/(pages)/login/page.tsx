"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import Link from "next/link";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Login submitted:", data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-4xl flex rounded-2xl shadow-md overflow-hidden">

                {/* Left — Form */}
                <div className="w-full md:w-1/2 p-8 bg-[#EEF4FB]">
                    <div className="flex flex-col items-center mb-6">
                        <img src="/images/mainLogo1.png" alt="logo" className="w-20 h-20 mb-2" />
                        <h1 className="jakarta text-2xl font-semibold">Sign in to your account</h1>
                        <p className="text-sm text-gray-500 mt-2">Welcome back — enter your details below.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <InputField
                            register={register}
                            name="email"
                            label="Email"
                            required={true}
                            validationRules={{
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                            }}
                            placeholder="you@example.com"
                            errors={errors}
                        />

                        <InputField
                            register={register}
                            name="password"
                            label="Password"
                            required={true}
                            type="password"
                            validationRules={{
                                required: "Password is required",
                                minLength: { value: 6, message: "Minimum 6 characters" },
                            }}
                            placeholder="Enter your password"
                            errors={errors}
                        />

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-3 text-sm">
                                <input type="checkbox" className="custom-checkbox" />
                                <span className="text-sm text-gray-600">Remember me</span>
                            </label>
                            <Link href="/forgot-password" className="text-sm text-[#0A5482] hover:underline">
                                Forgot?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#D5E880] hover:bg-yellow-400 text-gray-800 py-2 rounded-md font-medium"
                        >
                            Sign in
                        </button>
                    </form>

                </div>

                {/* Right — Image (hidden on mobile) */}
                <div className="hidden md:block md:w-1/2 w-full h-full relative">
                    <img
                        src="/images/loginbg.jpg"
                        alt="Login visual"
                        className="w-full h-[32rem] object-cover"
                    />
                    {/* Optional dark overlay + text */}
                    <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
                        <h2 className="text-white text-2xl font-bold leading-snug">
                            Explore Nepal's <br /> greatest trails.
                        </h2>
                        <p className="text-white/70 text-sm mt-2">
                            Plan your next trek with expert guides.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;