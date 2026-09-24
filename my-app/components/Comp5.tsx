import Image from "next/image";

export default function Comp5() {
  return (
    <div className="flex min-h-[30vh] w-full flex-col items-center justify-center gap-6 bg-blue-200 px-4 py-8">

<h1 className="text-center font-black leading-tight tracking-normal text-[#005288]">
        View Prepaid Vouchers below
      </h1>

      <div className="flex w-full max-w-[600px] flex-col gap-5 sm:flex-row">

        <button className="w-full rounded border border-[#005288] bg-white p-3 text-blue-500 hover:bg-blue-500 hover:text-white sm:flex-1">
          Compact fiber
        </button>

        <button className="w-full rounded border border-[#005288] bg-white p-3 text-blue-500 hover:bg-blue-500 hover:text-white sm:flex-1">
          Compact fiber
        </button>

      </div>

      <div className="w-full max-w-[1080px] rounded border bg-blue-500 p-3">

        <div className="flex items-start gap-4">

          <div className="shrink-0">
            <Image
              src="/icon.png"
              alt=""
              width={50}
              height={50}
            />
          </div>

          <div className="min-w-0">
            <p className="font-bold">
              Please note
            </p>

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