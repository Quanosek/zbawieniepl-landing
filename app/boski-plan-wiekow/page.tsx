"use client";

import Image from "next/image";
import { useState } from "react";
import { BadgeCheck, Check, Lightbulb } from "lucide-react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { SuccessModal } from "@/components/success-modal";
import type { LeadFormValues } from "@/types/lead-form";

export default function Page() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    defaultValues: {
      firstName: "",
      email: "",
      newsletter: false,
    },
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const onSubmit = async (data: LeadFormValues) => {
    const result = await axios.post("/api/lead", data, {
      headers: { "Content-Type": "application/json" },
    });

    if (result.status === 200) {
      setIsSuccessModalOpen(true);
    }

    reset();
  };

  return (
    <div className={isSuccessModalOpen ? "max-h-screen overflow-hidden" : ""}>
      <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} />

      <section className="relative pt-30 md:h-225 md:pt-0">
        <div className="safe-space relative z-20 flex flex-col items-start justify-between gap-8 text-white md:top-50 md:flex-row md:gap-12">
          <div className="ml-[3%] flex flex-col gap-6 md:ml-0 md:w-5/8">
            <h1 className="text-5xl leading-[1.2] font-bold">
              Pobierz darmowy PDF i&nbsp;poznaj Boży plan zapisany w&nbsp;Biblii
            </h1>

            <p className="pr-5">
              Otrzymaj bezpłatnie pełną książkę, która w&nbsp;logiczny i&nbsp;przejrzysty sposób
              wyjaśnia główne nauki Biblii oraz Boży plan wobec człowieka.
            </p>

            <p className="pr-5">
              Podaj e&#8209;mail, a&nbsp;wyślemy Ci PDF.
              <br />
              Poniżej możesz sprawdzić, jakie tematy znajdziesz w&nbsp;środku.
            </p>
          </div>

          <form
            className="mx-auto -mt-30 w-full max-w-xl translate-y-1/2 bg-[#E8E8E8] p-8 text-black md:m-0 md:mt-0 md:w-3/8 md:translate-y-0"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label>
              <p>Imię</p>

              <input
                {...register("firstName", {
                  required: "Podaj swoje imię",
                  maxLength: {
                    value: 100,
                    message: "Maksymalnie 100 znaków",
                  },
                })}
                autoComplete="given-name"
                maxLength={100}
              />

              {errors.firstName && (
                <p className="mt-1 text-xs text-red-700">{errors.firstName.message}</p>
              )}
            </label>

            <label>
              <p>Adres e&#8209;mail</p>

              <input
                {...register("email", {
                  required: "Podaj swój adres e-mail",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Podaj poprawny adres e-mail",
                  },
                  maxLength: {
                    value: 100,
                    message: "Maksymalnie 100 znaków",
                  },
                })}
                type="email"
                autoComplete="email"
                maxLength={100}
              />

              {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}
            </label>

            <div className="flex items-start gap-3">
              <label
                htmlFor="newsletter"
                className="mt-0.5 inline-flex cursor-pointer items-center"
              >
                <input
                  id="newsletter"
                  className="peer sr-only"
                  type="checkbox"
                  {...register("newsletter")}
                />

                <span className="flex size-5 items-center justify-center bg-white transition-colors peer-checked:bg-black [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                  <Check
                    size={14}
                    strokeWidth={3}
                    className="text-white transition-opacity"
                    aria-hidden="true"
                  />
                </span>
              </label>

              <p className="text-xs">
                Wyrażam zgodę na przetwarzanie mojego adresu e&#8209;mail, w&nbsp;celu otrzymywania
                newslettera.
              </p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#202020] py-3 font-semibold text-white disabled:cursor-default disabled:opacity-60"
            >
              {isSubmitting ? "Wysyłanie..." : "Wyślij"}
            </button>
          </form>
        </div>

        <div className="absolute inset-0">
          <div className="gradient-right absolute inset-0 z-10" />

          <Image
            style={{ objectFit: "cover" }}
            src="/images/background-wallpaper.jpg"
            alt=""
            draggable={false}
            loading="eager"
            fill
          />
        </div>
      </section>

      <section className="flex-col items-start justify-center pt-45.5 md:pt-0">
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
            w&nbsp;jedną całość – wyjaśnia m.in. sens istnienia zła, rolę Jezusa Chrystusa oraz
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
              <p>Jak różne jej części łączą się w&nbsp;jeden, logiczny plan Boga</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Nadzieję na przyszłość</h3>
              <p>Wizję odnowienia świata i&nbsp;realnej szansy na życie wieczne dla wszystkich</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Zrozumienie roli Jezusa Chrystusa</h3>
              <p>Kim jest i&nbsp;jaką rolę pełni w&nbsp;przyszłości ludzkości</p>
            </div>
          </div>

          <div className="tile flex-col md:flex-row">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Odpowiedzi na trudne pytania</h3>
              <p>Dlaczego istnieje zło i&nbsp;jaki ma sens w&nbsp;Bożym zamyśle</p>
            </div>
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

      <section className="flex-col items-center bg-[#f0f0f0]">
        <div className="center-space text-center">
          <h2 className="mx-auto mt-20 max-w-[20ch] text-[44px] leading-[1.2] font-bold md:max-w-none md:text-5xl">
            Jakie tematy znajdziesz w&nbsp;środku?
          </h2>

          <p className="mt-8 leading-[1.4]">
            Materiał porusza najważniejsze zagadnienia związane z&nbsp;Biblią i&nbsp;Bożym planem
            wobec ludzkości – w&nbsp;uporządkowany i&nbsp;zrozumiały sposób.
          </p>

          <p className="mt-6 leading-[1.4]">Oto część z&nbsp;nich:</p>

          <div className="mt-10 flex flex-col bg-white px-6 py-7 text-start md:px-18 md:py-12">
            <ol>
              <li>
                <span>1</span>
                <p>Czy Biblia jest wiarygodna i&nbsp;jak ją rozumieć</p>
              </li>

              <li>
                <span>2</span>
                <p>Czy Bóg naprawdę istnieje i&nbsp;jaki ma charakter</p>
              </li>

              <li>
                <span>3</span>
                <p>Dlaczego na świecie istnieje zło i&nbsp;cierpienie</p>
              </li>

              <li>
                <span>4</span>
                <p>Jaki jest cel życia człowieka</p>
              </li>

              <li>
                <span>5</span>
                <p>Czym jest „dzień sądu” i&nbsp;czy należy się go obawiać</p>
              </li>

              <li>
                <span>6</span>
                <p>Co oznacza powrót Chrystusa</p>
              </li>

              <li>
                <span>7</span>
                <p>Jaką rolę w&nbsp;Bożym planie odgrywa Jezus Chrystus</p>
              </li>

              <li>
                <span>8</span>
                <p>Na czym będzie polegało „Królestwo Boże”</p>
              </li>

              <li>
                <span>9</span>
                <p>Czy wszyscy ludzie mają szansę na życie wieczne</p>
              </li>

              <li>
                <span>10</span>
                <p>Jak wygląda przyszłość świata według Biblii</p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
