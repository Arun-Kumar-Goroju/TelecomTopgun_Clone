export default function Comp8() {
  return (
    <section className="w-full bg-white px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1370px]">

        {/* Section heading */}
        <h2 className="mb-6 text-[24px] font-extrabold leading-tight text-[#005288] sm:text-[26px] lg:text-[28px]">
          Speeds that fit your lifestyle
        </h2>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {/* Card 1 */}
          <div className="flex min-h-[287px] w-full flex-col gap-4 rounded-[8px] bg-[#EAF6FC] p-6">

            {/* Upper point */}
            <div className="flex h-auto min-h-[147px] w-full flex-col gap-4">

              {/* Icon */}
              <div className="flex h-8 w-8 items-center justify-center">
                <img
                  src="/icon1.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-sm font-bold leading-tight text-[#002E4D]">
                  Everyday browsing
                </h3>

                <p className="mt-2 text-[11px] leading-[1.4] text-[#005288]">
                  We recommend 25Mbps or less download speed
                </p>
              </div>
            </div>

            {/* Lower points */}
            <div className="flex w-full flex-col gap-2">

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Perfect for internet surfing
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Sending and receiving emails
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Browsing social media
                </p>
              </div>

            </div>
          </div>


          {/* Card 2 */}
          <div className="flex min-h-[287px] w-full flex-col gap-4 rounded-[8px] bg-[#EAF6FC] p-6">

            {/* Upper point */}
            <div className="flex h-auto min-h-[147px] w-full flex-col gap-4">

              {/* Icon */}
              <div className="flex h-8 w-8 items-center justify-center">
                <img
                  src="/icon2.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-sm font-bold leading-tight text-[#002E4D]">
                  Entertainment and gaming
                </h3>

                <p className="mt-2 text-[11px] leading-[1.4] text-[#005288]">
                  We recommend more than 25Mbps download speed
                </p>
              </div>
            </div>

            {/* Lower points */}
            <div className="flex w-full flex-col gap-2">

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Great for gaming
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Streaming movies and TV
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Streaming videos
                </p>
              </div>

            </div>
          </div>


          {/* Card 3 */}
          <div className="flex min-h-[287px] w-full flex-col gap-4 rounded-[8px] bg-[#EAF6FC] p-6">

            {/* Upper point */}
            <div className="flex h-auto min-h-[147px] w-full flex-col gap-4">

              {/* Icon */}
              <div className="flex h-8 w-8 items-center justify-center">
                <img
                  src="/icon3.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-sm font-bold leading-tight text-[#002E4D]">
                  Work and video calls
                </h3>

                <p className="mt-2 text-[11px] leading-[1.4] text-[#005288]">
                  We recommend an upload speed of above 10Mbps
                </p>
              </div>
            </div>

            {/* Lower points */}
            <div className="flex w-full flex-col gap-2">

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Stable connection
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Good for online meetings
                </p>
              </div>

              <div className="flex items-start gap-2">
                <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] text-[#009FE3]">
                  ✓
                </span>

                <p className="text-[11px] leading-[1.3] text-[#005288]">
                  Remote work and productivity
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}