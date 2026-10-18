"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BadgeCheck, Lightbulb } from "lucide-react";

import EcomailTracker from "@/components/ecomail-tracker";
import Header from "@/components/header";
import LeadForm from "@/components/lead-form";
import SuccessModal from "@/components/success-modal";

export default function Page() {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  return (
    <div className={isSuccessModalOpen ? "max-h-screen overflow-hidden" : ""}>
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
          <Link href="#jakie-tematy">
            <p>Jakie tematy?</p>
          </Link>
        </li>

        <li>
          <Link href="#kontakt">
            <p>Kontakt</p>
          </Link>
        </li>
      </Header>

      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} />

      <section className="relative pt-30 md:h-225 md:pt-0">
        <div className="safe-space relative z-20 flex flex-col items-start justify-between gap-8 text-white md:top-50 md:flex-row md:gap-12">
          <div className="ml-[3%] flex flex-col gap-6 md:ml-0 md:w-5/8">
            <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl">
              Pobierz darmowy PDF i&nbsp;poznaj Boży plan zapisany w&nbsp;Biblii
            </h1>

            <p className="pr-5">
              Otrzymaj bezpłatnie pełną książkę, która w&nbsp;logiczny i&nbsp;przejrzysty sposób
              wyjaśnia główne nauki Biblii oraz Boży plan wobec człowieka.
            </p>

            <p className="pr-5">
              Wypełnij formularz obok i&nbsp;zapisz się do newslettera, a&nbsp;wyślemy Ci plik
              e-mailem.
            </p>
          </div>

          <LeadForm type="boski-plan-wiekow" onSuccess={() => setIsSuccessModalOpen(true)} />
        </div>

        <div className="absolute inset-0">
          <div className="gradient-right absolute inset-0 z-10" />

          <Image
            style={{ objectFit: "cover" }}
            src="/images/background-wallpaper.jpg"
            alt=""
            draggable={false}
            priority
            fetchPriority="high"
            sizes="100vw"
            fill
          />
        </div>
      </section>

      <section id="co-otrzymasz" className="flex-col items-start justify-center pt-45.5 md:pt-0">
        <div className="absolute -top-60 z-30 mx-auto hidden h-140 w-full md:block">
          <Image
            src="/images/boski-plan-wiekow.png"
            alt="Boski Plan Wieków"
            className="spread-shadow"
            fill
            sizes="(min-width: 768px) 100vw, 0px"
            loading="eager"
            draggable={false}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="spread-shadow-subtle relative block w-full flex-1 md:hidden">
          <div className="relative my-5 h-75 w-full flex-1 overflow-hidden">
            <Image
              src="/images/boski-plan-wiekow.png"
              alt="Boski Plan Wieków"
              className="scale-[1.2]"
              fill
              sizes="(max-width: 768px) 95vw, 100vw"
              loading="eager"
              draggable={false}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>

        <div className="center-space flex flex-col justify-center gap-6 text-center md:mt-72!">
          <h2 className="mx-auto max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
            Co od nas otrzymasz?
          </h2>

          <p className="font-semibold">
            „Boski Plan Wieków” to pierwszy tom klasycznego dzieła Charlesa T. Russella, które
            w&nbsp;uporządkowany sposób przedstawia główne nauki Biblii jako spójny i&nbsp;logiczny
            plan Boga wobec ludzkości.
          </p>

          <p>
            Autor pokazuje, jak wydarzenia przeszłości, teraźniejszości i&nbsp;przyszłości łączą się
            w&nbsp;jedną całość - wyjaśnia m.in. sens istnienia zła, rolę Jezusa Chrystusa oraz
            nadzieję na odnowienie świata i&nbsp;perspektywę życia wiecznego dla wszystkich ludzi.
          </p>

          <p>W środku znajdziesz m.in.:</p>
        </div>

        <div className="safe-space my-12! flex flex-col gap-5 md:grid md:grid-cols-2">
          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Spójne wyjaśnienie Biblii</h3>
              <p>Jak różne jej części łączą się w&nbsp;spójny plan Boga</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Nadzieja na przyszłość</h3>
              <p>Wizję odnowienia świata i&nbsp;szansę na życie wieczne dla wszystkich</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Zrozumienie roli Jezusa Chrystusa</h3>
              <p>Kim jest Jezus Chrystus i&nbsp;jaką rolę pełni w&nbsp;przyszłości ludzkości</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Odpowiedzi na trudne pytania</h3>
              <p>Dlaczego istnieje zło i&nbsp;jakie miejsce zajmuje w&nbsp;Bożym zamyśle</p>
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
            Wiele osób czyta Biblię, ale ma poczucie, że trudno zrozumieć ją jako całość. Ten
            materiał pomaga spojrzeć na nią w&nbsp;uporządkowany sposób i&nbsp;odnaleźć odpowiedzi
            na pytania, które często pozostają bez jasnej odpowiedzi.
          </p>

          <ul className="mx-auto my-12 flex w-fit flex-col gap-4 text-left">
            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Zobaczysz Biblię jako spójną całość, a&nbsp;nie zbiór oderwanych fragmentów</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Lepiej zrozumiesz tematy, które często budzą wątpliwości i&nbsp;pytania</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Zyskasz prostsze spojrzenie na trudne zagadnienia</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Będziesz mógł samodzielnie zweryfikować przedstawione wnioski</p>
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

      <section id="jakie-tematy" className="flex-col items-center bg-[#f0f0f0]">
        <div className="center-space text-center">
          <h2 className="mx-auto mt-20 max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
            Jakie tematy znajdziesz w&nbsp;środku?
          </h2>

          <p className="mt-8 leading-[1.4]">
            Materiał porusza najważniejsze zagadnienia związane z&nbsp;Biblią i&nbsp;Bożym planem
            wobec ludzkości - w&nbsp;uporządkowany i&nbsp;zrozumiały sposób.
          </p>

          <p className="mt-6 leading-[1.4]">Oto część z&nbsp;nich:</p>

          <div className="mt-8 mb-12 flex flex-col bg-white px-6 py-7 text-start md:px-18 md:py-12">
            <ol>
              <li>
                <span>1</span>
                <p>Czy Biblia jest wiarygodna i&nbsp;jak ją rozumieć?</p>
              </li>

              <li>
                <span>2</span>
                <p>Czy Bóg naprawdę istnieje i&nbsp;jaki ma charakter?</p>
              </li>

              <li>
                <span>3</span>
                <p>Dlaczego na świecie istnieją zło i&nbsp;cierpienie?</p>
              </li>

              <li>
                <span>4</span>
                <p>Jaki jest cel życia człowieka?</p>
              </li>

              <li>
                <span>5</span>
                <p>Czym jest „dzień sądu” i&nbsp;czy należy się go obawiać?</p>
              </li>

              <li>
                <span>6</span>
                <p>Co oznacza powrót Chrystusa?</p>
              </li>

              <li>
                <span>7</span>
                <p>Jaką rolę w&nbsp;Bożym planie odgrywa Jezus Chrystus?</p>
              </li>

              <li>
                <span>8</span>
                <p>Na czym będzie polegało „Królestwo Boże”?</p>
              </li>

              <li>
                <span>9</span>
                <p>Czy wszyscy ludzie mają szansę na życie wieczne?</p>
              </li>

              <li>
                <span>10</span>
                <p>Jak wygląda przyszłość świata według Biblii?</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-[#1e1e1e] py-12 text-white">
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
