"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    productLogo: "Frogfoot",
    product: "Frogfoot Unlimited LTE",
    speed: "30Mbps - 200Mbps",
    price: "R599",
  },
  {
    id: 2,
    productLogo: "MetroFibre",
    product: "Metro Fibre Unlimited",
    speed: "50Mbps - 500Mbps",
    price: "R749",
  },
  {
    id: 3,
    productLogo: "MetroFibre",
    product: "Metro Fibre Unlimited LTE",
    speed: "50Mbps - 500Mbps",
    price: "R699",
  },
];

export default function Comp10() {
  return (
    <section className="w-full bg-[#e8f7ff] px-4 py-12 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1370px]">
        <h2 className="mb-12 text-center text-[30px] font-extrabold tracking-[-1.5px] text-[#00558c] md:text-[38px]">
          Related products</h2>
        <div className="mx-auto grid w-fit grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div key={item.id}
              className="flex w-full max-w-[322px] min-h-[447px] flex-col overflow-hidden rounded-[7px] border border-[#d8d8d8] bg-white shadow-[0_2px_5px_rgba(0,0,0,0.18)]">
              <div className="flex justify-center pt-6">
                <div className="flex h-[102px] w-[102px] items-center justify-center rounded-full bg-[#e5f5ff]">
                  <Image src="/Circle.png" alt="Product" width={102} height={102} className="h-full w-full object-contain"/>
                </div>
              </div>

              <div className="flex h-[65px] items-center justify-center px-4 pt-3">
                <span
                  className={`text-[20px] font-bold ${
                    item.productLogo === "Frogfoot"
                      ? "text-[#00558c]"
                      : "text-[#222]"
                  }`}>{item.productLogo}</span></div>
              <div className="px-[15px]">
                <h3 className="mt-1 text-[19px] font-extrabold leading-[24px] text-[#0095e8]">{item.product}</h3>
                <p className="mt-1 text-[17px] font-bold text-[#00558c]">{item.speed}</p>
              </div>
              <div className="mx-[15px] mt-5 rounded-[8px] bg-[#e2f4fc] px-[10px] py-[10px]">
                <p className="text-[13px] font-normal text-[#00558c]">
                  From{" "}
                  <span className="text-[28px] font-extrabold leading-none">{item.price}</span>
                  <sup className="ml-[1px] text-[12px] font-bold">*</sup>
                </p>
                <p className="mt-[5px] text-[14px] font-extrabold text-[#00558c]">Once-off</p>
              </div>
              <div className="mx-[15px] mt-4 border-t border-[#d5dfe5]" />

              <div className="mt-auto flex gap-2 px-[15px] pb-[15px] pt-4">
                <button
                  type="button"
                  className="h-[46px] flex-1 rounded-[8px] border-[1.5px] border-[#0099f0] bg-white px-2 text-[15px] font-bold text-[#0099f0] transition hover:bg-[#f0faff]">
                  Call me back</button>
                <button type="button" className="h-[46px] flex-1 rounded-[8px] bg-[#91e200] px-2 text-[15px] font-bold text-[#00558c] shadow-[0_2px_5px_rgba(0,0,0,0.2)] transition hover:bg-[#82cf00]">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}