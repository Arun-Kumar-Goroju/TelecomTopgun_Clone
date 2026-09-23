import Image from "next/image";

export default function Comp2() {
    return (
        <main>
            <section className="flex min-h-[500px] items-center justify-center gap-25 bg-white px-6 py-10 md:px-[50px] md:py-0">

                <div className="hidden md:ml-10 md:block">
                    <Image className="rounded" src="/comp2.png" alt="Prepaid Fibre" width={600} height={500} />
                </div>

                <div className="w-full text-center md:w-[600px] md:text-left">
                    <h2 className="font-black text-4xl leading-tight tracking-tight text-[#005288] md:text-5xl">
                        What is Prepaid Fibre
                    </h2>

                    <p className="mt-4 text-lg font-normal leading-normal tracking-normal text-[#005288]">
                        Fibre that has flexible options based on your needs. You can apply for a Fibre starter pack and follow easy and simple steps to activate your Prepaid Fibre, buy a voucher and Top-up whenever needed.
                    </p>

                    <p className="mt-6 text-lg font-normal leading-normal tracking-normal text-[#005288]">
                        Prepaid fibre is ideal for customers seeking the following value:
                    </p>

                    <ul className="mx-auto mt-4 w-fit space-y-3 text-left text-lg font-normal leading-normal tracking-normal text-[#005288]">

                        <li className="flex items-center gap-3 before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:border-2 before:border-blue-500 before:text-sm before:text-blue-500 before:content-['✓']">
                            No fixed terms contract
                        </li>

                        <li className="flex items-center gap-3 before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:border-2 before:border-blue-500 before:text-sm before:text-blue-500 before:content-['✓']">
                            Easy top-up options
                        </li>

                        <li className="flex items-center gap-3 before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:border-2 before:border-blue-500 before:text-sm before:text-blue-500 before:content-['✓']">
                            Full control of spend
                        </li>

                        <li className="flex items-center gap-3 before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:border-2 before:border-blue-500 before:text-sm before:text-blue-500 before:content-['✓']">
                            No credit checks
                        </li>

                        <li className="flex items-center gap-3 before:flex before:h-6 before:w-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:border-2 before:border-blue-500 before:text-sm before:text-blue-500 before:content-['✓']">
                            No penalties or late fees, and no bill shock
                        </li>

                    </ul>
                </div>

            </section>
        </main>
    );
}