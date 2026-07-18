import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#cccccc]">
      <div className="safe-space flex flex-col pt-6! pb-8! md:flex-row md:items-center md:gap-12">
        <div className="relative ml-[3%] h-8 w-46 md:ml-0">
          <Image
            style={{
              objectFit: "contain",
              filter: "saturate(0) brightness(2)",
            }}
            src="/zbawieniepl.svg"
            alt="Zbawienie.pl"
            draggable={false}
            loading="eager"
            fill
          />
        </div>

        <div className="mt-2 ml-[3%] flex flex-col gap-2 text-sm text-[#ffffff] md:mt-0 md:ml-0">
          <p>
            Strona zbawienie.pl przedstawia Boski plan zbawienia ludzkości ukazany w Piśmie Świętym.
          </p>

          <p>
            <i>Bóg chce, aby wszyscy ludzie byli zbawieni...</i> – 1 Tym. 2,4-6
          </p>
        </div>
      </div>
    </footer>
  );
}
