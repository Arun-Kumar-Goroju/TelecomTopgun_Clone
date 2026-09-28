export default function Comp8() {
  const cards = [
    {
      icon: "/icon1.png",
      title: "Everyday browsing",
      description: (
  <>
    We recommend <span className="font-bold text-[#005288]">25Mbps</span> or less download
    speed
  </>
),
      points: [
        "Perfect for internet surfing",
        "Sending and receiving emails",
        "Browsing social media",
      ],
    },
    {
      icon: "/icon2.png",
      title: "Entertainment and gaming",
      description: (
  <>
    We <span className="font-bold text-[#005288]"> recommend more than 25Mbps </span> download speed
    
  </> 
      ),
      points: [
        "Great for gaming",
        "Streaming movies and TV",
        "Streaming videos",
      ],
    },
    {
      icon: "/icon3.png",
      title: "Work and video calls",
      description: (
        <>
        We recommend an upload speed of <span className = "font-bold text-[#005288]"> above 10Mbps </span>
        </>
      ),
      points: [
        "Stable connection",
        "Good for online meetings",
        "Remote work and productivity",
      ],
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-12 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto w-full max-w-[1370px]">

        <h2 className="mb-6 text-[24px] font-extrabold leading-tight text-[#005288] sm:text-[26px] lg:text-[28px]">
          Speeds that fit your lifestyle
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="flex w-full flex-col rounded-[8px] bg-[#EAF6FC] p-5 lg:p-6"
            >

              
              <div className="flex flex-col gap-3">

                <div className="flex h-8 w-8 items-center justify-center">
                  <img
                    src={card.icon}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold leading-tight text-[#002E4D]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-[1.3] text-[#005288]">
                    {card.description}
                  </p>
                </div>

              </div>

              
              <div className="mt-5 flex w-full flex-col gap-2">

                {card.points.map((point, pointIndex) => (
                  <div
                    key={pointIndex}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-[1px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#C9EBFA] text-[10px] leading-none text-[#009FE3]">
                      ✓
                    </span>

                    <p className="text-[11px] leading-[1.3] text-[#005288]">
                      {point}
                    </p>
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
