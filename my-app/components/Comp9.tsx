"use client";
import { useRef } from "react";

export default function Comp9() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-[#EAF7FF] px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-[1014px]">

        
        <div className="mb-5 text-center">
          <h2 className="text-[24px] font-extrabold leading-[1.15] text-[#005288] sm:text-[26px] lg:text-[28px]">
            Choose a plan that fits your needs
          </h2>
        </div>

       
        <div className="mb-5 flex w-full items-center justify-between px-1">
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

       
        <div
          ref={sliderRef}
          className="flex w-full gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none lg:grid-cols-3"
        >

          <div className="flex h-[362px] w-[calc(100vw-48px)] min-w-[calc(100vw-48px)] shrink-0 snap-start flex-col rounded-[7px] border border-[#D9E5EB] bg-white p-3 sm:w-full sm:min-w-0 sm:shrink sm:snap-none">

            
            <div className="flex w-full flex-col">

            
              <div className="flex h-[56px] w-full items-center justify-center">
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#E5F5FF]">
                  <img
                    src="/Circleicon.png"
                    alt=""
                    className="h-[24px] w-[24px] object-contain"
                  />
                </div>
              </div>

              
              <div className="mt-[10px] flex h-[28px] w-full items-center justify-center">
                <img
                  src="/card1.png"
                  alt="Openserve"
                  className="h-[50px] w-auto max-w-[200px] object-contain"
                />
              </div>

             
              <div className="mt-[18px] flex w-full flex-col gap-[4px]">
                <h3 className="text-[16px] font-bold leading-[19px] text-[#005288] sm:text-[17px]">
                  Telkom Core Lite Fibre
                </h3>

                <p className="text-[12px] font-bold leading-[15px] text-[#005288] sm:text-[13px]">
                  50/25Mbps
                </p>
              </div>
            </div>

           
            <div className="mt-[18px] flex h-[60px] w-full flex-col justify-center rounded-[5px] bg-[#EAF6FC] px-3">
              <p className="text-[25px] font-extrabold leading-[26px] text-[#005288]">
                R581
              </p>

              <p className="mt-[2px] text-[9px] font-bold leading-[10px] text-[#005288]">
                PM x 12
              </p>
            </div>

            
            <div className="mt-[11px] border-t border-[#D9E5EB]" />

          
            <div className="mt-[12px] flex h-[36px] w-full gap-2">

              <button
                type="button"
                className="h-[36px] min-w-0 flex-1 rounded-[10px] border border-[#009FE3] bg-white px-1 text-[15px] font-bold text-[#0099FF] transition"
              >
                Call me back
              </button>

              <button
                type="button"
                className="h-[36px] min-w-0 flex-1 rounded-[10px] bg-[#91E200] px-1 text-[15px] font-bold text-[#003F6A]"
              >
                view details
              </button>

            </div>
          </div>


          <div className="flex h-[362px] w-[calc(100vw-48px)] min-w-[calc(100vw-48px)] shrink-0 snap-start flex-col rounded-[7px] border border-[#D9E5EB] bg-white p-3 sm:w-full sm:min-w-0 sm:shrink sm:snap-none">

           
            <div className="flex w-full flex-col">

             
              <div className="flex h-[56px] w-full items-center justify-center">
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#E5F5FF]">
                  <img
                    src="/Circleicon.png"
                    alt=""
                    className="h-[24px] w-[24px] object-contain"
                  />
                </div>
              </div>


              <div className="mt-[10px] flex h-[28px] w-full items-center justify-center">
                <img
                  src="/card3.png"
                  alt="Vumatel"
                  className="h-[50px] w-auto max-w-[200px] object-contain"
                />
              </div>

              
              <div className="mt-[18px] flex w-full flex-col gap-[4px]">
                <h3 className="text-[16px] font-bold leading-[19px] text-[#005288] sm:text-[17px]">
                  Vumatel Uncapped Lite
                </h3>

                <p className="text-[12px] font-bold leading-[15px] text-[#005288] sm:text-[13px]">
                  25/25Mbps
                </p>
              </div>
            </div>

            <div className="mt-[18px] flex h-[60px] w-full flex-col justify-center rounded-[5px] bg-[#EAF6FC] px-3">
              <p className="text-[25px] font-extrabold leading-[26px] text-[#005288]">
                R479
              </p>

              <p className="mt-[2px] text-[9px] font-bold leading-[10px] text-[#005288]">
                PM x 12
              </p>
            </div>

            
            <div className="mt-[11px] border-t border-[#D9E5EB]" />

           
            <div className="mt-[12px] flex h-[36px] w-full gap-2">

              <button
                type="button"
                className="h-[36px] min-w-0 flex-1 rounded-[10px] border border-[#009FE3] bg-white px-1 text-[15px] font-bold text-[#0099FF] transition"
              >
                Call me back
              </button>

              <button
                type="button"
                className="h-[36px] min-w-0 flex-1 rounded-[10px] bg-[#91E200] px-1 text-[15px] font-bold text-[#003F6A]"
              >
                view details
              </button>

            </div>
          </div>


          
          <div className="flex h-[362px] w-[calc(100vw-48px)] min-w-[calc(100vw-48px)] shrink-0 snap-start flex-col rounded-[7px] border border-[#D9E5EB] bg-white p-3 sm:w-full sm:min-w-0 sm:shrink sm:snap-none">

            
            <div className="flex w-full flex-col">

              
              <div className="flex h-[56px] w-full items-center justify-center">
                <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#E5F5FF]">
                  <img
                    src="/Circleicon.png"
                    alt=""
                    className="h-[24px] w-[24px] object-contain"
                  />
                </div>
              </div>

              
              <div className="mt-[10px] flex h-[28px] w-full items-center justify-center">
                <img
                  src="/card3.png"
                  alt="Vumatel"
                  className="h-[50px] w-auto max-w-[200px] object-contain"
                />
              </div>

              <div className="mt-[18px] flex w-full flex-col gap-[4px]">
                <h3 className="text-[16px] font-bold leading-[19px] text-[#005288] sm:text-[17px]">
                  Vumatel Uncapped Lite
                </h3>

                <p className="text-[12px] font-bold leading-[15px] text-[#005288] sm:text-[13px]">
                  25/25Mbps
                </p>
              </div>
            </div>

           
            <div className="mt-[18px] flex h-[60px] w-full flex-col justify-center rounded-[5px] bg-[#EAF6FC] px-3">
              <p className="text-[25px] font-extrabold leading-[26px] text-[#005288]">
                R479
              </p>

              <p className="mt-[2px] text-[9px] font-bold leading-[10px] text-[#005288]">
                PM x 12
              </p>
            </div>

            
            <div className="mt-[11px] border-t border-[#D9E5EB]" />

            
            <div className="mt-[12px] flex h-[36px] w-full gap-2">

              <button
                type="button"
                className="h-[36px] min-w-0 flex-1 rounded-[10px] border border-[#009FE3] bg-white px-1 text-[15px] font-bold text-[#0099FF] transition"
              >
                Call me back
              </button>

              <button
                type="button"
                className="h-[36px] min-w-0 flex-1 rounded-[10px] bg-[#91E200] px-1 text-[15px] font-bold text-[#003F6A]"
              >
                view details
              </button>

            </div>
          </div>

        </div>


        
        <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">

         
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous plan"
            className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#8FD9F7] text-[18px] leading-none text-[#005288]"
          >
            ←
          </button>

         
          <div className="h-[4px] w-[22px] rounded-full bg-[#009FE3]" />

          <div className="h-[4px] w-[22px] rounded-full bg-[#D5E7EF]" />

          <div className="h-[4px] w-[22px] rounded-full bg-[#D5E7EF]" />

         
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next plan"
            className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#8FD9F7] text-[18px] leading-none text-[#005288]"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}
