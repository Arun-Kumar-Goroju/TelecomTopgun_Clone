"use client";

import data from "../Data.json";

type Voucher = {
  id: number;
  title: string;
  days: string;
  speed: string;
  price: string;
};

export default function Comp6() {
  const voucherData: Voucher[] = data;

  return (
    <section className="w-full bg-[#e8f7ff] px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="mb-6 text-center text-[22px] font-extrabold text-[#00558c] sm:text-[26px] md:text-[30px]">
          Available Compact Fibre Uncapped internet vouchers</h1>

        <div className="mb-8 flex min-h-[70px] items-center justify-between gap-4 rounded-[6px] border border-[#008ff0] bg-white px-5 py-3">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-9 items-center justify-center">
              <div className="relative h-8 w-6">
                <div className="absolute left-1 top-0 h-5 w-4 rotate-[8deg] bg-[#7ee000]" />
  <div className="absolute left-2 top-4 h-3 w-2 bg-[#00a0ed]" />
                <div className="absolute bottom-0 left-2.5 h-2 w-1.5 bg-[#00558c]" />
              </div>
            </div>

            <div>
              <p className="text-[11px] font-extrabold text-[#00558c]">Prepaid Fibre Vouchers</p>

              <p className="max-w-[600px] text-[9px] leading-[13px] text-[#004c7c]">
                When your Prepaid Fibre runs out, head to our QR Portal to buy
                a new voucher.
                <br />
                (An Acceptable Usage Policy applies in case of abuse).
              </p>
            </div>
          </div>
          <button type="button" className="shrink-0 rounded-[5px] bg-[#079bf0] px-6 py-3 text-[10px] font-bold text-white shadow-sm transition hover:bg-[#0088d8]"> Buy voucher </button>
        </div>

        <div className="mx-auto grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {voucherData.map((voucher) => (
            <VoucherCard key={voucher.id} voucher={voucher} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VoucherCard({
  voucher,
}: {
  voucher: Voucher;
}) {
  return (
    <div className="flex h-[434px] w-full max-w-[322px] flex-col rounded-[8px] border border-[#d7e0e5] bg-white p-5 shadow-md">
      <div className="flex justify-center pt-2">
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#b9def5] bg-[#e7f6ff]">
          <svg
            width="28" height="28"
            viewBox="0 0 24 24" fill="none" stroke="#00558c" strokeWidth="1.6"
          >
            <rect x="7" y="8" width="10" height="8" rx="1" />
            <path d="M9 8V6h6v2" />
            <path d="M10 12h4" />
          </svg>
        </div>
      </div>

      <div className="mt-7 px-1">
        <h2 className="text-[18px] font-extrabold leading-5 text-[#0097ef]">
          {voucher.title}
        </h2>

        <p className="mt-2 text-[14px] font-extrabold italic leading-5 text-[#004878]">
          {voucher.days}
        </p>

        <p className="mt-3 text-[11px] text-gray-500">
          ↓ {voucher.speed}
        </p>
      </div>

      <div className="mt-7 rounded-[6px] bg-[#e4f5fe] px-4 py-4">
        <p className="text-[30px] font-black leading-8 text-[#00558c]">
          R{voucher.price}
        </p>

        <p className="mt-2 text-[10px] font-bold text-[#00558c]">
          Once-off
        </p>
      </div>

      <button
        type="button"
        className="mt-auto w-full rounded-[6px] bg-[#80e000] py-4 text-[14px] font-extrabold text-[#003e68] shadow-sm transition hover:bg-[#72d000]"
      >
        Buy voucher
      </button>
    </div>
  );
}