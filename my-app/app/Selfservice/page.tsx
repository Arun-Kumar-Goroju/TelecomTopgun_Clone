import Image from "next/image";

export default function Selfservice() {
  return (
    <div className="min-h-screen w-full bg-white p-6 md:p-12">
      <h1 className="mb-6 text-2xl font-bold text-blue-800">Self service features</h1>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 rounded border bg-amber-50 p-8 font-bold text-blue-600 shadow transition hover:border-gray-400 hover:shadow-lg md:w-[300px]">
          <Image src="/profile.png" alt="profile" height={50} width={50} />
          <h1>Rica Self Service</h1></div>
        <div className="flex items-center gap-4 rounded border bg-amber-50 p-8 font-bold text-blue-600 shadow transition hover:border-gray-400 hover:shadow-lg md:w-[300px]">
          <Image src="/profile.png" alt="profile" height={50} width={50} />
          <h1>Upfront payment</h1></div>
        <div className="flex items-center gap-4 rounded border bg-amber-50 p-8 font-bold text-blue-600 shadow transition hover:border-gray-400 hover:shadow-lg md:w-[300px]">
          <Image src="/profile.png" alt="profile" height={50} width={50} />
          <h1>Track order</h1></div>
      </div>

      <h1 className="mb-6 mt-[100px] text-2xl font-bold text-blue-800">
        Self features
      </h1>

      <div className="flex flex-wrap gap-4">

        <div className="flex items-center gap-4 rounded border bg-amber-50 p-8 font-bold text-blue-600 shadow border-gray-400 hover:shadow-lg md:w-[300px]">
          <Image src="/profile.png" alt="profile" height={50} width={50} />
          <h1>Rica Self Service</h1>
        </div>

        <div className="flex items-center gap-4 rounded border bg-amber-50 p-8 font-bold text-blue-600 shadow border-gray-400 hover:shadow-lg md:w-[300px]">
          <Image src="/profile.png" alt="profile" height={50} width={50} />
          <h1>Upfront payment</h1>
        </div>

        <div className="flex items-center gap-4 rounded border bg-amber-50 p-8 font-bold text-blue-600 shadow transition border-gray-400 hover:shadow-lg md:w-[300px]">
          <Image src="/profile.png" alt="profile" height={50} width={50} />
          <h1>Track order</h1>
        </div>

      </div>

    </div>
  );
}