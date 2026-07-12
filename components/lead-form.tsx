"use client";

import axios from "axios";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";

import type { LeadFormValues } from "@/types/lead-form";

type LeadFormProps = {
  type: LeadFormValues["type"];
  isSent: boolean;
  onSuccess: () => void;
};

export default function LeadForm({ type, isSent, onSuccess }: LeadFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    defaultValues: {
      type,
      firstName: "",
      email: "",
      newsletter: false,
    },
  });

  const isLocked = isSubmitting || isSent;

  const sanitizeNameInput = (value: string) =>
    value.replace(/[^\p{L}\s]/gu, "").replace(/\s{2,}/g, " ");

  const onSubmit = async (data: LeadFormValues) => {
    const result = await axios.post("/api/lead", data, {
      headers: { "Content-Type": "application/json" },
    });

    if (result.status === 200) {
      onSuccess();
    }

    reset();
  };

  return (
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
            onChange: (event) => {
              event.target.value = sanitizeNameInput(event.target.value);
            },
          })}
          autoComplete="given-name"
          maxLength={100}
          inputMode="text"
          disabled={isLocked}
          className="transition-colors disabled:cursor-not-allowed disabled:bg-[#dadada]! disabled:text-[#6a6a6a]"
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
          disabled={isLocked}
          className="transition-colors disabled:cursor-not-allowed disabled:bg-[#dadada]! disabled:text-[#6a6a6a]"
        />

        {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email.message}</p>}
      </label>

      <div className="flex items-start gap-3">
        <label
          htmlFor="newsletter"
          className={`mt-0.5 inline-flex items-center ${isLocked ? "cursor-not-allowed" : "cursor-pointer"}`}
        >
          <input
            id="newsletter"
            className="peer sr-only"
            type="checkbox"
            {...register("newsletter")}
            disabled={isLocked}
          />

          <span className="flex size-5 items-center justify-center bg-white transition-colors peer-checked:bg-black peer-disabled:bg-[#dadada] [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
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
        disabled={isLocked}
        className={`w-full py-3 font-semibold text-white transition-colors duration-300 disabled:transform-none! disabled:cursor-not-allowed! ${
          isSent ? "bg-emerald-600" : "bg-[#202020] disabled:bg-[#4b4b4b] disabled:opacity-100"
        }`}
      >
        {isSent ? "Wysłano" : isSubmitting ? "Wysyłanie..." : "Zamawiam bezpłatny egzemplarz"}
      </button>
    </form>
  );
}
