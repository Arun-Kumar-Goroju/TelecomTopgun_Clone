"use client";

import Image from "next/image";
import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is Telkom Prepaid Fibre??",
    answer:
      "Compact Fibre is a prepaid fibre internet service that allows you to purchase internet vouchers for a specific period.",
  },
  {
    id: 2,
    question: "Who qualifies for the Telkom Prepaid Fibre over Openserve network?",
    answer:
      "You can purchase a voucher through the available online purchase options and activate it on your fibre connection.",
  },
  {
    id: 3,
    question: "How do I know if there is Openserve Fibre network coverage in my area?",
    answer:
      "The voucher validity depends on the package you choose. Each package displays its validity period.",
  },{
   id: 4,
    question: "How is Telkom Prepaid Fibre different from Post-paid Fibre?",
    answer:
      "The voucher validity depends on the package you choose. Each package displays its validity period.",
  },
];

export default function Comp10() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1370px]">
        <h2 className="mb-8 text-center text-[28px] font-extrabold text-[#00558c] md:text-[34px]">
Want to know a little more?        </h2>

        <div className="space-y-3">
          {questions.map((item) => (
            <div
              key={item.id}
              className="w-full overflow-hidden rounded-[6px] border border-[#d5dfe5] bg-[#DADEE0] shadow-sm"
            >
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                className="flex h-[64px] w-full items-center justify-between gap-[25px] px-5 py-2 md:px-6"
              >
                <span className="text-left text-[15px] font-bold text-[#002E4D] md:text-[16px]">{item.question}</span>

                <span className="flex shrink-0 items-center">
                  <Image  src="/Vector1.png" alt="Toggle"  width={20}  height={20} className={openQuestion === item.id ? "rotate-180" : ""}/></span></button>

              {openQuestion === item.id && (
                <div className="border-t border-[#d5dfe5] bg-[#e8f7ff] px-5 py-4 md:px-6">
                  <p className="text-[14px] leading-6 text-[#004878]">
                    {item.answer}
                  </p></div>
              )}
            </div> ))}</div>
        <div className="mt-10 flex justify-center gap-5 ">
          <button className="rounded border bg-white-500 p-3 text-blue-500 font-bold md:w-30 hover:shadow-md">
            More FAQ's</button>
          <button className="rounded border  p-3 text-blue-500 font-bold bg-[#91E200] hover:shadow-md md:w-30">
            T & C's
          </button>
        </div>
      </div>
    </section>
  );
}