import Image from "next/image";

export default function Comp5() {
  return (
    <div className="flex min-h-[30vh] w-full flex-col items-center justify-center gap-6 bg-blue-200 px-4 ">

      <h1 className="degular-display text-center text-4xl font-[800] leading-tight tracking-normal text-[#005288] mt-10 sm:mt-10 md:mt-12">
        View Prepaid Vouchers below</h1>
      <div className="flex w-full max-w-[600px] flex-col gap-5 sm:flex-row">

        <button className="w-full rounded-md border border-[#005288] bg-blue-500 p-2 font-bold hover:shadow-md text-blue sm:grid-cols-1">Compact Fibre (20/10Mbps)</button>

        <button className="w-full rounded-md border border-[#005288] bg-white p-2 font-bold text-blue-500 hover:shadow-md sm:grid-cols-1">Compact Fibre (50/25Mbps)</button>
      </div>
      <div className="w-full max-w-[1080px] rounded border bg-blue-500 p-3 ">

        <div className="flex items-start gap-4 md:mb-0">
          <div className="shrink-0">
            <Image src="/icon.png" alt="" width={50} height={50} />
          </div>

          <div className="min-w-0">
            <p className="font-bold">Please note</p>

            <p className="text-sm leading-5">
              Customers on 20/10Mbps Prepaid Compact Fibre can purchase all
              vouchers (20/10Mbps vouchers or 50/25Mbps vouchers).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}