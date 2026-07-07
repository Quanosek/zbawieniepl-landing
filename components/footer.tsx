import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#cccccc]">
      <div className="safe-space flex items-center gap-12 py-8">
        <div className="relative h-8 w-46">
          <Image
            style={{
              objectFit: "contain",
              filter: "saturate(0) brightness(2)",
            }}
            src="/zbawienie.svg"
            alt="Zbawienie.pl"
            draggable={false}
            loading="eager"
            fill
          />
        </div>

        <div className="flex flex-col gap-1 text-[#ffffff]">
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
