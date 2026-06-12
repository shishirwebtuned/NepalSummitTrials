import Topsection from "@/components/Topsection";
import Image from "next/image";
import React from "react";
import { MdPhoneInTalk } from "react-icons/md";

const page = () => {
    const refundData = [
        {
            title: "Experienced, certified guests",
            description:
                "The deposit confirms your acceptance of our terms and conditions.",
        },
        {
            title: "Date changes",
            description:
                "Requests to change the departure date must be submitted in writing at least 30 days before the trip begins.",
        },
        {
            title: "Cancellation Changes",
            description:
                "Cancellations made after booking but before departure will incur a 15% cancellation fee, covering government taxes. No refunds will be issued for unused trip arrangements after the trip has started. ",
        },
    ];

    return (
        <div>
            <Topsection
                title="Your Journey Starts With a Message"
                image="/images/about/aboutbg.png"
            />
            <div className="flex flex-col w-full lg:flex-row gap-8 px-3 pt-[4rem] pb-18 lg:px-[8rem]">
                <div className="lg:w-1/2 overflow-hidden rounded-2xl">
                    <Image
                        src="/images/payment/shapeimg1.png"
                        alt="Mountain Image"
                        className="w-full h-full object-cover  "
                        width={400}
                        height={400}
                    />
                </div>
                <div className="lg:w-1/2">
                    <h1 className="gloock text-xl lg:text-3xl pb-3 lg:pb-6 text-[#0B2839]">
                        Discount Policy
                    </h1>
                    <p className="jakarta text-base lg:text-lg text-[#495057] pb-2">
                        2025-2026 Pricing and Payment Policy
                    </p>
                    <h2 className="jakarta font-semibold text-lg text-[#495057] lg:text-xl pb-2">
                        Himalayan Vacation Treks & Expedition{" "}
                        <span className="text-[#2A78A6]">Standard Pricing</span>
                    </h2>
                    <p className="jakarta text-lg text-[#495057]">
                        We offer flexible pricing based on group size:
                    </p>
                    <ul className="jakarta text-[#495057] list-disc space-y-1 pl-8">
                        <li>Minimum 2 participants: Standard prices apply.</li>
                        <li>4 to 6 participants: 10% discount.</li>
                        <li>7 to 10 participants: 12% discount.</li>
                        <li>11 to 14 participants: 15% discount.</li>
                    </ul>
                    <p className="text-[#EB856C] jakarta mt-2 text-[1rem] text-wrap lg:max-w-[33rem]">
                        Note: All prices listed on our website are valid for the 2025-2026
                        period.
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-full lg:flex-row-reverse pb-18 gap-8 px-3 lg:px-[8rem]">
                <div className="lg:w-1/2 overflow-hidden rounded-2xl">
                    <Image
                        src="/images/payment/image2.png"
                        alt="Hilly region image"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="gloock text-xl lg:text-3xl pb-6 text-[#0B2839]">
                        Bookings and Payments
                    </h2>
                    <p className="jakarta pb-2 font-semibold text-[#495057] text-lg lg:text-xl">
                        Deposit and Payment requirements
                    </p>
                    <ul className="jakarta text-base lg:text-lg text-[#495057] pl-8 space-y-1 list-disc">
                        <li>
                            A 50% deposit of the total trip cost is required at least one week
                            before departure to confirm your booking.
                        </li>
                        <li>
                            The remaining balance must be paid upon arrival in Kathmandu,
                            either via bank transfer or cash, prior to the start of your trek.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col pb-18 w-full lg:flex-row gap-8 px-3 lg:px-[8rem]">
                <div className="lg:w-1/2 overflow-hidden rounded-2xl">
                    <Image
                        src="/images/payment/image3.png"
                        alt="Hilly region image"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="gloock text-xl lg:text-3xl pb-6 text-[#0B2839]">
                        Bank Account Information
                    </h2>
                    <ul className="jakarta text-[#495057] text-base lg:text-lg pl-8 space-y-1 list-disc">
                        <li>
                            Account Name:{" "}
                            <span className="text-[#2A78A6]">
                                Himalayan Vacation Treks & Expedition Pvt. Ltd.
                            </span>
                        </li>
                        <li>
                            Account Number:{" "}
                            <span className="text-[#2A78A6]">00200100514002000001</span>
                        </li>
                        <li>
                            SWIFT Code: <span className="text-[#2A78A6]">NEBLNPKA</span>
                        </li>
                        <li>
                            Bank:{" "}
                            <span className="text-[#2A78A6]">
                                Nepal Bank Limited, Dharmapath, Kathmandu, Nepal
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col w-full lg:flex-row-reverse pb-18 gap-8 px-3 lg:px-[8rem]">
                <div className="lg:w-1/2 overflow-hidden rounded-2xl">
                    <Image
                        src="/images/payment/image4.png"
                        alt="Hilly region image"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-2xl"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="gloock text-xl lg:text-3xl pb-6 text-[#0B2839]">
                        Payment Methods
                    </h2>
                    <ul className="jakarta text-base lg:text-lg text-[#495057] pl-8 space-y-1 list-disc">
                        <li>Preferred: Bank transfer.</li>
                        <li>
                            Alternative: Credit card (Visa or MasterCard)- a 4% additional fee
                            applies for bank charges.
                        </li>
                        <li>
                            Local Payments: Cash is required for on-the-spot expenses during
                            the trek.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="px-3 lg:px-[8rem]">
                <h2 className="gloock text-xl lg:text-3xl pb-6 text-[#0B2839]">
                    Refunds and Cancellation Policy
                </h2>
                {refundData.map((item, index) => (
                    <div key={index} className="flex flex-col pb-2">
                        <div className="flex gap-6">
                            <div className="rounded-full bg-[rgba(213,232,128,0.6)] h-12 w-12 flex items-center justify-center">
                                <MdPhoneInTalk className="flex-shrink-0 size-8 fill-[#C0DA49]" />
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-semibold pb-1 jakarta">
                                    {item.title}
                                </h3>
                                <p className="text-[0.9rem] lg:text-[1rem] jakarta max-w-xs lg:max-w-4xl">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full pt-2">
                <Image
                    src="/images/payment/NepalFlag.png"
                    alt="Nepal Flag"
                    height={400}
                    width={1000}
                    className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-contain"
                />
            </div>
        </div>
    );
};

export default page;