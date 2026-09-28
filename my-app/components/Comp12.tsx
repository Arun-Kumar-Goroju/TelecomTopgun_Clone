type FooterColumn = {
  title: string;
  links: string[];
};

export default function Comp12() {
  const footerColumns: FooterColumn[] = [
    {
      title: "Telkom Personal",
      links: [
        "Mobile",
        "Devices",
        "Home internet",
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
    <footer className="w-full bg-[#0099FF] text-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1370px]
          flex-col
          px-5
          py-8
          sm:px-6
          sm:py-10
          md:px-8
          lg:px-10
          lg:py-12
          xl:px-0
          xl:py-[32px]
        "
      >
        
        <div
          className="
            flex
            w-full
            flex-col
            border-b
            border-white/30
            pb-5
            sm:pb-6
            lg:pb-[24px]
          "
        >
         
          <div className="w-full">
            <div
              className="
                m-0
                text-[18px]
                font-bold
                leading-[22px]
                text-white
                sm:text-[20px]
                sm:leading-[24px]
              "
            >
              Telkom
            </div>
          </div>

        
          <div
            className="
              mt-3
              flex
              w-full
              flex-wrap
              items-center
              gap-x-5
              gap-y-3
              text-[9px]
              font-normal
              leading-[13px]
              sm:mt-4
              sm:gap-x-6
              sm:text-[10px]
              sm:leading-[14px]
              lg:mt-[10px]
              lg:gap-x-[18px]
            "
          >
           
            <a
              href="#"
              className="
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                text-white
                hover:underline
              "
            >
              <img
                src="/Chat-circle-1.png"
                alt=""
                className="h-[12px] w-[12px] object-contain"
              />
              <span>Chat to us online</span>
            </a>

            
            <a
              href="#"
              className="
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                text-white
                hover:underline
              "
            >
              <img
                src="/help1.png"
                alt=""
                className="h-[12px] w-[12px] object-contain"
              />
              <span>Get help</span>
            </a>
 
            <a
              href="#"
              className="
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                text-white
                hover:underline
              "
            >
              <img
                src="/Check_Coverage.png"
                alt=""
                className="h-[12px] w-[12px] object-contain"
              />
              <span>Check coverage</span>
            </a>

            
            <a
              href="#"
              className="
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                text-white
                hover:underline
              "
            >
              <img
                src="/Store-1.png"
                alt=""
                className="h-[12px] w-[12px] object-contain"
              />
              <span>Find a store</span>
            </a>

            
            <a
              href="#"
              className="
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                text-white
                hover:underline
              "
            >
              <img
                src="/Book-2.png"
                alt=""
                className="h-[12px] w-[12px] object-contain"
              />
              <span>InTouch/Blog</span>
            </a>
          </div>
        </div>

        
        <div
          className="
            grid
            grid-cols-2
            gap-x-6
            gap-y-8
            py-8
            sm:grid-cols-2
            sm:gap-x-8
            md:grid-cols-3
            md:gap-y-10
            lg:grid-cols-7
            lg:gap-x-6
            lg:gap-y-0
            lg:py-[24px]
          "
        >
          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="min-w-0"
            >
              
              <h4
                className="
                  m-0
                  mb-3
                  text-[10px]
                  font-bold
                  leading-[14px]
                  text-white
                  sm:text-[11px]
                  sm:leading-[15px]
                  lg:mb-[10px]
                  lg:text-[10px]
                  lg:leading-[14px]
                "
              >
                {column.title}
              </h4>

             
              <ul
                className="
                  m-0
                  list-none
                  space-y-2
                  p-0
                  lg:space-y-[6px]
                "
              >
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        text-[9px]
                        font-normal
                        leading-[13px]
                        text-white
                        transition
                        hover:underline
                        sm:text-[10px]
                        sm:leading-[14px]
                        lg:text-[9px]
                        lg:leading-[13px]
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="w-full border-t border-white/30" />

        
        <div
          className="
            flex
            w-full
            flex-col
            gap-6
            pt-5
            sm:pt-6
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-8
            lg:pt-[16px]
          "
        >
          
          <div className="min-w-0">
            
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-x-2
                gap-y-1
                text-[8px]
                leading-[12px]
                sm:text-[9px]
                sm:leading-[13px]
              "
            >
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

            
            <p
              className="
                m-0
                mt-3
                max-w-[850px]
                text-[7px]
                leading-[11px]
                sm:text-[8px]
                sm:leading-[12px]
              "
            >
              © Telkom SA SOC Limited. 2025 All Rights Reserved. Telkom
              Financial Services is an authorised Financial Services
              Provider – FSP no. 4603.
            </p>
          </div>

          
          <div
            className="
              flex
              flex-col
              items-start
              gap-3
              lg:items-end
            "
          >
            
            <div className="flex items-center gap-2">
              <img
                src="/VISA.png"
                alt="Visa"
                className="h-[18px] w-auto object-contain"
              />

              <img
                src="/MasterCard.png"
                alt="Mastercard"
                className="h-[18px] w-auto object-contain"
              />
            </div>

            
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-5 w-5 items-center justify-center"
              >
                <img
                  src="/LinkedIn.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-5 w-5 items-center justify-center"
              >
                <img
                  src="/Whatsapp.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-5 w-5 items-center justify-center"
              >
                <img
                  src="/YouTube.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-5 w-5 items-center justify-center"
              >
                <img
                  src="/Twitter.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-5 w-5 items-center justify-center"
              >
                <img
                  src="/Facebook.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}