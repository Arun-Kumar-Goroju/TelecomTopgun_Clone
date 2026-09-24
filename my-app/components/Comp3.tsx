"use client";

export default function Comp3() {
  return (
    <section className="min-h-screen w-full bg-[#f3f4f5] px-4 py-10 md:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-[1440px]">

        <h1 className="mb-12 text-center text-3xl font-extrabold tracking-tight text-[#00548d] md:text-[42px]">
          View Prepaid options below
        </h1>

        <div className="mb-11 flex items-start gap-5 rounded-xl bg-[#079bf0] px-5 py-6 text-white md:items-center md:px-7">
          <div className="flex-shrink-0">
            <div className="relative h-11 w-8">
              <div className="absolute left-1 top-0 h-6 w-5 rotate-[8deg] bg-[#7ee000]" />
              <div className="absolute bottom-0 left-3 h-2 w-2 rounded-full bg-[#00548d]" />
            </div>
          </div>

          <div className="min-w-0">
            <p className="mb-1 text-base font-extrabold">
              Please note
            </p>

            <p className="text-sm font-semibold leading-6">
              All Consumer customers who are within the Openserve Prepaid
              Compact-Fibre network coverage qualify. The 20/10Mbps is only
              available in selected areas with the 50/25Mbps being available
              in all Openserve fibre areas.
            </p>
          </div>
        </div>

        <Pack
          title="Compact Starter pack 1"
          download="20Mbps"
          upload="10Mbps"
        />

        <Pack
          title="Compact Starter pack 2"
          download="50Mbps"
          upload="25Mbps"
        />

      </div>
    </section>
  );
}

function Pack({
  title,
  download,
  upload,
}: {
  title: string;
  download: string;
  upload: string;
}) {
  return (
    <div className="mb-10 w-full rounded-xl border border-gray-300 bg-white px-5 py-8 shadow-md md:px-10 md:py-10">
      <div className="grid gap-8 lg:grid-cols-[42%_58%]">

        <div className="border-gray-200 lg:border-r lg:pr-12">

          <h2 className="text-3xl font-extrabold leading-tight text-[#079bf0] md:text-[40px]">
            {title}
          </h2>

          <p className="mt-8 max-w-[520px] text-xl leading-6 text-[#003e70]">
            Start up bundle to be used to install the fiber access line.
          </p>

          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <span className="text-4xl font-light text-[#00609c]">↓</span>
              <p className="text-base font-bold text-[#004b81]">
                {download} download
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-light text-[#00609c]">↑</span>
              <p className="text-base font-bold text-[#004b81]">
                {upload} upload
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <div className="text-[54px] font-black leading-none text-[#00558e]">
                R0
              </div>

              <p className="mt-1 font-extrabold text-[#00558e]">
                Once-off
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <span className="text-3xl font-medium text-gray-400 line-through">
                R199
              </span>

              <span className="bg-[#fff0e7] px-2 py-1 text-lg font-black text-[#ff5a00]">
                100% OFF
              </span>
            </div>

          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">

            <button
              type="button"
              className="w-full rounded-lg bg-[#7fe000] px-7 py-4 text-base font-extrabold text-[#003f71] shadow-md transition hover:bg-[#70ca00] sm:min-w-[195px]"
            >
              View starter pack
            </button>

            <button
              type="button"
              className="w-full rounded-lg border-2 border-[#079bf0] bg-white px-7 py-4 text-base font-extrabold text-[#079bf0] transition hover:bg-[#eff9ff] sm:min-w-[160px]"
            >
              Call me back
            </button>

          </div>

        </div>

        <div className="lg:pl-2">

          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

            <InfoCard
              title="Fiber access"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M8 18h8" />
                  <path d="M9 18v-4h6v4" />
                  <circle cx="12" cy="7" r="2" />
                  <path d="M12 9v5" />
                  <path d="M8 6l2 2" />
                  <path d="M16 6l-2 2" />
                  <circle cx="7" cy="5" r="1.5" />
                  <circle cx="17" cy="5" r="1.5" />
                </svg>
              }
            >
              <p className="text-center text-base leading-5 text-[#002e52]">
                Prepaid compact
                <br />
                Fiber
              </p>

              <div className="mt-3 text-sm font-bold text-[#004f85]">
                <p>↓ {download} download</p>
                <p>↑ {upload} upload</p>
              </div>
            </InfoCard>

            <Plus />

            <InfoCard
              title="14 days of data"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3c3 3 4.5 6 4.5 9S15 18 12 21" />
                  <path d="M12 3c-3 3-4.5 6-4.5 9S9 18 12 21" />
                </svg>
              }
            >
              <p className="text-center text-base leading-5 text-[#002e52]">
                Uncapped openserve
                <br />
                internet
              </p>
            </InfoCard>

            <Plus />

            <InfoCard
              title="Installation"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M14 6a4 4 0 0 0-5 5l-5 5 4 4 5-5a4 4 0 0 0 5-5l-3 3-4-1-1-4 4-2Z" />
                </svg>
              }
            >
              <p className="text-center text-base text-[#002e52]">
                Included
              </p>
            </InfoCard>

          </div>

          <div className="mt-8">

            <div className="flex items-start gap-3 text-lg font-bold text-[#004b81]">
              <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#aee3ff] text-xs text-[#079bf0]">
                ✓
              </div>

              <span>
                14 days fibre usage + Installation
              </span>
            </div>

            <p className="mt-4 text-sm font-medium text-[#003e70]">
              *Once the 14 days&apos;s data runs out you need to top up
              with a 30 day voucher.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[255px] w-full flex-1 flex-col items-center rounded-xl bg-[#e4f5ff] px-4 py-3 md:max-w-[205px]">

      <h3 className="text-center text-xl font-extrabold text-[#002d50]">
        {title}
      </h3>

      <div className="mt-2 flex h-[100px] w-[100px] flex-shrink-0 items-center justify-center rounded-full border-2 border-[#cbe6f5] bg-white text-[#00609c] shadow-sm">
        {icon}
      </div>

      <div className="mt-3 flex flex-1 flex-col items-center justify-center">
        {children}
      </div>

    </div>
  );
}

function Plus() {
  return (
    <div className="flex flex-shrink-0 items-center justify-center text-3xl font-black text-[#00558e]">
      +
    </div>
  );
}