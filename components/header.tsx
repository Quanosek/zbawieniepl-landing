import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 z-100 w-full bg-[rgba(0,0,0,0.7)]">
      <div className="safe-space flex items-center justify-between">
        <Link href="https://zbawienie.pl" className="relative h-6 w-46 md:h-8">
          <Image
            style={{ objectFit: "contain" }}
            src="/zbawienie.svg"
            alt="Zbawienie.pl"
            draggable={false}
            loading="eager"
            fill
          />
        </Link>

        <Link href="https://zbawienie.pl" className="my-6 hidden md:block">
          <ul className="flex items-center gap-8 py-2 font-bold text-white uppercase">
            <li>
              <p>Artykuły</p>
            </li>

            <li>
              <p>Multimedia</p>
            </li>

            <li>
              <p>Księga gości</p>
            </li>

            <li>
              <p>Kontakt</p>
            </li>

            <li>
              <Search size={16} strokeWidth={3} color="#ffffff" />
            </li>
          </ul>
        </Link>

        <Link href="https://zbawienie.pl" className="my-3 block py-2 md:hidden">
          <Menu size={22} strokeWidth={3} color="#ffffff" />
        </Link>
      </div>
    </header>
  );
}
