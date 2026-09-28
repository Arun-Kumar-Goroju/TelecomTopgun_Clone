"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import VoucherCard from "@/components/VoucherCard";
import Footer from "@/components/Footer";
import vouchers from "@/data/vouchers.json";

export default function PrepaidFibrePage() {
  const [selectedFibre, setSelectedFibre] = useState("20/10");

const filteredVouchers = vouchers.vouchers.filter(
  (voucher) => voucher.type === selectedFibre
);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#e7f6ff]">

        {/* Hero Section */}
        <section className="min-h-[300px] bg-[#0799ed] md:min-h-[100px]">
          <div className="mx-auto max-w-[1200px] px-4 md:flex md:items-end md:justify-between">

            {/* Hero Text */}
            <div className="py-6 md:self-center md:py-0">
              <h1 className="whitespace-nowrap text-3xl font-bold text-white md:text-5xl">
                <span className="text-[#8bea00]">Prepaid Fibre</span> Vouchers
              </h1>

              <p className="mt-2 max-w-sm text-sm text-white">
                Get your recharge voucher in seconds with fast checkout and
                payment.
              </p>
            </div>

            {/* Hero Image */}
            <div className="flex md:w-[90%]">
              <img
                src="/images/Girl.png"
                alt="Prepaid Fibre"
                className="block w-full md:w-[125%] md:max-w-none"
              />
            </div>

          </div>
        </section>

        {/* Voucher Selection */}
        <section className="px-4 py-8">
          <div className="h-6"></div>

          <div className="mx-auto max-w-[1000px] text-center">

            <h2 className="text-2xl font-bold text-[#005b96] md:text-3xl">
              View Prepaid Vouchers below
            </h2>

            {/* Space before buttons */}
            <div className="h-9"></div>

            {/* Voucher Buttons */}
            <div className="flex justify-start gap-2 overflow-x-auto pb-2 sm:justify-center">

              {/* 20/10 Button */}
              <button
                onClick={() => setSelectedFibre("20/10")}
                className={`h-10 w-[260px] shrink-0 cursor-pointer whitespace-nowrap overflow-visible rounded-md border border-[#0799ed] text-center text-sm transition duration-200 hover:shadow-md ${
                  selectedFibre === "20/10"
                    ? "bg-[#0799ed] text-white hover:bg-[#078bd8]"
                    : "bg-white text-[#0799ed] hover:bg-[#e8f7ff]"
                }`}
              >
                Compact Fibre (20/10Mbps)
              </button>

              {/* 50/25 Button */}
              <button
                onClick={() => setSelectedFibre("50/25")}
                className={`h-10 w-[260px] shrink-0 cursor-pointer whitespace-nowrap overflow-visible rounded-md border border-[#0799ed] text-center text-sm transition duration-200 hover:shadow-md ${
                  selectedFibre === "50/25"
                    ? "bg-[#0799ed] text-white hover:bg-[#078bd8]"
                    : "bg-white text-[#0799ed] hover:bg-[#e8f7ff]"
                }`}
              >
                Compact Fibre (50/25Mbps)
              </button>

              {/* Express Button */}
              <button
                onClick={() => setSelectedFibre("express")}
                className={`h-10 w-[260px] shrink-0 cursor-pointer whitespace-nowrap overflow-visible rounded-md border border-[#0799ed] text-center text-sm transition duration-200 hover:shadow-md ${
                  selectedFibre === "express"
                    ? "bg-[#0799ed] text-white hover:bg-[#078bd8]"
                    : "bg-white text-[#0799ed] hover:bg-[#e8f7ff]"
                }`}
              >
                Express Fibre
              </button>

            </div>

          </div>

          <div className="h-4"></div>
        </section>

        {/* Please Note */}
        <section className="mb-10 px-4">
          <div className="mx-auto max-w-[1150px]">

            <div className="h-[105px] rounded-md bg-[#0799ed] px-6 py-5 text-white">

              <div className="flex items-start gap-5">

                {/* Exclamation Icon */}
                <img
                  src="/images/exclamation.svg"
                  alt="Please note"
                  className="mt-1 h-[55px] w-[55px] shrink-0 object-contain"
                />

                {/* Heading + Text */}
                <div>

                  {/* Heading */}
                  <h3 className="text-lg font-bold leading-tight">
                    Please note
                  </h3>

                  {/* Note Text */}
                  <div className="mt-2">

                    <p className="text-sm leading-tight">
                      Customers on 20/10 Mbps Prepaid Compact Fibre can purchase
                      all vouchers for 20/10 Mbps or 50/25 Mbps.
                    </p>

                    <p className="mt-1 text-sm leading-tight">
                      The 3-day, 7-day, and 14-day recharge bundles will be
                      discontinued effective 1 June 2026.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Available Vouchers */}
        <section className="px-4 pb-8">
          <div className="mx-auto max-w-[1150px]">

            <h2 className="text-center text-xl font-bold text-[#005b96] md:text-2xl">
              Available Compact Fibre Uncapped internet vouchers
            </h2>

            <div className="h-8"></div>

           {/* Login Banner */}
<div className="min-h-[105px] rounded-md border-2 border-[#0799ed] bg-white px-4 py-4 md:px-6 md:py-5">

  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

    {/* Icon + Heading + Text */}
    <div className="flex items-start gap-4">

      {/* Exclamation Icon */}
      <img
        src="/images/exclamation.svg"
        alt="Prepaid Fibre Vouchers"
        className="mt-1 h-[45px] w-[45px] shrink-0 object-contain md:h-[55px] md:w-[55px]"
      />

      {/* Heading + Text */}
      <div>

        {/* Heading */}
        <h3 className="text-lg font-bold leading-tight text-[#005b96]">
          Prepaid Fibre Vouchers
        </h3>

        {/* Banner Text */}
        <div className="mt-2">

          <p className="text-sm leading-tight text-[#005b96]">
            Log into Openserve Self-Service Portal to buy the Top-up
            Vouchers once your Prepaid fibre has run out.
          </p>

          <p className="mt-1 text-sm leading-tight text-[#005b96]">
            (An Acceptable Usage Policy applies in cases of abuse.)
          </p>

        </div>

      </div>

    </div>

    {/* Login Button */}
    <button
      className="w-full cursor-pointer rounded-md bg-[#0799ed] px-8 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#078bd8] hover:shadow-md md:w-auto"
    >
      Log in
    </button>

  </div>

</div>

          </div>
        </section>

        <div className="h-6"></div>

        {/* Voucher Cards */}
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-[850px]">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {/* Show vouchers based on selected category */}
              {filteredVouchers.map((voucher) => (
                <VoucherCard
                  key={voucher.id}
                  price={voucher.price}
                  validity={voucher.validity}
                  speed={voucher.speed}
                  downloadSpeed={voucher.downloadSpeed}
                />
              ))}

            </div>

          </div>
        </section>

        {/* Footer */}
        <Footer />

      </main>
    </>
  );
}