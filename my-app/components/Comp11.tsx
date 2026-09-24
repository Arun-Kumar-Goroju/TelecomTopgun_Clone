"use client";

type FooterColumn = {
  title: string;
  links: string[];
};

export default function Comp11() {
  const footerColumns: FooterColumn[] = [
    {
      title: "Telkom Personal",
      links: [
        "Mobile",
        "Devices",
        "Home Internet",
        "Smart home",
        "Lifestyle",
        "Financial services",
        "Telkom Learn",
      ],
    },
    {
      title: "Telkom Business",
      links: [
        "Mobile",
        "Devices",
        "Internet solutions",
        "Software",
        "Smart office",
        "Lifestyle",
        "Financial services",
        "Telkom Learn",
      ],
    },
    {
      title: "Account",
      links: [
        "Login / register",
        "Check order status",
        "Pay my bill",
        "Cancellations",
      ],
    },
    {
      title: "About us",
      links: [
        "Who we are",
        "Telkom group",
        "Media Center",
        "Sustainability",
        "Investor Relations",
        "Careers",
        "Telkom Foundation",
      ],
    },
    {
      title: "Marketplace",
      links: ["Yep!"],
    },
    {
      title: "Help & support",
      links: [
        "Help guide",
        "Get help",
        "Find a store",
        "Check coverage",
        "Crime Hotline",
      ],
    },
    {
      title: "Get the right deal",
      links: ["Deals"],
    },
  ];

  return (
    <footer className="w-full bg-[#0ba1ee] text-white">
      <div className="mx-auto max-w-[1360px] px-5 pb-5 pt-10 md:px-10">

        {/* Footer links */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-7">
          {footerColumns.map((column) => (
            <div key={column.title}>

              <h4 className="mb-4 text-[14px] font-bold">
                {column.title}
              </h4>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[11px] text-white transition hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="mt-12 border-t border-white/30" />

        {/* Lower footer */}
        <div className="flex flex-col gap-5 py-5 lg:flex-row lg:items-end lg:justify-between">

          {/* Left */}
          <div>

            <div className="flex flex-wrap items-center gap-2 text-[10px]">
              <a href="#" className="hover:underline">
                Home
              </a>

              <span>|</span>

              <a href="#" className="hover:underline">
                PAIA
              </a>

              <span>|</span>

              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>

              <span>|</span>

              <a href="#" className="hover:underline">
                POPIA
              </a>

              <span>|</span>

              <a href="#" className="hover:underline">
                Sitemap
              </a>
            </div>

            <p className="mt-4 text-[9px] leading-4">
              © Telkom SA SOC Limited. 2025 All Rights Reserved.
              Telkom Financial Services is an authorised Financial Services
              Provider – FSP no. 4603.
            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-3 lg:items-end">

            {/* Payment */}
            <div className="flex items-center gap-2 text-[10px]">
              <span>VISA</span>

              <span className="flex h-4 w-6 items-center justify-center rounded-full bg-orange-500 text-[7px] font-bold">
                MC
              </span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 text-[16px] font-bold">
              <a href="#" aria-label="LinkedIn">
                in
              </a>

              <a href="#" aria-label="WhatsApp">
                ◉
              </a>

              <a href="#" aria-label="YouTube">
                ▶
              </a>

              <a href="#" aria-label="X">
                X
              </a>

              <a href="#" aria-label="Facebook">
                f
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}