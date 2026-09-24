
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Comp1() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <main>
            <section className="flex min-h-[400px] flex-col items-center justify-between bg-[#0099FF] px-6 py-8 md:flex-row md:px-[50px] md:py-0">
                <div>
                    <h1 className="font-black text-5xl leading-tight tracking-tight text-white">
                        All about <span className="text-[oklch(84.1%_0.238_128.85)]">Prepaid Fibre</span>
                    </h1>
                    <p className="mt-4 text-lg font-normal leading-normal tracking-normal text-white">
                        For customers that prefer to be in control of
                        <br />
                        their fibre spend without
                        long-term <br />commitments.
                    </p>
                </div>

                <div className="mr-0 md:mr-10">
                    <Image src="/women.png" alt="Telkom" width={800} height={800} className="w-[300px] md:w-[800px]" />
                </div>
            </section>

            <button type="button" onClick={() => setShowPopup(true)} className="fixed bottom-5 right-5 z-50">
                <Image src="/image.png" alt="Chat support" width={100} height={100} />
            </button>

            {showPopup && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
                    <div className="relative w-full max-w-[600px] rounded-xl bg-white p-6 shadow-xl md:p-8">
                        <button type="button" onClick={() => setShowPopup(false)} className="absolute right-4 top-3 text-2xl font-bold text-gray-500 hover:text-black">
                            ×
                        </button>

                        <h2 className="mb-5 text-2xl font-black text-[#005288] md:text-3xl">
                            Thuso chatbot is discontinued
                        </h2>

                        <div className="space-y-4 text-sm leading-6 text-[#003e70] md:text-base">
                            <p>We trust you have enjoyed making use of the Thuso Chatbot for your customer support needs.</p>
                            <p>Please note this chatbot is discontinued.</p>
                            <p>We are committed to bringing you cutting edge solutions for your customer support needs.</p>

                            <p>
                                Please make use of the following links to access customer support on the{" "}
                                <a href="https://tlkm.link/appthusoreplacement" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0099FF] underline">MyTelkomApp</a>{" "}
                                or Telkom&apos;s{" "}
                                <a href="https://connect.telkom.co.za/tds/LINK" target="_blank" rel="noopener noreferrer" className="font-bold text-[#0099FF] underline">WhatsApp</a>{" "}
                                channel.
                            </p>

                            <div className="flex flex-col gap-3 pt-2">
                                <a href="https://tlkm.link/appthusoreplacement" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#0099FF] px-5 py-3 text-center font-bold text-white hover:bg-[#0088e6]">
                                    MyTelkomApp
                                </a>

                                <a href="https://connect.telkom.co.za/tds/LINK" target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-[#0099FF] px-5 py-3 text-center font-bold text-[#0099FF] hover:bg-[#eef9ff]">
                                    Telkom&apos;s WhatsApp channel
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
