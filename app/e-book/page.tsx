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
            src="/images/ludovic-fremondiere-386803-unsplash.jpg"
            alt=""
            draggable={false}
            loading="eager"
            fill
          />
        </div>
      </section>

      <section className="flex-col items-start justify-center pt-45.5 md:pt-0">
        <div className="absolute -top-45 z-30 mx-auto hidden h-100 w-full md:block">
          <Image
            src="/images/e-book-cover.png"
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
              src="/images/e-book-cover.png"
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
