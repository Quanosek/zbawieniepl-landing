import Link from "next/link";
import type { Route } from "next";
import { ArrowRight } from "lucide-react";

import Header from "@/components/header";

type RouteItem = {
  href: Route;
  title: string;
};

const routes: RouteItem[] = [
  {
    href: "/boski-plan-wiekow",
    title: "Boski Plan Wieków",
  },
  {
    href: "/dlaczego-warto",
    title: "Dlaczego warto czytać Biblię",
  },
  {
    href: "/narodziny-jezusa",
    title: "Kiedy naprawdę narodził się Pan Jezus",
  },
];

export default function Page() {
  return (
    <div>
      <Header />

      <section className="safe-space min-h-screen py-20! md:py-38!">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl">Dostępne linki</h1>

          <p className="mt-5 max-w-[68ch] leading-normal text-[#505050]">
            Tutaj znajdziesz wszystkie dostępne linki utworzone w ramach tej strony oraz
            z&nbsp;łatwością będziesz mógł między nimi nawigować.
          </p>

          <ul className="mt-10 flex flex-col gap-4">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className="group flex items-center justify-between gap-4 border border-[#d8d8d8] bg-white p-5 transition-colors hover:border-[#1e1e1e]"
                >
                  <div>
                    <p className="text-xl leading-tight font-semibold">{route.title}</p>
                    <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#1e1e1e] group-hover:underline">
                      Przejdź do strony
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
