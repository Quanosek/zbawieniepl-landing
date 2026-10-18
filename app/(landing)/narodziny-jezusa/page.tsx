"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, Lightbulb } from "lucide-react";

import EcomailTracker from "@/components/ecomail-tracker";
import Header from "@/components/header";
import LeadForm from "@/components/lead-form";

export default function Page() {
  return (
    <div>
      <EcomailTracker />

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
              Pobierz darmowy PDF i&nbsp;dowiedz się, kiedy naprawdę narodził się Pan Jezus
            </h1>

            <p className="pr-5">
              Proponujemy Ci ciekawe opracowanie, które wyjaśnia, kiedy naprawdę narodził się nasz
              Zbawiciel.
            </p>

            <p className="pr-5">Wpisz adres e-mail, a&nbsp;wyślemy Ci e-book zupełnie za darmo.</p>
          </div>

          <LeadForm type="narodziny-jezusa" />
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
            E-book „Kiedy naprawdę narodził się Pan Jezus” zawiera dokładny i&nbsp;logiczny wywód
            oparty zarówno na Biblii, jak i&nbsp;na wielu źródłach historycznych, wskazujący
            rzeczywistą datę narodzin Pana Jezusa.
          </p>

          <p>W e-booku znajdziesz m.in.:</p>
        </div>

        <div className="safe-space my-12! flex flex-col gap-5 md:grid md:grid-cols-2">
          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Biblia jako wspaniałe źródło informacji</h3>
              <p>
                Biblia zawiera wiele interesujących szczegółów i&nbsp;proroctw dotyczących narodzin
                Pana Jezusa.
              </p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Źródła historyczne</h3>
              <p>Dostępne źródła historyczne rzucają nowe światło na czas narodzin Pana Jezusa.</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Ciekawe fakty</h3>
              <p>Biblia skrywa niezwykłe szczegóły, które tworzą spójny i&nbsp;harmonijny obraz.</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Spójność wielu przekazów</h3>
              <p>Analiza różnych źródeł pozwala wyciągnąć precyzyjne wnioski.</p>
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
            Dlaczego warto zapoznać się z&nbsp;tym tekstem?
          </h2>

          <p className="mt-8 leading-[1.4] font-semibold">
            Często można spotkać się z&nbsp;poglądem o&nbsp;konflikcie świeckich źródeł
            historycznych i&nbsp;Pisma Świętego. Prawda jest jednak zupełnie inna: Biblia jest
            wspaniałym źródłem informacji historycznych, geograficznych i&nbsp;kulturowych.
          </p>

          <p className="mt-8 leading-[1.4] font-semibold">
            Nauka odkrywa coraz więcej dowodów potwierdzających zapisy Pisma Świętego.
          </p>

          <p className="mt-8 leading-[1.4] font-semibold">
            Odkryj, jak zgodne są te dwa źródła i&nbsp;jak pomagają odpowiedzieć na pytanie: kiedy
            naprawdę narodził się Pan Jezus.
          </p>

          <ul className="mx-auto my-12 flex w-fit flex-col gap-4 text-left">
            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Zauważysz niezwykłą spójność i&nbsp;precyzję Biblii</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Poznasz aktualną wiedzę historyczną</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Dowiesz się, jakie ciekawe fakty skrywa Słowo Boże</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Znajdziesz odpowiedź na pytanie: czy właściwie określamy czas „naszej ery”?</p>
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
            src="/images/great-star.png"
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
