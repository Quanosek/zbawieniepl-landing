import type { LeadFormValues } from "@/types/lead-form";

export function buildLeadMailHtml(data: LeadFormValues): string {
  return /* javascript */ `
    <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.5; max-width: 640px; margin: 0 auto;">
      <h1 style="font-size: 24px; margin-bottom: 16px;">Potwierdzenie zapisu</h1>

      <p style="margin: 0 0 12px;">Cześć ${data.firstName},</p>

      <p style="margin: 0 0 16px;">
        Dziękujemy za zamówienie e-booka "Boski Plan Wieków". Znajdziesz go w załączniku do tej wiadomości.
      </p>

      <p style="margin: 0 0 16px;">
        Zachęcamy Cię do przeczytania i podzielenia się opinią lub pytaniami na redakcja@zbawienie.pl
      </p>

      <p style="margin: 0 0 16px;">
        Jeśli chcesz porozmawiać na inne tematy dotyczące Pana Boga i Pisma Świętego, również zapraszamy Cię do kontaktu. Postaramy się odpowiedzieć na każdą wiadomość.
      </p>

      <p style="margin: 0 0 16px;">
        Zapraszamy również do odwiedzenia strony zbawienie.pl, gdzie znajdziesz wiele artykułów na tematy Biblijne, które opowiadają o Planie zbawienia ludzkości i o nadchodzącym Królestwie Bożym.
      </p>

      <p style="margin: 0 0 16px;">
        Pozdrawiamy serdecznie
        <br/>
        Redakcja Zbawienie.pl
      </p>
    </div>
  `;
}
