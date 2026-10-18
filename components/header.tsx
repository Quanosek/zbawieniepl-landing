import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="fixed top-0 z-100 w-full bg-[rgba(0,0,0,0.7)]">
      <div className="safe-space flex items-center justify-between md:min-h-22">
        <Link href="https://zbawienie.pl" className="relative h-6 w-46 md:h-8">
          <Image
            className="object-contain"
            src="/zbawieniepl.svg"
            alt="Zbawienie.pl"
            draggable={false}
            loading="eager"
            fill
          />
        </Link>

        <ul className="header-navigation hidden items-stretch gap-8 self-stretch font-bold text-white uppercase md:flex">
          {children}
        </ul>

        <Link
          href="https://zbawienie.pl"
          className="relative bottom-0.5 my-3.5 block p-2 opacity-0 md:hidden"
        >
          <Menu size={16} strokeWidth={4} color="#ffffff" />
        </Link>
      </div>
    </header>
  );
}
