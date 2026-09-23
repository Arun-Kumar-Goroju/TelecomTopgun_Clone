import Image from "next/image";

export default function Comp1() {
    return (
        <main>
            <section className="flex min-h-[400px] flex-col items-center justify-between bg-[#0099FF] px-6 py-8 md:flex-row md:px-[50px] md:py-0">

                <div>
                    <h1 className="font-black text-5xl leading-tight tracking-tight text-white">
                        All about <span className="text-[oklch(84.1%_0.238_128.85)]">Prepaid Fibre</span>
                    </h1>

                    <p className="mt-4 text-lg font-normal leading-normal tracking-normal text-white-600">
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
              <main>
            <Image src="/image.png" alt="Image" width={100} height={100} className="fixed bottom-5 right-5 z-50" />
        </main>
        </main>
    );
}