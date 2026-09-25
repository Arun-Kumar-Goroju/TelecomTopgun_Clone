"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import VoucherCard from "@/components/VoucherCard";
import Footer from "@/components/Footer";
import vouchers from "@/data/vouchers.json";

export default function PrepaidFibrePage() {
  const [selectedFibre, setSelectedFibre] = useState("20/10");

  const filteredVouchers = vouchers.filter(
    (voucher) => voucher.type === selectedFibre
  );

  return (
    <>
    <Navbar/>
    <main className="min-h-screen bg-[#e7f6ff]">

      {/* Hero Section */}
      <section className="bg-[#0799ed]">
        <div className="mx-auto max-w-[1200px] px-4 md:flex md:items-end md:justify-between">

          {/* Hero Text */}
          <div className="py-6 md:self-center md:py-0">
            <h1 className="text-2xl font-bold text-white md:text-4xl">
              <span className="text-[#8bea00]">Prepaid Fibre</span> Vouchers
            </h1>

            <p className="mt-2 max-w-sm text-sm text-white">
              Get your recharge voucher in seconds with fast checkout and
              payment.
            </p>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:w-[50%]">
            <img
              src="/images/Girl.png"
              alt="Prepaid Fibre"
              className="block w-full md:w-[110%] md:max-w-none"
            />
          </div>

        </div>
      </section>

      {/* Voucher Selection */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-[1000px] text-center">

          <h2 className="text-2xl font-bold text-[#005b96] md:text-3xl">
            View Prepaid Vouchers below
          </h2>

          {/* Voucher Buttons */}
          <div className="mt-5 flex flex-nowrap justify-center gap-1 overflow-x-auto">

            {/* 20/10 Button */}
            <button
              onClick={() => setSelectedFibre("20/10")}
              className={`shrink-0 rounded-md border border-[#0799ed] px-2 py-2 text-[9px] sm:px-4 sm:text-sm ${
                selectedFibre === "20/10"
                  ? "bg-[#0799ed] text-white"
                  : "bg-white text-[#0799ed]"
              }`}
            >
              Compact Fibre (20/10Mbps)
            </button>

            {/* 50/25 Button */}
            <button
              onClick={() => setSelectedFibre("50/25")}
              className={`shrink-0 rounded-md border border-[#0799ed] px-2 py-2 text-[9px] sm:px-4 sm:text-sm ${
                selectedFibre === "50/25"
                  ? "bg-[#0799ed] text-white"
                  : "bg-white text-[#0799ed]"
              }`}
            >
              Compact Fibre (50/25Mbps)
            </button>

            {/* Express Button */}
            <button
              onClick={() => setSelectedFibre("express")}
              className={`shrink-0 rounded-md border border-[#0799ed] px-2 py-2 text-[9px] sm:px-4 sm:text-sm ${
                selectedFibre === "express"
                  ? "bg-[#0799ed] text-white"
                  : "bg-white text-[#0799ed]"
              }`}
            >
              Express Fibre
            </button>

          </div>

        </div>
      </section>

      {/* Please Note */}
      <section className="px-4 pb-6">
        <div className="mx-auto max-w-[1000px]">

          <div className="rounded-md bg-[#0799ed] p-4 text-white">

            {/* Please Note Heading */}
            <div className="flex items-center gap-3">

              <img
                src="/images/exclamation.svg"
                alt="Please note"
                className="h-auto w-7"
              />

              <h3 className="font-bold">
                Please note
              </h3>

            </div>

            {/* Note Text */}
            <div className="mt-3">

              <p className="text-sm">
                Customers on 20/10 Mbps Prepaid Compact Fibre can purchase all
                vouchers for 20/10 Mbps or 50/25 Mbps.
              </p>

              <p className="mt-1 text-sm">
                The 3-day, 7-day, and 14-day recharge bundles will be
                discontinued effective 1 June 2026.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Available Vouchers */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-[1000px]">

          <h2 className="text-center text-xl font-bold text-[#005b96] md:text-2xl">
            Available Compact Fibre Uncapped internet vouchers
          </h2>

          {/* Login Banner */}
          <div className="mt-5 rounded-md border-2 border-[#0799ed] bg-white p-3 md:flex md:items-center md:justify-between">

            <div>

              {/* Heading */}
              <div className="flex items-center gap-3">

                <img
                  src="/images/exclamation.svg"
                  alt="Prepaid Fibre Vouchers"
                  className="h-auto w-7"
                />

                <h3 className="font-bold text-[#005b96]">
                  Prepaid Fibre Vouchers
                </h3>

              </div>

              {/* Banner Text */}
              <div className="mt-3">

                <p className="text-sm text-[#005b96]">
                  Log into Openserve Self-Service Portal to buy the Top-up
                  Vouchers once your Prepaid fibre has run out.
                </p>

                <p className="text-sm text-[#005b96]">
                  (An Acceptable Usage Policy applies in cases of abuse.)
                </p>

              </div>

            </div>

            {/* Login Button */}
            <button className="mt-3 w-full rounded-md bg-[#0799ed] px-8 py-2 text-sm font-semibold text-white md:mt-0 md:w-auto">
              Log in
            </button>

          </div>

        </div>
      </section>

      {/* Voucher Cards */}
      <section className="px-4 pb-12">
        <div className="mx-auto max-w-[1000px]">

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