export default function Comp5() {
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
        bg-gray-100
        px-6
        py-10

        lg:flex-row
        lg:gap-[60px]
        lg:px-6
        lg:py-0
      "
    >
      {/* Image - Left */}
      <div
        className="
          flex
          w-full
          max-w-[655px]
          justify-center
          lg:h-[404px]
        "
      >
        <img
          src="/women.png"
          alt="Image"
          className="
            h-auto
            w-full
            max-w-[655px]
            object-contain
            opacity-100

            lg:h-[404px]
          "
        />
      </div>

      {/* Content - Right */}
      <div
        className="
          flex
          w-full
          max-w-[655px]
          flex-col
          gap-8
          py-4

          lg:h-[404px]
          lg:py-8
        "
      >
        <h2
          className="
            w-full
            font-black
            text-[32px]
            leading-[40px]
            text-[#005288]

            md:text-[36px]
            md:leading-[44px]

            lg:text-[40px]
            lg:leading-[48px]
          "
        >
          What is fibre?
        </h2>

        <p
          className="
            w-full
            font-normal
            text-[14px]
            leading-[22px]
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

        {/* Buttons */}
        <div
          className="
            flex
            h-[44px]
            w-full
            max-w-[336px]
            flex-row
            gap-[16px]
          "
        >
          <button className="h-[44px] flex-1 rounded-md bg-green-500 text-white">
            Coverage check
          </button>

          <button className="h-[44px] flex-1 rounded-md border border-[#005288] bg-white text-[#005288]">
            View details
          </button>
        </div>
      </div>
    </section>
  );
}