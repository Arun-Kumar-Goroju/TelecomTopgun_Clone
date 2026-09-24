"use client";

export default function Comp10() {
  const quickLinks = [
    {
      name: "Chat to us online",
      icon: "◯",
    },
    {
      name: "Get help",
      icon: "?",
    },
    {
      name: "Check coverage",
      icon: "⌖",
    },
    {
      name: "Find a store",
      icon: "▦",
    },
    {
      name: "InTouchBlog",
      icon: "▤",
    },
  ];

  return (
    <section className="w-full bg-[#0796e5]">
      <div className="mx-auto max-w-[1360px] px-5 py-8 md:px-10">

        <h3 className="text-xl font-extrabold text-white">
          Telkom
        </h3>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className="flex items-center gap-2 text-[13px] font-semibold text-white underline underline-offset-2 transition hover:opacity-80"
            >
              <span className="flex h-5 w-5 items-center justify-center text-[15px]">
                {link.icon}
              </span>

              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}