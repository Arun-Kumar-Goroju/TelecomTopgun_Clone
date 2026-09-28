import Image from "next/image";

export default function Comp1() {
  return (
    <main>
      <section className="relative min-h-[479px] w-full overflow-hidden bg-[#0099FF] md:min-h-[600px]">

        
        <div className="absolute left-[13px] top-[30px] z-10 md:left-[15%] md:top-[60px]">

          <h1 className="font-black text-[18px] leading-[1.05] tracking-tight text-white md:text-[30px]">
            Fibre Connection <br />
            begins here
          </h1>

          <p className="mt-3 w-[285px] text-[14px] leading-[1.2] text-white md:mt-4 md:w-[335px] md:text-[16px]">
            Enjoy uninterrupted, high-speed fibre from
            <br className="hidden md:block" />
            comfort of your home or office, you can
            <br className="hidden md:block" />
            download a movie in seconds, game without
            <br className="hidden md:block" />
            lag, and work from home seamlessly.
          </p>

        </div>

        
        <div className="absolute bottom-0 left-0 z-0 h-[285px] w-full md:hidden">
          <Image
            src="/men.png"
            alt="Telkom"
            fill
            priority
            sizes="100vw"
            className="object-contain object-bottom"
          />
        </div>

        
        <button className="absolute bottom-[17px] left-[13px] z-20 flex h-[32px] w-[calc(100%-26px)] items-center justify-center gap-2 rounded-md bg-[#8BE600] text-[11px] font-bold text-[#004F00] md:hidden">
          Check coverage
          <span>→</span>
        </button>

        
        <div className="absolute right-0 top-0 hidden h-full w-[51%] md:block">
          <Image
            src="/men.png"
            alt="Telkom"
            fill
            priority
            sizes="51vw"
            className="h-[600px] w-[900px] object-center"
          />
        </div>

        
        <button className="absolute left-[15%] top-[459px] z-10 hidden h-[44px] w-[113px] items-center justify-center gap-2 rounded-md bg-[#8BE600] text-[11px] font-bold text-[#004F00] md:flex">
          Check coverage
          <span>→</span>
        </button>

      </section>
    </main>
  );
}