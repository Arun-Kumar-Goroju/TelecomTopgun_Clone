export default function PersonalPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-[#e8f7ff] px-4 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1100px]">

          <h1 className="text-center text-[32px] font-extrabold text-[#00558c] md:text-[42px]">
            Personal
          </h1>

          <p className="mx-auto mt-4 max-w-[700px] text-center text-[16px] leading-7 text-[#00558c]">
            Explore our personal products and services designed to keep you
            connected, entertained and supported.
          </p>

        </div>
      </section>

      <section className="px-4 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1100px]">

          <h2 className="mb-8 text-center text-[28px] font-extrabold text-[#00558c]">
            Personal Services
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#00558c]">
                Mobile
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Stay connected with our mobile products, data bundles and
                prepaid services.
              </p>

              <button className="mt-5 rounded-lg bg-[#079ff2] px-5 py-3 font-bold text-white">
                Explore Mobile
              </button>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#00558c]">
                Fibre
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Choose fibre internet packages that suit your home and
                connectivity needs.
              </p>

              <button className="mt-5 rounded-lg bg-[#079ff2] px-5 py-3 font-bold text-white">
                Explore Fibre
              </button>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-[#00558c]">
                Entertainment
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Discover entertainment services and products available for
                personal customers.
              </p>

              <button className="mt-5 rounded-lg bg-[#079ff2] px-5 py-3 font-bold text-white">
                Explore Entertainment
              </button>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}