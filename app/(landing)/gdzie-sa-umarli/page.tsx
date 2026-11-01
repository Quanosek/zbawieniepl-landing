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
              Pobierz darmowy PDF i&nbsp;poznaj odpowiedź na pytanie: Gdzie są umarli?
            </h1>

            <p className="pr-5">
              Otrzymasz bezpłatną publikację, która w&nbsp;logiczny sposób, opierając się na Biblii
              daje odpowiedź na powyższe pytanie.
            </p>

            <p className="pr-5">
              Wypełnij formularz obok i&nbsp;zapisz się do newslettera, a&nbsp;wyślemy Ci plik
              e-mailem.
            </p>
          </div>

          <LeadForm type="gdzie-sa-umarli" />
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
            E-book „Gdzie są umarli” w&nbsp;jasny, logiczny i&nbsp;spójny z&nbsp;nauką Pisma
            Świętego sposób wyjaśnia co tak naprawdę dzieje się z&nbsp;człowiekiem po śmierci.
          </p>

          <p>
            Biblia jest jedyną Księgą, która opowiada prawdziwą historię stworzenia człowieka, jego
            upadku, kary za grzech i&nbsp;nadziei zbawienia. W&nbsp;wielu miejscach, w&nbsp;sposób
            pośredni jak i&nbsp;bezpośredni daje nam również informacje o&nbsp;tym, co dzieje się
            z&nbsp;tymi, którzy umarli.
          </p>

          <p>W&nbsp;środku znajdziesz m.in.:</p>
        </div>

        <div className="safe-space my-12! flex flex-col gap-5 md:grid md:grid-cols-2">
          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Odpowiedź na nurtujące ludzkość pytanie</h3>
              <p>Biblia uczy nas o&nbsp;tym zarówno w&nbsp;Starym jak i&nbsp;Nowym Testamencie</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Logiczne argumenty</h3>
              <p>
                Zbiór wersetów i&nbsp;faktów, które w&nbsp;logiczny sposób tłumaczą to zagadnienie
              </p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Konfrontacje różnych poglądów</h3>
              <p>
                Odniesienie do poglądów różnych religii chrześcijańskich i&nbsp;ich analiza
                w&nbsp;świetle Słowa Bożego
              </p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Nadzieję</h3>
              <p>
                Odpowiedź jaką znajdujemy w&nbsp;Piśmie Świętym jest najpiękniejszą z&nbsp;możliwych
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
            Dlaczego warto zapoznać się z&nbsp;tym tekstem?
          </h2>

          <p className="mt-8 leading-[1.4] font-semibold">
            Ludzie od wieków zadają sobie pytanie, co dzieje się z&nbsp;tymi, którzy kończą swoje
            życie na ziemi. Mnogość poglądów i&nbsp;teorii na ten temat jest ogromna, ale prawda na
            ten temat jest tylko jedna.
          </p>

          <p className="mt-8 leading-[1.4] font-semibold">
            Każdy z&nbsp;nas chciałby wiedzieć, gdzie znajdują się nasi bliscy, którzy już odeszli.
            Chcielibyśmy wiedzieć też, czy jeszcze kiedyś się z&nbsp;nimi spotkamy?
          </p>

          <p className="mt-8 leading-[1.4] font-semibold">
            Odpowiedzi na te pytania daje nam Pismo Święte i&nbsp;nie są to odpowiedzi ukryte pod
            ludzkimi filozofiami czy tajemnicami, ale odpowiedzi proste, logiczne, przekazane nam
            przez naszego Stwórcę.
          </p>

          <ul className="mx-auto my-12 flex w-fit flex-col gap-4 text-left">
            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>
                Znajdziesz odpowiedź na jedno z&nbsp;najważniejszych pytań jakie zadaje sobie
                ludzkość
              </p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Zauważysz jak cudowny, miłosierny i&nbsp;sprawiedliwy jest nasz Bóg</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Dostrzeżesz jak dalekimi od prawdy są ludzkie teorie</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Poznasz o&nbsp;ile wspanialsza jest prawda o&nbsp;tym gdzie są umarli</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Zyskasz nadzieję, której nikt nie będzie mógł Ci odebrać</p>
            </li>
          </ul>

          <button
            className="mx-auto mb-26 w-75 max-w-[90%] bg-[#e1d122] py-3 font-semibold text-black"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Uzupełnij formularz
          </button>
        </div>

        <div className="absolute -top-10 -left-65 z-0 h-250 w-250 opacity-5 md:opacity-15">
          <Image
            className="spread-shadow"
            src="/images/great-tree.png"
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
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="mx-auto max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
              Zamów bezpłatny egzemplarz
            </h2>

            <p className="max-w-[55ch] text-base leading-relaxed">
              Zostaw swój adres mailowy, a&nbsp;prześlemy Ci link, z&nbsp;którego pobierzesz e-book
              bezpłatnie.
            </p>
          </div>

          <div className="w-full px-3 sm:px-4 md:mx-8 md:w-auto">
            <LeadForm type="gdzie-sa-umarli" layout="inline" />
          </div>
        </div>
      </section>
    </div>
  );
}
