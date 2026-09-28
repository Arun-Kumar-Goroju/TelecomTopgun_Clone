export default function Comp4() {
  const cards = [
    {
      icon: "/speed.png",
      title: "Unmatched connectivity",
      description:
        "We don’t compromise on speed, offering the fastest connection possible.",
    },
    {
      icon: "/Coverage1.png",
      title: "Widespread coverage",
      description:
        "We’re in most areas, meaning you won’t have to change area codes to connect to great internet.",
    },
    {
      icon: "/rend.png",
      title: "Best value connection",
      description:
        "We’re leaders in delivering the best-priced, high-quality internet connection.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          justify-center
          px-4
          py-8
          sm:px-6
          sm:py-10
          md:px-8
          md:py-12
          lg:px-10
          lg:py-14
          xl:px-0
          xl:py-[64px]
        "
      >
        <div
          className="
            relative
            flex
            w-full
            max-w-[1370px]
            flex-col
            overflow-hidden
            rounded-[8px]
            bg-[#0099FF]
            px-4
            pt-8
            pb-6
            sm:px-6
            sm:pt-10
            sm:pb-7
            md:px-8
            md:pt-10
            md:pb-8
            lg:px-10
            lg:pt-10
            lg:pb-8
            xl:h-[634px]
            xl:w-[1370px]
            xl:max-w-[1370px]
            xl:px-[40px]
            xl:pt-[40px]
            xl:pb-[24px]
          "
        >
          
          <img
            src="/bgimage.png"
            alt=""
            className="
              absolute
              inset-0
              z-0
              h-full
              w-full
              object-cover
              object-center
            "
          />

          
          <div
            className="
              relative
              z-10
              mx-auto
              flex
              w-full
              max-w-[1210.366px]
              flex-col
              justify-between
              gap-6
              md:flex-row
              md:items-start
              lg:gap-8
              xl:h-[128px]
              xl:w-[1210.366px]
              xl:max-w-[1210.366px]
              xl:flex-row
              xl:gap-0
            "
          >
            
            <div
              className="
                w-full
                md:w-[55%]
                xl:w-[570px]
              "
            >
              <h2
                className="
                  m-0
                  text-[30px]
                  font-black
                  leading-[34px]
                  tracking-[-1px]
                  text-white
                  sm:text-[34px]
                  sm:leading-[38px]
                  md:text-[38px]
                  md:leading-[42px]
                  lg:text-[40px]
                  lg:leading-[44px]
                  xl:text-[40px]
                  xl:leading-[44px]
                "
              >
                Why choose
                <br />
                Telkom fibre
              </h2>
            </div>

           
            <div
              className="
                w-full
                md:w-[45%]
                xl:w-[560px]
                
              "
            >
              <p
                className="
                  m-0
                  max-w-[560px]
                  text-[11px]
                  font-normal
                  leading-[15px]
                  text-white
                  sm:text-[12px]
                  sm:leading-[16px]
                  xl:text-[12px]
                  xl:leading-[15px]
                  absolute left-[70%]
                "
              >
                Experience tailored solutions with flexible
                <br />
                options, easy adjustments, and real value,
                <br />
                all designed to suit your needs.
              </p>
            </div>
          </div>

          
          <div
            className="
              relative
              z-10
              mx-auto
              mt-auto
              w-full
              max-w-[1322px]
              rounded-[8px]
              bg-white
              px-4
              py-4
              sm:px-5
              sm:py-5
              md:px-6
              md:py-6
              lg:px-7
              lg:py-7
              xl:h-[250px]
              xl:w-[1322px]
              xl:max-w-[1322px]
              xl:px-[24px]
              xl:py-[32px]
              translate-y-4
            "
          >
            <div
              className="
                grid
                w-full
                grid-cols-1
                lg:grid-cols-3
              "
            >
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  className={`
                    flex
                    min-w-0
                    flex-col
                    items-start
                    px-4
                    py-5
                    sm:px-6
                    md:px-8
                    lg:px-10
                    xl:h-[167px]
                    xl:px-[40px]
                    xl:py-0
                    ${
                      index !== cards.length - 1
                        ? "border-b border-[#D9D9D9] lg:border-b-0 lg:border-r"
                        : ""
                    }
                  `}
                >
                  
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="
                      h-[56px]
                      w-[56px]
                      shrink-0
                      object-contain
                    "
                  />

                  <h3
                    className="
                      m-0
                      mt-[8px]
                      w-full
                      max-w-[237px]
                      text-[12px]
                      font-bold
                      leading-[24px]
                      text-[#005288]
                    "
                  >
                    {card.title}
                  </h3>

                  
                  <p
                    className="
                      m-0
                      mt-[4px]
                      w-full
                      max-w-[300px]
                      text-[10px]
                      font-normal
                      leading-[14px]
                      text-[#005288]
                    "
                  >
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}