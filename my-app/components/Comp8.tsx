"use client";

import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What is Compact Fibre?",
    answer:
      "Compact Fibre is a prepaid fibre internet service that allows you to purchase internet vouchers for a specific period.",
  },
  {
    id: 2,
    question: "How do I purchase a voucher?",
    answer:
      "You can purchase a voucher through the available online purchase options and activate it on your fibre connection.",
  },
  {
    id: 3,
    question: "How long is the voucher valid?",
    answer:
      "The voucher validity depends on the package you choose. Each package displays its validity period.",
  },
  {
    id: 4,
    question: "Can I buy another voucher after my current voucher expires?",
    answer:
      "Yes. You can purchase another voucher when your current prepaid fibre voucher expires.",
  },
  {
    id: 5,
    question: "Where can I check my available vouchers?",
    answer:
      "You can check the available prepaid fibre vouchers in the voucher section of the website.",
  },
];

export default function Comp10() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className="w-full bg-white px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-[900px]">
        <h2 className="mb-8 text-center text-[28px] font-extrabold text-[#00558c] md:text-[34px]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {questions.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[6px] border border-[#d5dfe5] bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-[15px] font-bold text-[#00558c]">
                  {item.question}
                </span>

                <span className="text-[20px] font-bold text-[#00558c]">
                  {openQuestion === item.id ? "↑" : "↓"}
                </span>
              </button>

              {openQuestion === item.id && (
                <div className="border-t border-[#d5dfe5] bg-[#e8f7ff] px-5 py-4">
                  <p className="text-[14px] leading-6 text-[#004878]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}