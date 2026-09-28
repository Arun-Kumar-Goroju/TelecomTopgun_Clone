export default function Footer() {
  return (
    <footer className="text-white">

    
      <div className="bg-[#008fe0]">
        <div className="mx-auto max-w-[1270px] px-6 py-8">

          <h2 className="text-2xl font-bold">
            Telkom
          </h2>

          <div className="mt-5 flex flex-wrap justify-center gap-6 text-sm font-semibold md:justify-start">

 
  <a href="#" className="flex items-center gap-2">
    <img
      src="/images/chat.png"
      alt="Chat"
      className="h-5 w-auto"
    />
    Chat to us online
  </a>


  <a href="#" className="flex items-center gap-2">
    <img
      src="/images/help.png"
      alt="Help"
      className="h-4 w-auto"
    />
    Get help
  </a>


  <a href="#" className="flex items-center gap-2">
    <img
      src="/images/coverage.png"
      alt="Coverage"
      className="h-5 w-auto"
    />
    Check coverage
  </a>

 
  <a href="#" className="flex items-center gap-2">
    <img
      src="/images/store.png"
      alt="Store"
      className="h-4 w-auto"
    />
    Find a store
  </a>


  <a href="#" className="flex items-center gap-2">
    <img
      src="/images/blog.png"
      alt="Blog"
      className="h-4 w-auto"
    />
    InTouchBlog
  </a>

</div>

        </div>
      </div>


    
      <div className="bg-[#0799ed]">
        <div className="mx-auto max-w-[1270px] px-6 py-8">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-7">

            <div>
              <h3 className="text-ms">
                Telkom Personal
              </h3>

              <p className="mt-4 text-xs">Mobile</p>
              <p className="mt-2 text-xs">Devices</p>
              <p className="mt-2 text-xs">Home internet</p>
              <p className="mt-2 text-xs">Smart home</p>
              <p className="mt-2 text-xs">Lifestyle</p>
              <p className="mt-2 text-xs">Financial services</p>
              <p className="mt-2 text-xs">Telkom Learn</p>
            </div>


            <div>
              <h3 className="text-ms">
                Telkom Business
              </h3>

              <p className="mt-4 text-xs">Mobile</p>
              <p className="mt-2 text-xs">Devices</p>
              <p className="mt-2 text-xs">Internet solutions</p>
              <p className="mt-2 text-xs">Software</p>
              <p className="mt-2 text-xs">Smart office</p>
              <p className="mt-2 text-xs">Lifestyle</p>
              <p className="mt-2 text-xs">Financial services</p>
              <p className="mt-2 text-xs">Telkom Learn</p>
            </div>


            <div>
              <h3 className="text-ms">
                Account
              </h3>

              <p className="mt-4 text-xs">Login / register</p>
              <p className="mt-2 text-xs">Check order status</p>
              <p className="mt-2 text-xs">Pay my bill</p>
              <p className="mt-2 text-xs">Cancellations</p>
            </div>


            <div>
              <h3 className="text-ms">
                About us
              </h3>

              <p className="mt-4 text-xs">Who we are</p>
              <p className="mt-2 text-xs">Telkom group</p>
              <p className="mt-2 text-xs">Media Center</p>
              <p className="mt-2 text-xs">Sustainability</p>
              <p className="mt-2 text-xs">Investor Relations</p>
              <p className="mt-2 text-xs">Careers</p>
              <p className="mt-2 text-xs">Telkom Foundation</p>
            </div>


            <div>
              <h3 className="text-ms">
                Marketplace
              </h3>

              <p className="mt-4 text-xs">
                Yep!
              </p>
            </div>


            <div>
              <h3 className="text-ms">
                Help & support
              </h3>

              <p className="mt-4 text-xs">Help guide</p>
              <p className="mt-2 text-xs">Get help</p>
              <p className="mt-2 text-xs">Find a store</p>
              <p className="mt-2 text-xs">Check coverage</p>
              <p className="mt-2 text-xs">Crime Hotline</p>
            </div>


            <div>
              <h3 className="text-ms">
                Get the right deal
              </h3>

              <p className="mt-4 text-xs">
                Deals
              </p>
            </div>

          </div>

        </div>
      </div>


<div className="bg-[#0799ed]">
  <div className="mx-auto max-w-[1070px] px-6 py-5">

    <div className="border-t border-white/30 pt-4">

      {/* Bottom Links */}
      <div className="flex flex-wrap gap-3 text-xs">

        <a href="#">Home</a>
        <span>|</span>

        <a href="#">PAIA</a>
        <span>|</span>

        <a href="#">Terms & Conditions</a>
        <span>|</span>

        <a href="#">POPIA</a>
        <span>|</span>

        <a href="#">Sitemap</a>

      </div>

      <p className="mt-3 text-xs">
        © Telkom SA SOC Limited. 2025 All Rights Reserved.
      </p>

      <div className="mt-5 flex flex-col items-center gap-3 md:items-end">

        <div className="flex items-center gap-2">

          <img
            src="/images/visa.png"
            alt="VISA"
            className="h-5 w-auto"
          />

          <img
            src="/images/mastercard.svg"
            alt="Mastercard"
            className="h-5 w-auto"
          />

        </div>

        <div className="flex items-center gap-4">

          <img
            src="/images/linkedin.png"
            alt="LinkedIn"
            className="h-5 w-auto"
          />

          <img
            src="/images/whatsapp.png"
            alt="WhatsApp"
            className="h-5 w-auto"
          />

          <img
            src="/images/youtube.png"
            alt="YouTube"
            className="h-5 w-auto"
          />

          <img
            src="/images/x.png"
            alt="X"
            className="h-5 w-auto"
          />

          <img
            src="/images/facebook.png"
            alt="Facebook"
            className="h-5 w-auto"
          />

        </div>

      </div>

    </div>

  </div>
</div>

    </footer>
  );
}