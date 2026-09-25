"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 w-full bg-white">

            <div className="flex min-h-24 flex-wrap items-center justify-between gap-4 bg-gray-100 px-4 py-4 md:px-10">

                <div className="flex flex-wrap items-center gap-4 md:gap-12">

                    <Link href="/">
                        <span className="text-3xl font-bold text-blue-500 md:text-4xl">Telkom</span>
                    </Link>

                    <div className="hidden flex-wrap gap-2 md:flex md:gap-4">
                        <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white md:px-6 md:py-3 md:text-base">Personal</button>
                        <button className="rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm text-blue-500 md:px-6 md:py-3 md:text-base">Busines</button>
                        <button className="rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm text-blue-500 md:px-6 md:py-3 md:text-base">Enterprise</button>
                    </div>

                </div>

                <div className="hidden md:flex md:flex-wrap md:items-start md:gap-4 text-[#005288]">

                    <div className="flex w-[88px] flex-col items-center gap-[10px]">
                        <Image src="/Vector.png" alt="Search" width={30} height={30} />
                        <span className="text-sm font-bold">Search</span>
                    </div>

                    <div className="flex w-[88px] flex-col items-center gap-[10px]">
                        <Image src="/help.png" alt="Help" width={30} height={30} />
                        <span className="text-sm font-bold">Help</span>
                    </div>

                    <div className="flex w-[88px] flex-col items-center gap-[10px]">
                        <Image src="/Coverage.png" alt="Coverage" width={30} height={30} />
                        <span className="text-sm font-bold">Coverage</span>
                    </div>

                    <div className="flex w-[88px] flex-col items-center gap-[10px]">
                        <Image src="/Cart.png" alt="Cart" width={30} height={30} />
                        <span className="text-sm font-bold">Cart</span>
                    </div>

                    <div className="flex w-[88px] flex-col items-center gap-[10px]">
                        <Image src="/login.png" alt="Login" width={30} height={30} />
                        <span className="text-sm font-bold">Login</span>
                    </div>

                </div>

                <button onClick={() => setMenuOpen(true)} className="text-3xl text-[#005288] md:hidden">☰</button>

            </div>

            <div className="hidden flex-wrap items-center justify-between gap-4 px-4 py-5 md:flex md:h-23 md:px-12">

                <div className="flex flex-wrap gap-5 text-sm font-normal leading-normal text-[#005288] md:gap-8 md:text-base">
                    <Link href="#">Shop</Link>
                    <Link href="#">Explore</Link>
                    <Link href="#">Marketplace</Link>
                    <Link href="#">Financial services</Link>
                    <Link href="#">Deals</Link>
                </div>

                <div className="flex h-14 w-full rounded-lg border md:h-16 md:w-[450px]">

                    <input type="text" placeholder="Find products, services" className="flex-1 px-4 text-sm outline-none placeholder:font-semibold placeholder:text-gray-500 md:px-5 md:text-base" />

                    <button className="flex w-14 items-center justify-center rounded bg-blue-400 md:w-16">
                        <Image src="/Vector.png" alt="Search" height={24} width={24} />
                    </button>

                </div>

            </div>

            {menuOpen && (
                <div className="fixed inset-0 z-50 bg-black/30 md:hidden">

                    <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-lg">

                        <div className="flex items-center justify-between">

                            <span className="text-2xl font-bold text-[#005288]">Menu</span>

                            <button onClick={() => setMenuOpen(false)} className="text-2xl text-[#005288]">✕</button>

                        </div>

                        <div className="mt-8 flex flex-col gap-6 text-[#005288]">

                            <div className="flex items-center gap-4">
                                <Image src="/SelfService.png" alt="Self service" width={20} height={20} />
                                <span className="font-bold">Self service</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image src="/help.png" alt="Help" width={20} height={20} />
                                <span className="font-bold">Help</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image src="/Coverage.png" alt="Coverage" width={20} height={20} />
                                <span className="font-bold">Coverage</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image src="/Cart.png" alt="Cart" width={20} height={20} />
                                <span className="font-bold">Cart</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Image src="/login.png" alt="Login" width={20} height={20} />
                                <span className="font-bold">Login</span>
                            </div>

                            <hr />

                            <Link href="#">Shop</Link>
                            <Link href="#">Explore</Link>
                            <Link href="#">Marketplace</Link>
                            <Link href="#">Financial services</Link>
                            <Link href="#">Deals</Link>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

export default Navbar;