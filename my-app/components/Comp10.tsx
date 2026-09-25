export default function Comp10() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-[1370px]">

        
        {/* BLUE CARD */}
        

        <div
          className="
            flex
            w-full
            flex-col
            overflow-hidden
            rounded-[8px]
            bg-[#0099FF]

            lg:h-[533px]
            lg:flex-row
            lg:gap-[24px]
          "
        >

          
          {/* LEFT CONTENT */}
          

          <div
            className="
              flex
              w-full
              flex-col
              px-6
              py-8

              sm:px-8
              sm:py-10

              lg:h-[533px]
              lg:w-[673px]
              lg:shrink-0
              lg:px-[48px]
              lg:py-[40px]
            "
          >

            {/* HEADER */}
            <div
              className="
                w-full
                lg:h-[128px]
                lg:w-[569px]
              "
            >
              <h2
                className="
                  m-0
                  text-[36px]
                  font-black
                  leading-[1.02]
                  tracking-[-1px]
                  text-white

                  sm:text-[42px]

                  lg:text-[48px]
                  lg:leading-[1.02]
                "
              >
                Fast fibre, for all
                <br />
                your needs.
              </h2>
            </div>


            {/* DESCRIPTION */}
            <div
              className="
                mt-6
                w-full
                max-w-[390px]

                lg:mt-[0px]
              "
            >
              <p
                className="
                  m-0
                  text-[12px]
                  font-medium
                  leading-[16px]
                  text-white

                  sm:text-[13px]
                  sm:leading-[17px]
                "
              >
                Follow a DIY video, download forms, and binge a
                series with your mates all day.
              </p>
            </div>


            {/* PRICE */}
            <div className="mt-5 flex flex-col">

              <span
                className="
                  text-[11px]
                  font-medium
                  leading-[14px]
                  text-white
                "
              >
                From
              </span>

              <span
                className="
                  mt-[2px]
                  text-[42px]
                  font-black
                  leading-[42px]
                  tracking-[-1px]
                  text-white
                "
              >
                R655
              </span>

              <span
                className="
                  mt-[1px]
                  text-[9px]
                  font-bold
                  leading-[11px]
                  text-white
                "
              >
                PM x 4
              </span>

            </div>


            {/* BUTTON */}
            <div className="mt-6">

              <button
                type="button"
                className="
                  h-[40px]
                  min-w-[78px]
                  rounded-[4px]
                  bg-[#8BE000]
                  px-5

                  text-[12px]
                  font-bold
                  leading-none
                  text-[#002E4D]

                  transition-colors
                  hover:bg-[#7FD000]

                  sm:h-[42px]
                "
              >
                Buy now
              </button>

            </div>

          </div>


          
          {/* RIGHT IMAGE */}
          

          <div
            className="
              relative
              h-[300px]
              w-full
              shrink-0
              overflow-hidden

              sm:h-[400px]

              lg:h-[533px]
              lg:w-[673px]
            "
          >
            <img
              src="/page10.png"
              alt="Fast fibre for all your needs"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}