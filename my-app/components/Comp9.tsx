"use client";

import data from "../Data.json";

type Product = {
  id: number;
  title: string;
  days: string;
  speed: string;
  price: string;
};

export default function Comp9() {
  const relatedProducts: Product[] = data.slice(0, 3);

  return (
    <section className="w-full bg-white px-4 py-10 md:px-8 lg:px-16">
      <h1 className="mb-8 text-center text-2xl font-bold text-[#00558c] md:text-3xl">
        Related Products
      </h1>

      <div className="mx-auto grid max-w-[950px] grid-cols-1 gap-6 md:grid-cols-3">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-md"
          >
            <h2 className="text-lg font-bold text-[#0097ef]">
              {product.title}
            </h2>

            <p className="mt-2 text-sm font-semibold text-[#004878]">
              {product.days}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              ↓ {product.speed}
            </p>

            <div className="mt-4 rounded bg-[#e4f5fe] p-3">
              <p className="text-2xl font-bold text-[#00558c]">
                R{product.price}
              </p>

              <p className="text-xs font-bold text-[#00558c]">
                Once-off
              </p>
            </div>

            <button
              type="button"
              className="mt-5 w-full rounded bg-[#80e000] py-2 font-bold text-[#003e68] hover:bg-[#72d000]"
            >
              Buy voucher
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}