"use client";

import Image from "next/image";

export default function Comp2() {
    return (
        <main>
            <section className="flex min-h-[500px] flex-col items-center justify-center gap-8 bg-white px-6 py-10 md:flex-row md:gap-16 md:px-[50px] md:py-0">

                <div className="hidden md:block md:w-1/2">
                    <Image className="w-full max-w-[600px] rounded-2xl" src="/comp2.png" alt="Prepaid Fibre" width={600} height={500} />
                </div>

                <div className="w-full max-w-[600px] text-center md:w-1/2 md:text-left">
                   <h2 className="text-4xl font-[800] leading-tight tracking-tight text-[#005288] md:text-[42px]">
    What is Prepaid Fibre
</h2>
                    <p className="mt-4 text-lg font-normal leading-normal tracking-normal text-[#005288]">
                        Fibre that has flexible options based on your needs. You can apply for a Fibre starter pack and follow easy and simple steps to activate your Prepaid Fibre, buy a voucher and Top-up whenever needed.
                    </p>

                    <p className="mt-6 text-lg font-normal leading-normal tracking-normal text-[#005288]">
                        Prepaid fibre is ideal for customers seeking the following value:
                    </p>

                    <ul className="mx-auto mt-4 space-y-3 text-left text-lg font-normal leading-normal tracking-normal text-[#005288] md:mx-0">
                        <li className="flex items-center gap-3">
                            <Image src="/correction.png" alt="Check" width={24} height={24} className="h-6 w-6 shrink-0 bg-blue-300 rounded-full" />
                            <span>No fixed terms contract</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Image src="/correction.png" alt="Check" width={24} height={24} className="h-6 w-6 shrink-0 bg-blue-300 rounded-full" />
                            <span>Easy top-up options</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Image src="/correction.png" alt="Check" width={24} height={24} className="h-6 w-6 shrink-0 bg-blue-300 rounded-full" />
                            <span>Full control of spend</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Image src="/correction.png" alt="Check" width={24} height={24} className="h-6 w-6 shrink-0 bg-blue-300 rounded-full" />
                            <span>No credit checks</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Image src="/correction.png" alt="Check" width={24} height={24} className="h-6 w-6 shrink-0 bg-blue-300 rounded-full" />
                            <span>No penalties or late fees, and no bill shock</span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}