import Image from "next/image";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 flex flex-col items-center justify-between overflow-scroll bg-[#1e1e1e] pt-20 text-white">
      <div className="safe-space flex flex-col gap-6 text-center">
        <h1 className="mx-auto max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
          Poznaj kolejne tomy
          <br />
          „Wykładów Pisma Świętego”
        </h1>

        <p className="center-space leading-[1.4] font-semibold">
          „Boski Plan Wieków” to pierwszy tom serii Wykładów Pisma Świętego autorstwa Charlesa
          T.&nbsp;Russella. Całość składa się z&nbsp;kilku tomów, które rozwijają kolejne
          zagadnienia związane z&nbsp;Biblią i&nbsp;Bożym planem wobec ludzkości.
        </p>

        <p className="center-space leading-[1.4]">
          Jeśli ten materiał okaże się dla Ciebie wartościowy i&nbsp;będziesz chciał(a) sięgnąć po
          kolejne tomy, skontaktuj się z&nbsp;nami – chętnie przekażemy więcej informacji.
        </p>

        <button onClick={onClose} className="mx-auto mt-4 w-75 max-w-[90%] bg-white">
          <p className="py-5 text-center leading-1.5 font-semibold text-black">Skontaktuj się</p>
        </button>
      </div>

      <div className="relative mt-20 flex h-full min-h-70 w-full justify-center overflow-hidden">
        <div className="absolute top-0 flex">
          <Image
            src="/images/nadszedl-czas.png"
            alt=""
            width={260}
            height={300}
            style={{ position: "absolute", right: "150px", rotate: "-10deg", height: "auto" }}
            className="z-10"
          />

          <Image
            src="/images/przyjdz-krolestwo-twoje.png"
            alt=""
            width={260}
            height={300}
            style={{ position: "relative", top: "-20px", height: "auto" }}
            className="z-20"
          />

          <Image
            src="/images/walka-armagieddonu.png"
            alt=""
            width={260}
            height={300}
            style={{ position: "absolute", right: "-150px", rotate: "10deg", height: "auto" }}
            className="z-30"
          />
        </div>
      </div>
    </div>
  );
}
