
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full overflow-x-hidden bg-white"><div className="flex min-h-24 w-full items-center justify-between bg-gray-100 px-4 py-4 md:px-10">
  <div className="flex items-center gap-4 md:gap-12">
          <Link href="/">
    <span className="text-3xl font-bold text-blue-500 md:text-4xl">Telkom</span></Link>
          <div className="hidden items-center gap-2 md:flex md:gap-4">
            <Link href="/Personal" className="rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm text-blue-500 hover:bg-blue-700 md:px-6 md:py-3 md:text-base">Personal</Link>
  <button className="rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm text-blue-500 hover:bg-blue-700 md:px-6 md:py-3 md:text-base">Business</button>
  <button className="rounded-lg border border-blue-500 bg-white px-4 py-2 text-sm text-blue-500 hover:bg-blue-700 md:px-6 md:py-3 md:text-base">Enterprise</button>
          </div>
        </div>

        <div className="hidden items-start gap-4 text-[#005288] md:flex">
          <Link href="/Selfservice" className="flex w-[88px] flex-col items-center gap-[10px]">
            <Image src="/SelfService.png" alt="Self service" width={30} height={30} />
            <span className="text-sm font-bold">Self service</span></Link>

          <Link href="/help" className="flex w-[88px] flex-col items-center gap-[10px]">
            <Image src="/help.png" alt="Help" width={30} height={30} />
            <span className="text-sm font-bold">Help</span></Link>

          <Link href="/coverage" className="flex w-[88px] flex-col items-center gap-[10px]">
            <Image src="/Coverage.png" alt="Coverage" width={30} height={30} />
            <span className="text-sm font-bold">Coverage</span></Link>

          <Link href="/cart" className="flex w-[88px] flex-col items-center gap-[10px]">
        <Image src="/Cart.png" alt="Cart" width={30} height={30} />
          <span className="text-sm font-bold">Cart</span></Link>

          <Link href="https://selfservice.telkom.co.za/rococo/public/content/interstitial?_gl=1*13evsdl*_ga*MTE4ODUzMDI5MS4xNzkwMDczMDU3*_ga_VKWZE3MV5R*czE3OTAxNTkyMzAkbzMkZzAkdDE3OTAxNTkyMzAkajYwJGwwJGgxMTU4OTU4ODk3" className="flex w-[88px] flex-col items-center gap-[10px]">
            <Image src="/login.png" alt="Login" width={30} height={30} />
            <span className="text-sm font-bold">Login</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button type="button" className="text-[#005288]">
            <Image src="/Vector.png" alt="Search" width={24} height={24} /> </button>
          <Link href="/cart"><Image src="/Cart.png" alt="Cart" width={24} height={24} /> </Link>
          <button type="button" onClick={() => setMenuOpen(true)} className="text-3xl text-[#005288]">☰</button>
        </div>
      </div>
      <div className="hidden w-full items-center justify-between gap-4 px-4 py-5 md:flex md:h-23 md:px-12">
        <div className="flex items-center gap-5 text-sm font-normal leading-normal text-[#005288] md:gap-8 md:text-base">
          <Link href="/shop">Shop</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/financial-services">Financial services</Link>
          <Link href="/deals">Deals</Link></div>
        <div className="flex h-14 min-w-0 flex-1 rounded-lg border md:ml-6 md:h-16 md:max-w-[450px]">
          <input type="text"  placeholder="Find products, services" className="min-w-0 flex-1 px-4 text-sm outline-none placeholder:font-semibold placeholder:text-gray-500 md:px-5 md:text-base"/>
          <button className="flex w-14 shrink-0 items-center justify-center rounded bg-blue-400 md:w-16">
            <Image src="/Vector.png" alt="Search" height={24} width={24} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/30 md:hidden">
          <div className="absolute right-0 top-0 flex h-full w-full max-w-[288px] flex-col bg-white p-6 shadow-lg">
            <div className="flex shrink-0 items-center justify-between">
              <span className="text-2xl font-bold text-[#005288]">Menu</span>
              <button type="button" onClick={() => setMenuOpen(false)} className="text-2xl text-[#005288]">✕</button>
            </div>

            <div className="mt-8 flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto text-[#005288]">
              <Link href="/self-service" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-4">
                <Image src="/SelfService.png" alt="Self service" width={20} height={20} />
                <span className="font-bold">Self service</span> </Link>

              <Link href="/help" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-4">
                <Image src="/help.png" alt="Help" width={20} height={20} />
                <span className="font-bold">Help</span></Link>
              <Link href="/coverage" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-4">
                <Image src="/Coverage.png" alt="Coverage" width={20} height={20} />
                <span className="font-bold">Coverage</span> </Link>

              <Link href="/cart" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-4">
                <Image src="/Cart.png" alt="Cart" width={20} height={20} />
                <span className="font-bold">Cart</span></Link>

              <Link href="/login" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center gap-4">
                <Image src="/login.png" alt="Login" width={20} height={20} />
                <span className="font-bold">Login</span></Link>
              <hr />
              <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
    <Link href="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
    <Link href="/marketplace" onClick={() => setMenuOpen(false)}>Marketplace</Link>
    <Link href="/financial-services" onClick={() => setMenuOpen(false)}>Financial services</Link>
    <Link href="/deals" onClick={() => setMenuOpen(false)}>Deals</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
