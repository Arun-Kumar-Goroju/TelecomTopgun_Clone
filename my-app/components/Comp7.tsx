export default function Comp7() {
  return (
    <section className="w-full bg-[#F5F5F5] px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1370px]">

        {/* Heading */}
        <div className="mb-7">
          <h2 className="text-[26px] font-extrabold leading-tight text-[#005288] lg:text-[28px]">
            Our service providers
          </h2>

          <p className="mt-2 text-[13px] leading-[1.5] text-[#005288]">
            You can choose from any of the service providers, depending on
            availability in your area.
          </p>
        </div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Card 1 */}
          <div className="flex min-h-[321.6px] w-full flex-col overflow-hidden rounded-lg">
            <div className="h-[140px] w-full shrink-0 bg-white">
              <img
                src="/card1.png"
                alt="Openserve"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex min-h-[181.6px] flex-1 flex-col bg-[#EAF6FC] p-4">
              <h3 className="text-base font-bold text-[#002E4D]">
                Openserve
              </h3>

              <p className="mt-3 text-xs leading-[1.4] text-[#005288]">
                Trust Openserve to deliver stable, uncapped fibre through
                South Africa’s largest and most established network.
              </p>

              {/* View details */}
              <a
                href="#"
                className="mt-auto inline-flex w-fit items-center gap-1 text-xs font-semibold text-[#00AEEF] underline decoration-[#00AEEF] underline-offset-4"
              >
                <span>View details</span>
                <span className="text-[15px] leading-none">→</span>
              </a>
            </div>
          </div>


          {/* Card 2 */}
          <div className="flex min-h-[321.6px] w-full flex-col overflow-hidden rounded-lg">
            <div className="h-[140px] w-full shrink-0 bg-white">
              <img
                src="/card2.png"
                alt="Frogfoot"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex min-h-[181.6px] flex-1 flex-col bg-[#EAF6FC] p-4">
              <h3 className="text-base font-bold text-[#002E4D]">
                Frogfoot
              </h3>

              <p className="mt-3 text-xs leading-[1.4] text-[#005288]">
                Choose Frogfoot for reliable open-access fibre that lets your
                home work, learn, stream, and play.
              </p>

              {/* View details */}
              <a
                href="#"
                className="mt-auto inline-flex w-fit items-center gap-1 text-xs font-semibold text-[#00AEEF] underline decoration-[#00AEEF] underline-offset-4"
              >
                <span>View details</span>
                <span className="text-[15px] leading-none">→</span>
              </a>
            </div>
          </div>


          {/* Card 3 */}
          <div className="flex min-h-[321.6px] w-full flex-col overflow-hidden rounded-lg">
            <div className="h-[140px] w-full shrink-0 bg-white">
              <img
                src="/card3.png"
                alt="Vumatel"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex min-h-[181.6px] flex-1 flex-col bg-[#EAF6FC] p-4">
              <h3 className="text-base font-bold text-[#002E4D]">
                Vumatel
              </h3>

              <p className="mt-3 text-xs leading-[1.4] text-[#005288]">
                Experience Vumatel’s fast, accessible fibre that keeps you
                connected to knowledge, entertainment, and more.
              </p>

              {/* View details */}
              <a
                href="#"
                className="mt-auto inline-flex w-fit items-center gap-1 text-xs font-semibold text-[#00AEEF] underline decoration-[#00AEEF] underline-offset-4"
              >
                <span>View details</span>
                <span className="text-[15px] leading-none">→</span>
              </a>
            </div>
          </div>


          {/* Card 4 */}
          <div className="flex min-h-[321.6px] w-full flex-col overflow-hidden rounded-lg">
            <div className="h-[140px] w-full shrink-0 bg-white">
              <img
                src="/card4.png"
                alt="MetroFibre"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex min-h-[181.6px] flex-1 flex-col bg-[#EAF6FC] p-4">
              <h3 className="text-base font-bold text-[#002E4D]">
                MetroFibre
              </h3>

              <p className="mt-3 text-xs leading-[1.4] text-[#005288]">
                Enjoy MetroFibre’s enterprise-grade network built for
                high-performance, low-latency connectivity.
              </p>

              {/* View details */}
              <a
                href="#"
                className="mt-auto inline-flex w-fit items-center gap-1 text-xs font-semibold text-[#00AEEF] underline decoration-[#00AEEF] underline-offset-4"
              >
                <span>View details</span>
                <span className="text-[15px] leading-none">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}