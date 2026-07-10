import Image from "next/image";
import { X } from "lucide-react";

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const handleButtonClick = () => {
    window.location.href = "mailto:redakcja@zbawienie.pl";
    onClose();
  };

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-200 flex items-end justify-center overflow-hidden bg-black/60 transition-opacity duration-500 ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="flex h-full w-full flex-col justify-between overflow-x-hidden overflow-y-auto bg-[#1e1e1e] pt-20 text-white transition-transform duration-500 ease-out"
        style={{ transform: isOpen ? "translateY(0)" : "translateY(100%)", colorScheme: "dark" }}
      >
        <button className="absolute top-0 right-0 z-50 m-6 p-1" onClick={onClose}>
          <X size={28} className="absolute top-5 right-5 cursor-pointer" />
        </button>

        <div className="safe-space flex flex-col gap-6 pb-10 text-center">
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

          <button onClick={handleButtonClick} className="mx-auto mt-4 w-75 max-w-[90%] bg-white">
            <p className="py-5 text-center leading-1.5 font-semibold text-black">Skontaktuj się</p>
          </button>
        </div>

        <div className="flex h-72 w-full shrink-0 items-start justify-center overflow-hidden">
          <div className="relative flex">
            <Image
              src="/images/nadszedl-czas.png"
              alt=""
              width={260}
              height={300}
              style={{
                position: "absolute",
                right: "190px",
                top: "-5px",
                rotate: "-10deg",
                height: "auto",
                width: "auto",
              }}
              className="z-30"
            />

            <Image
              src="/images/przyjdz-krolestwo-twoje.png"
              alt=""
              width={260}
              height={300}
              style={{ position: "relative", top: "-20px", height: "auto", width: "auto" }}
              className="z-20"
            />

            <Image
              src="/images/walka-armagieddonu.png"
              alt=""
              width={260}
              height={300}
              style={{
                position: "absolute",
                right: "-195px",
                top: "-5px",
                rotate: "10deg",
                height: "auto",
                width: "auto",
              }}
              className="z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
