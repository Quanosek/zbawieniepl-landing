import Link from "next/link";
import type { Route } from "next";

type RouteItem = {
  href: Route;
  title: string;
  description: string;
};

const routes: RouteItem[] = [
  {
    href: "/boski-plan-wiekow",
    title: "Boski Plan Wieków",
    description: "Landing strony książki z formularzem zapisu",
  },
  {
    href: "/dlaczego-warto",
    title: "Dlaczego warto czytać Biblię",
    description: "Landing strony e-booka z formularzem zapisu",
  },
];

export default function Page() {
  return (
    <div>
      <section className="safe-space min-h-screen py-20! md:py-38!">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl">Dostępne linki</h1>

          <p className="mt-5 max-w-[68ch] leading-normal text-[#505050]">
            Tutaj znajdziesz wszystkie dostępne linki utworzone w ramach tej strony oraz
            z&nbsp;łatwością będziesz mógł między nimi nawigować.
          </p>

          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {routes.map((route) => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className="group block h-full border border-[#d8d8d8] bg-white p-5 transition-colors hover:border-[#1e1e1e]"
                >
                  <p className="text-xl leading-tight font-semibold">{route.title}</p>
                  <p className="mt-2 text-sm leading-normal text-[#5a5a5a]">{route.description}</p>
                  <p className="mt-5 text-sm font-semibold text-[#1e1e1e] group-hover:underline">
                    Przejdz do strony
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
