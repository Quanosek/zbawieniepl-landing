"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Lightbulb } from "lucide-react";

import Header from "@/components/header";
import LeadForm from "@/components/lead-form";

export default function Page() {
  return (
    <div>
      <Header>
        <li>
          <Link href="#co-otrzymasz">
            <p>Co otrzymasz?</p>
          </Link>
        </li>

        <li>
          <Link href="#dlaczego-warto">
            <p>Dlaczego warto?</p>
          </Link>
        </li>

        <li>
          <Link href="#kontakt">
            <p>Kontakt</p>
          </Link>
        </li>
      </Header>

      <section className="relative pt-30 md:h-200 md:pt-0">
        <div className="safe-space relative z-20 flex flex-col items-start justify-between gap-8 text-white md:top-50 md:flex-row md:gap-12">
          <div className="ml-[3%] flex flex-col gap-6 md:ml-0 md:w-5/8">
            <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl">
              Pobierz darmowy PDF o&nbsp;tym, dlaczego warto czytać Biblię
            </h1>

            <p className="pr-5">
              Otrzymaj bezpłatnie e-book, który opowiada o&nbsp;tym, jak wartościową Księgą jest
              Pismo Święte oraz w&nbsp;jaki sposób może Ci pomóc.
            </p>

            <p className="pr-5">Wpisz adres e-mail, a&nbsp;wyślemy Ci e-book zupełnie za darmo.</p>
          </div>

          <LeadForm type="dlaczego-warto" />
        </div>

        <div className="absolute inset-0">
          <div className="gradient-right absolute inset-0 z-10" />

          <Image
            style={{ objectFit: "cover" }}
            src="/images/ludovic-fremondiere-386803-unsplash.jpg"
            alt=""
            draggable={false}
            priority
            fetchPriority="high"
            sizes="100vw"
            fill
          />
        </div>
      </section>

      <section id="co-otrzymasz" className="flex-col items-start justify-center pt-65 md:pt-0">
        <div className="center-space flex flex-col justify-center gap-6 text-center md:mt-16!">
          <h2 className="mx-auto max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
            Co od nas otrzymasz?
          </h2>

          <p className="font-semibold">
            E-book „Dlaczego warto czytać Biblię?” to przewodnik dla osób, które szukają
            w&nbsp;życiu sensu i&nbsp;pokoju.
          </p>

          <p>
            Pokazuje, jak lektura Pisma Świętego może pomóc lepiej poznać Boga, zrozumieć Jego plan
            i&nbsp;odnaleźć wskazówki pomocne na co dzień.
          </p>

          <p>W e-booku znajdziesz m.in.:</p>
        </div>

        <div className="safe-space my-12! flex flex-col gap-5 md:grid md:grid-cols-2">
          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Plan, który nadaje sens</h3>
              <p>
                Zobaczysz, jak Biblia pomaga spojrzeć na przeszłość, teraźniejszość
                i&nbsp;przyszłość z&nbsp;szerszej perspektywy.
              </p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Pomoc w&nbsp;codziennym życiu</h3>
              <p>
                Poznasz wskazówki, które mogą wspierać Cię w&nbsp;podejmowaniu decyzji
                i&nbsp;radzeniu sobie z&nbsp;codziennymi troskami, a&nbsp;także rozwijać
                cierpliwość, pokorę i&nbsp;miłość.
              </p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Poznanie Boga</h3>
              <p>
                Dowiesz się, jaki obraz Boga przedstawia Biblia i&nbsp;co mówi o&nbsp;Jego
                charakterze oraz podejściu do człowieka.
              </p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Siła w&nbsp;trudnych chwilach</h3>
              <p>
                Odkryjesz, jaką nadzieję i&nbsp;pocieszenie można znaleźć w&nbsp;Biblii, gdy
                przychodzą życiowe wyzwania.
              </p>
            </div>
          </div>
        </div>

        <button
          className="mx-auto mb-26 w-75 max-w-[90%] bg-[#e1d122] py-3 font-semibold text-black"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Uzupełnij formularz
        </button>
      </section>

      <section id="dlaczego-warto" className="overflow-hidden bg-[#1e1e1e] text-white">
        <div className="center-space z-10 text-center">
          <h2 className="mx-auto mt-20 max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
            Dlaczego warto się z&nbsp;tym zapoznać?
          </h2>

          <p className="mt-8 leading-[1.4] font-semibold">
            Pismo Święte pomaga szukać odpowiedzi na ważne życiowe pytania, lepiej poznać Boga
            i&nbsp;odnaleźć sens oraz pokój. Ten e-book przybliża jego przesłanie i&nbsp;pokazuje,
            jak może ono wspierać nas w&nbsp;codziennym życiu.
          </p>

          <ul className="mx-auto my-12 flex w-fit flex-col gap-4 text-left">
            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Lepiej zrozumiesz, jaki plan dla ludzi przedstawia Biblia</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>
                Poznasz biblijną perspektywę na trudności i&nbsp;nadzieję w&nbsp;trudnych chwilach
              </p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Lepiej poznasz charakter Boga i&nbsp;Jego podejście do człowieka</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>
                Dowiesz się, jak biblijne nauki pomagają rozwijać charakter i&nbsp;odróżniać prawdę
                od&nbsp;fałszu
              </p>
            </li>
          </ul>

          <button
            className="mx-auto mb-26 w-75 max-w-[90%] bg-[#e1d122] py-3 font-semibold text-black"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Uzupełnij formularz
          </button>
        </div>

        <div className="absolute -top-45 -left-65 z-0 h-250 w-250 opacity-5 md:opacity-15">
          <Image
            className="spread-shadow"
            src="/images/book-with-hand.png"
            alt=""
            fill
            loading="eager"
            draggable={false}
            style={{ objectFit: "contain", objectPosition: "left top" }}
          />
        </div>
      </section>

      <section id="kontakt" className="bg-[#f8f8f8] py-12">
        <div className="center-space flex flex-col justify-center gap-12">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="mx-auto max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
              Zamów bezpłatny egzemplarz
            </h2>
            <p className="max-w-[55ch] text-base leading-relaxed">
              Zostaw swój adres mailowy, a prześlemy Ci link, z którego pobierzesz ebook bezpłatnie.
            </p>
          </div>

          <div className="w-full px-3 sm:px-4 md:mx-8 md:w-auto">
            <LeadForm type="narodziny-jezusa" layout="inline" />
          </div>
        </div>
      </section>
    </div>
  );
}
