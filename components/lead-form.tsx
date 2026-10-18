"use client";

import { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Check } from "lucide-react";
import { track as vercelTrack } from "@vercel/analytics";
import { event as gaEvent } from "nextjs-google-analytics";

import type { LeadFormValues } from "@/types/lead-form";
import { emailPattern, leadFieldMaxLength } from "@/utils/lead-validation";

type LeadFormProps = {
  type: LeadFormValues["type"];
  onSuccess?: () => void;
};

type LeadFormFields = LeadFormValues & { website: string };

const requiredMessage = "To pole jest obowiązkowe";
const maxLengthRule = {
  value: leadFieldMaxLength,
  message: `Maksymalnie ${leadFieldMaxLength} znaków`,
};

const sanitizeNameInput = (value: string) =>
  value.replace(/[^\p{L}\s]/gu, "").replace(/\s{2,}/g, " ");

export default function LeadForm({ type, onSuccess }: LeadFormProps) {
  const formId = useId();
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormFields>({
    defaultValues: {
      type,
      firstName: "",
      email: "",
      newsletter: false,
      website: "",
    },
  });

  useEffect(() => {
    if (!isSent) return;
    const timeoutId = window.setTimeout(() => setIsSent(false), 3_000);
    return () => window.clearTimeout(timeoutId);
  }, [isSent]);

  const isLocked = isSubmitting || isSent;

  const trackSubmitButtonClick = () => {
    gaEvent("lead_form_submit_click", { category: "lead_form", label: type, form_type: type });
    vercelTrack("lead_form_submit_click", { formType: type });
  };

  const onSubmit = async (data: LeadFormFields) => {
    try {
      await axios.post("/api/lead", data);
    } catch {
      setError("root", {
        message: "Nie udało się wysłać formularza. Sprawdź dane i spróbuj ponownie.",
      });
      return;
    }

    setIsSent(true);
    onSuccess?.();
    reset();
  };

  return (
    <form
      className="mx-auto -mt-30 w-full max-w-xl translate-y-1/2 bg-[#E8E8E8] p-8 text-black md:m-0 md:mt-0 md:w-3/8 md:translate-y-0"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <fieldset disabled={isLocked} className="contents">
        <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <label>
            Strona WWW
            <input {...register("website")} type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <label>
          <span>Imię</span>

          <input
            {...register("firstName", {
              required: requiredMessage,
              validate: (value) => value.trim().length > 0 || requiredMessage,
              maxLength: maxLengthRule,
              onChange: (event) => {
                event.target.value = sanitizeNameInput(event.target.value);
              },
            })}
            autoComplete="given-name"
            maxLength={leadFieldMaxLength}
            inputMode="text"
            aria-required="true"
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? `${formId}-firstName-error` : undefined}
            className="transition-colors disabled:cursor-not-allowed disabled:bg-[#dadada]! disabled:text-[#6a6a6a]"
          />

          {errors.firstName && (
            <span
              id={`${formId}-firstName-error`}
              role="alert"
              className="mt-1 text-xs font-semibold text-red-700"
            >
              {errors.firstName.message}
            </span>
          )}
        </label>

        <label>
          <span>Adres e&#8209;mail</span>

          <input
            {...register("email", {
              required: requiredMessage,
              pattern: {
                value: emailPattern,
                message: "Podaj poprawny adres e-mail",
              },
              maxLength: maxLengthRule,
            })}
            type="email"
            autoComplete="email"
            maxLength={leadFieldMaxLength}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            className="transition-colors disabled:cursor-not-allowed disabled:bg-[#dadada]! disabled:text-[#6a6a6a]"
          />

          {errors.email && (
            <span
              id={`${formId}-email-error`}
              role="alert"
              className="mt-1 text-xs font-semibold text-red-700"
            >
              {errors.email.message}
            </span>
          )}
        </label>

        <div className="flex items-start gap-3">
          <label
            htmlFor={`${formId}-newsletter`}
            className={`mt-0.5 inline-flex items-center ${isLocked ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            <input
              id={`${formId}-newsletter`}
              className="peer sr-only"
              type="checkbox"
              {...register("newsletter", { required: requiredMessage })}
              aria-required="true"
              aria-invalid={!!errors.newsletter}
              aria-labelledby={`${formId}-newsletter-label`}
              aria-describedby={errors.newsletter ? `${formId}-newsletter-error` : undefined}
            />

            <span className="flex size-5 items-center justify-center border-2 border-white bg-white transition-colors peer-checked:border-black peer-checked:bg-black peer-focus-visible:border-black peer-disabled:border-[#dadada] peer-disabled:bg-[#dadada] peer-aria-invalid:border-red-700 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
              <Check
                size={12}
                strokeWidth={3}
                className="text-white transition-opacity"
                aria-hidden="true"
              />
            </span>
          </label>

          <div>
            <p id={`${formId}-newsletter-label`} className="text-xs">
              Wyrażam zgodę na przetwarzanie mojego adresu e&#8209;mail, w&nbsp;celu otrzymywania
              newslettera.
            </p>

            {errors.newsletter && (
              <p
                id={`${formId}-newsletter-error`}
                role="alert"
                className="mt-1 text-xs font-semibold text-red-700"
              >
                {errors.newsletter.message}
              </p>
            )}
          </div>
        </div>

        {errors.root && (
          <p role="alert" className="text-xs font-semibold text-red-700">
            {errors.root.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isLocked}
          onClick={trackSubmitButtonClick}
          className={`w-full py-3 font-semibold text-white transition-colors duration-300 disabled:transform-none! disabled:cursor-not-allowed! ${
            isSent ? "bg-emerald-600" : "bg-[#202020] disabled:bg-[#4b4b4b] disabled:opacity-100"
          }`}
        >
          {isSent ? "Wysłano" : isSubmitting ? "Wysyłanie..." : "Zamawiam bezpłatny egzemplarz"}
        </button>
      </fieldset>
    </form>
  );
}
