"use client";

import Image from "next/image";

export default function Comp1() {
    return (
        <section className="flex min-h-[500px] w-full flex-col justify-start gap-2 overflow-x-hidden bg-[#0099FF] px-3 pt-19 pb-3 md:h-[506px] md:min-h-0 md:flex-row md:items-stretch md:justify-between md:gap-0 md:px-[50px] md:py-0 lg:px-[70px] xl:px-[90px]">

            <div className="flex w-full flex-col justify-center md:w-1/2">
                <h1 className="whitespace-nowrap font-black text-[20px] leading-tight tracking-tight text-white sm:text-[24px] md:text-4xl lg:text-5xl xl:text-[52px]">
                    All about <span className="text-[#84FF00]">Prepaid Fibre</span></h1>

                <p className="mt-3 text-[14px] leading-normal text-white sm:text-[16px] md:text-lg lg:text-xl xl:text-[22px]">
                    For customers that prefer to be in control of their fibre spend without long-term commitments.</p>
            </div>

<div className="flex w-full items-end justify-center overflow-hidden md:w-1/2">
<Image src="/women.png" alt="Telkom" width={800} height={800} priority className="h-auto w-[520px] max-w-none sm:w-[580px] md:w-[620px] lg:w-[680px] xl:w-[720px]" /></div>            

        </section>
    );
}