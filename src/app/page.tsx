import VoucherCard from "@/components/VoucherCard";
export default function PrepaidFibrePage() {
  return (
    <main className="min-h-screen bg-[#e7f6ff]">

      <section className="bg-[#0799ed]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">

          <div>
            <h1 className="text-4xl font-bold text-white">
              <span className="text-[#8bea00]">Prepaid Fibre</span>{" "}
              Vouchers
            </h1>

            <p className="mt-3 max-w-md text-sm text-white">
              Get your recharge voucher in seconds with fast checkout and
              payment.
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-[45%]">
            <img
              src="/images/Girl.png"
              alt="Prepaid Fibre"
              className="w-full"
            />
          </div>

        </div>
      </section>


      <section className="bg-[#e7f6ff] py-8">
        <div className="mx-auto max-w-[1000px] text-center">

          <h2 className="text-3xl font-bold text-[#005b96]">
            View Prepaid Vouchers below
          </h2>

          <div className="mt-6 flex justify-center gap-2">

            <button className="rounded-md border border-[#0799ed] bg-[#0799ed] px-4 py-2 text-sm text-white">
              Compact Fibre (20/10Mbps)
            </button>

            <button className="rounded-md border border-[#0799ed] bg-white px-4 py-2 text-sm text-[#0799ed]">
              Compact Fibre (50/25Mbps)
            </button>

            <button className="rounded-md border border-[#0799ed] bg-white px-4 py-2 text-sm text-[#0799ed]">
              Express Fibre
            </button>

          </div>

        </div>
      </section>


      <section className="bg-[#e7f6ff] px-6 pb-8">
        <div className="mx-auto max-w-[1000px]">

          <div className="flex items-start gap-4 rounded-md bg-[#0799ed] px-6 py-4 text-white">

            <img
              src="/images/exclamation.svg"
              alt="Please note"
              className="mt-1 h-7 w-7 shrink-0"
            />

            <div>
              <h3 className="font-bold">
                Please note
              </h3>

              <p className="mt-1 text-sm">
                Customers on 20/10 Mbps Prepaid Compact Fibre can purchase all
                vouchers for 20/10 Mbps or 50/25 Mbps.
              </p>

              <p className="text-sm">
                The 3-day, 7-day, and 14-day recharge bundles will be
                discontinued effective 1 June 2026.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="bg-[#e7f6ff] px-6 pb-8">
        <div className="mx-auto max-w-[1000px]">

          <h2 className="text-center text-2xl font-bold text-[#005b96]">
            Available Compact Fibre Uncapped internet vouchers
          </h2>


<div className="mt-6 flex items-center justify-between rounded-md border-2 border-[#0799ed] bg-white px-6 py-4">

  {/* Left Side */}
  <div className="flex items-center gap-4">


    <img
      src="/images/exclamation.svg"
      alt="Prepaid Fibre Vouchers"
      className="h-8 w-8 shrink-0"
    />


    <div>
      <h3 className="font-bold text-[#005b96]">
        Prepaid Fibre Vouchers
      </h3>

      <p className="mt-1 text-sm text-[#005b96]">
        Log into Openserve Self-Service Portal to buy the Top-up
        Vouchers once your Prepaid fibre has run out.
      </p>

      <p className="text-sm text-[#005b96]">
        (An Acceptable Usage Policy applies in cases of abuse.)
      </p>
    </div>

  </div>


  <button className="rounded-md bg-[#0799ed] px-8 py-2 text-sm font-semibold text-white">
    Log in
  </button>

</div>

        </div>
      </section>


<section className="bg-[#e7f6ff] px-6 pb-12">
  <div className="mx-auto max-w-[1000px]">

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

      <VoucherCard
  price="R54"
  validity="3 Days"
  speed="20/10 Mbps"
  downloadSpeed="20Mbps"
/>

<VoucherCard
  price="R79"
  validity="3 Days"
  speed="20/10 Mbps"
  downloadSpeed="25Mbps"
/>

<VoucherCard
  price="R110"
  validity="3 Days"
  speed="20/10 Mbps"
  downloadSpeed="50Mbps"
/>

    </div>

  </div>
</section>

    </main>
  );
}