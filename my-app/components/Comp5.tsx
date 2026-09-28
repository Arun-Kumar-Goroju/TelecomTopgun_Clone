export default function Comp6() {
  return (
    <section
      className="
        flex
        min-h-[520px]
        w-full
        flex-col
        items-center
        justify-center
        gap-[40px]
        bg-white
        px-6
        py-10

        lg:flex-row
        lg:gap-[60px]
        lg:px-6
        lg:py-0
      "
    >
     
      <div
        className="
          flex
          w-full
          min-w-0
          max-w-[655px]
          justify-center
          lg:h-[392px]
        "
      >
        <img
          src="/women.png"
          alt="Image"
          className="
            h-auto
            w-full
            h-[404px]
            w-[655px]
            max-w-[655px]
            object-contain
            opacity-100
            rounded-[20px]
           

            lg:h-[404px]
          "
        />
      </div>

     
      <div
        className="
          flex
          w-full
          max-w-[655px]
          flex-col
          gap-[32px]
          py-4

          lg:h-[404px]
          lg:py-8
        "
      >
        <h2
          className="
            w-full
            font-black
            text-[20px]
            leading-[20px]
            text-[#005288]

            md:text-[36px]
            md:leading-[44px]

            lg:text-[20px]
            lg:leading-[20px]
          "
        >
          What is fibre?
        </h2>

        <p
          className="
            w-full
            font-normal
            text-[14px]
            leading-[20px]
            text-[#005288]

            lg:text-base
            lg:leading-[24px]
          "
        >
          Fibre is cutting-edge internet technology that uses fibre optic
          cables to deliver super-fast speeds. It’s perfect for creating a
          smart home and enhances your daily life, work, and education.

          <br />
          <br />

          With fibre, you'll enjoy a world of fast, reliable internet for
          everything you do online.
        </p>

        <div
          className="
            flex
            h-[44px]
            min-w-[160px]
            max-w-[336px]
            flex-row
            shrink-0
            gap-[16px]
          "
        >
          <button className="h-[44px] w-[160px] shrink-0 bg-[#91E200] flex-1 rounded-md  text-[#005288] font-bold">
            Coverage check
          </button>
          <button className="h-[44px] w-[160px] shrink-0 bg-white flex-1 rounded-md border-1 border-[#0099FF]  text-[#0099FF] font-bold">
            View details
          </button>

          
        </div>
      </div>
    </section>
  );
}