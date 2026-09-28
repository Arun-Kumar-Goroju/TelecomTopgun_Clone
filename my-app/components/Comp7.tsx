"use client";

export default function Comp7() {
  return (
    <section className="w-full bg-[#079bf0] px-4 py-8 md:py-10">

      <div className="mx-auto max-w-[800px] text-center">

        {/* Heading */}
        <h2 className="text-[21px] font-extrabold text-white md:text-[32px]">
          Have you bought a Prepaid Fibre voucher?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-[650px] text-[12px] leading-[14px] text-white md:text-[13px] md:leading-[16px]">
          Continue to our QR Portal, enter your 16-digit voucher number
          (from the till slip or SMS (WhatsApp or USSD))<br className="hidden md:block" />and redeem your Prepaid Fibre voucher and get back online.
        </p>
        <button type="button" className="mt-5 inline-flex items-center gap-3 rounded-[5px] bg-[#80e000] px-5 py-2.5 text-[15px] font-extrabold text-[#003e68] shadow-sm transition hover:bg-[#72d000]">
          <span>Load voucher</span>
          <span className="text-[18px] leading-none">→</span>
        </button>
      </div>
    </section>
  );
}