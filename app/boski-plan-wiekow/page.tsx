"use client";

import { BadgeCheck, Check, Lightbulb } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <div>
      <section className="h-225">
        <div className="safe-space relative top-50 z-20 flex items-start justify-between gap-6 text-white">
          <div className="flex w-5/8 flex-col gap-6">
            <h1 className="text-5xl leading-[1.2] font-bold">
              Pobierz darmowy PDF i&nbsp;poznaj Boży plan zapisany w&nbsp;Biblii
            </h1>

            <p>
              Otrzymaj bezpłatnie pełną książkę, która w&nbsp;logiczny i&nbsp;przejrzysty sposób
              wyjaśnia główne nauki Biblii oraz Boży plan wobec człowieka.
            </p>

            <p>
              Podaj e&#8209;mail, a&nbsp;wyślemy Ci PDF.
              <br />
              Poniżej możesz sprawdzić, jakie tematy znajdziesz w&nbsp;środku.
            </p>
          </div>

          <form className="w-3/8 bg-[#E8E8E8] p-8 text-black" onSubmit={handleSubmit(onSubmit)}>
            <label>
              <p>Imię</p>
              <input {...register("firstName")} />
            </label>

            <label>
              <p>Adres e&#8209;mail</p>
              <input {...register("email")} />
            </label>

            <div className="flex items-start gap-3">
              <label className="mt-0.5 inline-flex cursor-pointer items-center">
                <input className="peer sr-only" type="checkbox" {...register("newsletter")} />

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

            <button type="submit" className="w-full bg-[#202020] py-3 font-semibold text-white">
              Wyślij
            </button>
          </form>
        </div>

        <div className="absolute inset-0">
          <div className="gradient-right absolute inset-0 z-10" />

          <Image
            style={{ objectFit: "cover" }}
            src="/images/background-wallpaper.jpg"
            alt="Boski plan wieków"
            draggable={false}
            loading="eager"
            fill
          />
        </div>
      </section>

      <section className="flex-col items-start justify-center">
        <div className="absolute -top-60 z-30 mx-auto h-140 w-full">
          <Image
            src="/images/boski-plan-wiekow.png"
            alt="Boski Plan Wieków"
            className="spread-shadow"
            fill
            loading="eager"
            draggable={false}
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="center-space mt-72! flex flex-col justify-center gap-6 text-center">
          <h2 className="text-5xl leading-[1.2] font-bold">Co od nas otrzymasz?</h2>

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

        <div className="safe-space my-12! grid grid-cols-2 gap-5">
          <div className="tile">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Spójne wyjaśnienie Biblii</h3>
              <p>Jak różne jej części łączą się w&nbsp;jeden, logiczny plan Boga</p>
            </div>
          </div>

          <div className="tile">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Nadzieję na przyszłość</h3>
              <p>Wizję odnowienia świata i&nbsp;realnej szansy na życie wieczne dla wszystkich</p>
            </div>
          </div>

          <div className="tile">
            <div className="flex aspect-square items-center justify-center rounded-full bg-[#1e1e1e] p-4">
              <Lightbulb size={18} color="white" />
            </div>

            <div>
              <h3>Zrozumienie roli Jezusa Chrystusa</h3>
              <p>Kim jest i&nbsp;jaką rolę pełni w&nbsp;przyszłości ludzkości</p>
            </div>
          </div>

          <div className="tile">
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
          className="mx-auto mb-26 w-75 bg-[#202020] py-3 font-semibold text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Uzupełnij formularz
        </button>
      </section>

      <section className="overflow-hidden bg-[#1e1e1e] text-white">
        <div className="center-space z-10 text-center">
          <h2 className="mt-20 text-5xl leading-[1.2] font-bold">
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
            className="mx-auto mb-26 w-75 bg-white py-3 font-semibold text-black"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Uzupełnij formularz
          </button>
        </div>

        <div className="absolute -top-45 -left-65 z-0 h-250 w-250 opacity-15">
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
          <h2 className="mt-20 text-5xl leading-[1.2] font-bold">
            Jakie tematy znajdziesz w&nbsp;środku?
          </h2>

          <p className="mt-8 leading-[1.4]">
            Materiał porusza najważniejsze zagadnienia związane z&nbsp;Biblią i&nbsp;Bożym planem
            wobec ludzkości – w&nbsp;uporządkowany i&nbsp;zrozumiały sposób.
          </p>

          <p className="mt-6 leading-[1.4]">Oto część z&nbsp;nich:</p>

          <div className="mt-10 flex flex-col bg-white px-18 py-12">
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
