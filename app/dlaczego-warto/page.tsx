"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeCheck, Lightbulb } from "lucide-react";

import LeadForm from "@/components/lead-form";

export default function Page() {
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (!isSent) return;

    const timeoutId = window.setTimeout(() => {
      setIsSent(false);
    }, 3_000);

    return () => window.clearTimeout(timeoutId);
  }, [isSent]);

  return (
    <div>
      <section className="relative pt-30 md:h-225 md:pt-0">
        <div className="safe-space relative z-20 flex flex-col items-start justify-between gap-8 text-white md:top-50 md:flex-row md:gap-12">
          <div className="ml-[3%] flex flex-col gap-6 md:ml-0 md:w-5/8">
            <h1 className="text-4xl leading-[1.2] font-bold md:text-5xl">
              Pobierz darmowy PDF o&nbsp;tym, dlaczego warto czytać Biblię
            </h1>

            <p className="pr-5">
              Otrzymaj bezpłatnie e-book, który opowiada o&nbsp;tym, jak wartościową Księgą jest
              Pismo Święte oraz w&nbsp;jaki sposób może Ci pomóc.
            </p>

            <p className="pr-5">
              Podaj e&#8209;mail, a&nbsp;wyślemy Ci PDF.
              <br />
              Poniżej możesz sprawdzić, jakie tematy znajdziesz w&nbsp;środku.
            </p>
          </div>

          <LeadForm type="dlaczego-warto" isSent={isSent} onSuccess={() => setIsSent(true)} />
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

      <section className="flex-col items-start justify-center pt-45.5 md:pt-0">
        <div className="absolute -top-45 z-30 mx-auto hidden h-100 w-full md:block">
          <Image
            src="/images/dlaczego-warto-cover.png"
            alt="Dlaczego warto czytać Biblię"
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
              src="/images/dlaczego-warto-cover.png"
              alt="Dlaczego warto czytać Biblię"
              className="scale-[0.85]"
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

          <p className="font-semibold">E-book o&nbsp;tym „Dlaczego warto czytać Biblię”.</p>

          <p>Jest to przewodnik dla tych, którzy szukają w&nbsp;życiu sensu i&nbsp;spokoju.</p>

          <p>W środku znajdziesz m.in.:</p>
        </div>

        <div className="safe-space my-12! flex flex-col gap-5 md:grid md:grid-cols-2">
          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <h3>Co Biblia mówi o&nbsp;Bożym Planie?</h3>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <h3>W&nbsp;jaki sposób pomaga nam w&nbsp;codziennym życiu?</h3>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <h3>Jaki na prawdę jest Pan Bóg?</h3>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <h3>Skąd wziąć siłę by pokonywać życiowe trudności?</h3>
          </div>
        </div>

        <button
          className="mx-auto mb-26 w-75 max-w-[90%] bg-[#202020] py-3 font-semibold text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Uzupełnij formularz
        </button>
      </section>

      <section className="overflow-hidden bg-[#1e1e1e] text-white">
        <div className="center-space z-10 text-center">
          <h2 className="mx-auto mt-20 max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
            Dlaczego warto się z&nbsp;tym zapoznać?
          </h2>

          <p className="mt-8 leading-[1.4] font-semibold">
            Pismo Święte to miejsce, w&nbsp;którym możemy znaleźć odpowiedzi na najważniejsze
            życiowe pytania.
          </p>

          <ul className="mx-auto my-12 flex w-fit flex-col gap-4 text-left">
            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Przekonasz się, że Pan Bóg ma plan i&nbsp;Ty jesteś jego częścią</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Znajdziesz ukojenie dla codziennych trosk</p>
            </li>

            <li className="checklist-item">
              <div>
                <BadgeCheck size={24} color="black" />
              </div>

              <p>Pomoże Ci to pracować nad swoim charakterem</p>
            </li>
          </ul>

          <button
            className="mx-auto mb-26 w-75 max-w-[90%] bg-white py-3 font-semibold text-black"
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
    </div>
  );
}
