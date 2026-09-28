type VoucherCardProps = {
  price: string;
  validity: string;
  speed: string;
  downloadSpeed: string;
};

export default function VoucherCard({
  price,
  validity,
  speed,
  downloadSpeed,
}: VoucherCardProps) {
  return (
    <div className="w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-4 shadow-[0_2px_5px_rgba(0,0,0,0.15)]">

      <div className="flex justify-center">
        <img
          src="/images/voucher-icon.svg"
          alt="Voucher"
          className="h-auto w-[232px]"
        />
      </div>

      <div className="mt-3 flex justify-center">
        <img
          src="/images/openserve.svg"
          alt="Openserve"
          className="h-[34px] w-auto"
        />
      </div>

      <div className="mt-4">

        <h3 className="text-[17px] font-extrabold leading-[18px] text-[#0099e8]">
          Prepaid Compact
          <br />
          Fibre Voucher
        </h3>

        <p className="mt-2 text-[15px] font-bold italic leading-[16px] text-[#005b96]">
          {validity} recharge
        </p>

        <p className="mt-1 text-[12px] font-medium text-[#7b8790]">
          ↓ {downloadSpeed} download
        </p>

      </div>

      <div className="mt-5 rounded-md bg-[#e3f4fc] px-2 py-2">

        <p className="text-[23px] font-extrabold leading-[24px] text-[#005b96]">
          {price}
        </p>

        <p className="mt-1 text-[11px] font-bold text-[#005b96]">
          Once-off
        </p>

      </div>

      <button
        type="button"
        className="mt-3 w-full rounded-md bg-[#8bea00] py-2.5 text-[15px] font-bold text-[#005b00]"
      >
        Buy voucher
      </button>

    </div>
  );
}