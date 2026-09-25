export default function Comp9() {
  return (
    <section className="w-full bg-[#EAF7FF] px-4 py-10 sm:px-6 md:px-8 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1014px]">

        {/* HEADING  */}
        <div className="mb-6 text-center">
          <h2 className="text-[24px] font-extrabold leading-[1.15] text-[#005288] sm:text-[26px] lg:text-[28px]">
            Choose a plan that fits your needs
          </h2>
        </div>

        {/*  TOP ROW  */}
        <div className="mb-6 flex w-full items-center justify-between px-1">
          <p className="text-[12px] font-medium leading-none text-[#005288] sm:text-[13px]">
            Showing 3 items
          </p>

          <a
            href="#"
            className="text-[12px] font-medium leading-none text-[#009FE3] underline underline-offset-2 sm:text-[13px]"
          >
            View all →
          </a>
        </div>

        {/* PRODUCT CARDS*/}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          
          {/* CARD 1 */}
          

          <div className="flex h-[442px] w-full min-w-0 flex-col rounded-[8px] border border-[#D9E5EB] bg-white p-4">

            {/* TOP CONTENT */}
            <div className="flex w-full flex-col">

              {/* TOP ICON */}
              <div className="flex h-[56px] w-full items-center justify-center">
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#E5F5FF]">
                  <img
                    src="/Circleicon.png"
                    alt=""
                    className="h-[24px] w-[24px] object-contain"
                  />
                </div>
              </div>

              {/* OPEN SERVE LOGO */}
              <div className="mt-[20px] flex h-[28px] w-full items-center justify-center">
                <img
                  src="/card1.png"
                  alt="Openserve"
                  className="h-[28px] w-auto max-w-[110px] object-contain"
                />
              </div>

              {/* TITLE + SUBTITLE */}
              <div className="mt-[38px] flex w-full flex-col gap-[6px]">
                <h3 className="text-[17px] font-bold leading-[20px] text-[#005288] sm:text-[18px]">
                  Telkom Core Lite Fibre
                </h3>

                <p className="text-[13px] font-bold leading-[16px] text-[#005288] sm:text-[14px]">
                  50/25Mbps
                </p>
              </div>
            </div>

            {/* PRICE */}
            <div className="mt-[40px] flex h-[64px] w-full flex-col justify-center rounded-[4px] bg-[#EAF6FC] px-4">
              <p className="text-[27px] font-extrabold leading-[28px] text-[#005288]">
                R581
              </p>

              <p className="mt-[2px] text-[9px] font-bold leading-[11px] text-[#005288]">
                PM x 12
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-auto flex h-[44px] w-full gap-4">

              <button
                type="button"
                className="h-[44px] min-w-0 flex-1 rounded-[4px] border border-[#009FE3] bg-white px-2 text-[12px] font-bold text-[#005288] transition hover:bg-[#EAF6FC]"
              >
                Call me back
              </button>

              <button
                type="button"
                className="h-[44px] min-w-0 flex-1 rounded-[4px] bg-[#8BE000] px-2 text-[12px] font-bold text-[#002E4D] transition hover:bg-[#7FD000]"
              >
                View details
              </button>

            </div>
          </div>


          
          {/* CARD 2 */}
          

          <div className="flex h-[442px] w-full min-w-0 flex-col rounded-[8px] border border-[#D9E5EB] bg-white p-4">

            {/* TOP CONTENT */}
            <div className="flex w-full flex-col">

              {/* TOP ICON */}
              <div className="flex h-[56px] w-full items-center justify-center">
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#E5F5FF]">
                  <img
                    src="/Circleicon.png"
                    alt=""
                    className="h-[24px] w-[24px] object-contain"
                  />
                </div>
              </div>

              {/* VUMATEL LOGO */}
              <div className="mt-[20px] flex h-[28px] w-full items-center justify-center">
                <img
                  src="/card3.png"
                  alt="Vumatel"
                  className="h-[28px] w-auto max-w-[120px] object-contain"
                />
              </div>

              {/* TITLE + SUBTITLE */}
              <div className="mt-[38px] flex w-full flex-col gap-[6px]">
                <h3 className="text-[17px] font-bold leading-[20px] text-[#005288] sm:text-[18px]">
                  Vumatel Uncapped Lite
                </h3>

                <p className="text-[13px] font-bold leading-[16px] text-[#005288] sm:text-[14px]">
                  25/25Mbps
                </p>
              </div>
            </div>

            {/* PRICE */}
            <div className="mt-[40px] flex h-[64px] w-full flex-col justify-center rounded-[4px] bg-[#EAF6FC] px-4">
              <p className="text-[27px] font-extrabold leading-[28px] text-[#005288]">
                R479
              </p>

              <p className="mt-[2px] text-[9px] font-bold leading-[11px] text-[#005288]">
                PM x 12
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-auto flex h-[44px] w-full gap-4">

              <button
                type="button"
                className="h-[44px] min-w-0 flex-1 rounded-[4px] border border-[#009FE3] bg-white px-2 text-[12px] font-bold text-[#005288] transition hover:bg-[#EAF6FC]"
              >
                Call me back
              </button>

              <button
                type="button"
                className="h-[44px] min-w-0 flex-1 rounded-[4px] bg-[#8BE000] px-2 text-[12px] font-bold text-[#002E4D] transition hover:bg-[#7FD000]"
              >
                View details
              </button>

            </div>
          </div>


          {/* CARD 3 */}
          

          <div className="flex h-[442px] w-full min-w-0 flex-col rounded-[8px] border border-[#D9E5EB] bg-white p-4">

            {/* TOP CONTENT */}
            <div className="flex w-full flex-col">

              {/* TOP ICON */}
              <div className="flex h-[56px] w-full items-center justify-center">
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#E5F5FF]">
                  <img
                    src="/Circleicon.png"
                    alt=""
                    className="h-[24px] w-[24px] object-contain"
                  />
                </div>
              </div>

              {/* VUMATEL LOGO */}
              <div className="mt-[20px] flex h-[28px] w-full items-center justify-center">
                <img
                  src="/card3.png"
                  alt="Vumatel"
                  className="h-[28px] w-auto max-w-[120px] object-contain"
                />
              </div>

              {/* TITLE + SUBTITLE */}
              <div className="mt-[38px] flex w-full flex-col gap-[6px]">
                <h3 className="text-[17px] font-bold leading-[20px] text-[#005288] sm:text-[18px]">
                  Vumatel Uncapped Lite
                </h3>

                <p className="text-[13px] font-bold leading-[16px] text-[#005288] sm:text-[14px]">
                  25/25Mbps
                </p>
              </div>
            </div>

            {/* PRICE */}
            <div className="mt-[40px] flex h-[64px] w-full flex-col justify-center rounded-[4px] bg-[#EAF6FC] px-4">
              <p className="text-[27px] font-extrabold leading-[28px] text-[#005288]">
                R479
              </p>

              <p className="mt-[2px] text-[9px] font-bold leading-[11px] text-[#005288]">
                PM x 12
              </p>
            </div>

            {/* BUTTONS */}
            <div className="mt-auto flex h-[44px] w-full gap-4">

              <button
                type="button"
                className="h-[44px] min-w-0 flex-1 rounded-[4px] border border-[#009FE3] bg-white px-2 text-[12px] font-bold text-[#005288] transition hover:bg-[#EAF6FC]"
              >
                Call me back
              </button>

              <button
                type="button"
                className="h-[44px] min-w-0 flex-1 rounded-[4px] bg-[#8BE000] px-2 text-[12px] font-bold text-[#002E4D] transition hover:bg-[#7FD000]"
              >
                View details
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}