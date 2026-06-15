"use client";

import React from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ArrowRight } from "lucide-react";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { login } from "./actions";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        const formData = new FormData()
        formData.append('email', data.email)
        formData.append('password', data.password)
        const result = await login(formData)
        if (result?.error) setError('root', { type: 'server', message: result.error })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#dce8f0] px-4">
            <div className="w-full max-w-4xl flex rounded-2xl shadow-lg overflow-hidden">

                {/* Left — Form */}
                <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">

                    {/* Logo row */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-9 h-9 rounded-lg bg-[#0A5482] flex items-center justify-center">
                            <img src="/images/mainLogo1.png" alt="logo" className="w-5 h-5 object-contain" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[#0A5482]">Nepal Summit Trials</p>
                            <p className="text-[11px] text-gray-400">Your adventure awaits</p>
                        </div>
                    </div>

                    <h1 className="jakarta text-xl font-semibold mb-1">Welcome back</h1>
                    <p className="text-sm text-gray-400 mb-6">Sign in to continue your journey</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        {/* Email with icon */}
                        <div>
                            <label className="text-xs font-medium text-gray-500 block mb-1.5">Email address</label>
                            <div className="flex items-center gap-2 rounded-lg bg-gray-50">
                                {/* <MdOutlineEmail className="text-gray-400 text-base shrink-0" /> */}
                                <InputField register={register} name="email" required validationRules={{ required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" } }} placeholder="you@example.com" errors={errors} />
                            </div>
                        </div>

                        {/* Password with icon */}
                        <div>
                            <label className="text-xs font-medium text-gray-500 block mb-1.5">Password</label>
                            <div className="flex items-center gap-2 rounded-lg  bg-gray-50">
                                {/* <MdLockOutline className="text-gray-400 text-base shrink-0" /> */}
                                <InputField register={register} name="password" type="password" required validationRules={{ required: "Password is required", minLength: { value: 6, message: "Minimum 6 characters" } }} placeholder="••••••••" errors={errors} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                                <input type="checkbox" className="accent-[#0A5482]" /> Remember me
                            </label>
                            <Link href="/forgot-password" className="text-xs text-[#0A5482] hover:underline">Forgot password?</Link>
                        </div>

                        <button type="submit" className="w-full bg-[#D5E880] hover:bg-lime-300 transition text-[#2a3d00] font-medium py-2.5 rounded-lg flex items-center justify-center gap-2">
                            Sign in <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                </div>

                {/* Right — Image panel */}
                <div className="hidden md:flex md:w-1/2 relative flex-col justify-between p-8 bg-[#0A5482]">
                    <img src="/images/loginbg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-[#0A5482]/75" />

                    {/* Badge */}
                    <div className="relative z-10 inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 self-start">
                        <span className="text-[#D5E880] text-xs">★</span>
                        <span className="text-white/80 text-[11px]">Rated #1 Trek Agency in Nepal</span>
                    </div>

                    {/* Bottom text */}
                    <div className="relative z-10">
                        <h2 className="text-white text-2xl font-bold leading-snug mb-2">Explore Nepal's<br />greatest trails.</h2>
                        <p className="text-white/90 text-sm mb-6">Plan your next trek with expert guides who know every summit.</p>
                        <div className="flex gap-5">
                            <div className="border-l-2 border-[#D5E880] pl-3">
                                <p className="text-[#D5E880] text-lg font-bold">15+</p>
                                <p className="text-white/50 text-xs">Years</p>
                            </div>
                            <div className="border-l-2 border-white/20 pl-3">
                                <p className="text-white text-lg font-bold">200+</p>
                                <p className="text-white/50 text-xs">Routes</p>
                            </div>
                            <div className="border-l-2 border-white/20 pl-3">
                                <p className="text-white text-lg font-bold">114K+</p>
                                <p className="text-white/50 text-xs">Happy clients</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;