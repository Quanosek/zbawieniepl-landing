import type { LeadFormValues } from "@/types/lead-form";

type LeadConfig = {
  subject: string;
  // Completes "Dziękujemy za zamówienie ..." in the lead e-mail.
  attachmentTitle: string;
  attachmentName: string;
  // File names from public/attachments, attached in this order.
  attachments: string[];
  ecomailListId?: number;
};

export const leads: Record<LeadFormValues["type"], LeadConfig> = {
  "boski-plan-wiekow": {
    subject: "Twój egzemplarz książki - „Boski Plan Wieków”",
    attachmentTitle: "egzemplarza książki „Boski Plan Wieków”",
    attachmentName: "„Boski Plan Wieków”",
    attachments: [
      "boski-plan-wiekow-wyklady-pisma-swietego-tom-1.pdf",
      "boski-plan-wiekow-schemat-zalacznik-1.pdf",
    ],
    ecomailListId: 3,
  },
  "dlaczego-warto": {
    subject: "Twój egzemplarz e-booka - „Dlaczego warto czytać Biblię?”",
    attachmentTitle: "e-booka „Dlaczego warto czytać Biblię?”",
    attachmentName: "„Dlaczego warto czytać Biblię?”",
    attachments: ["dlaczego-warto-czytac-biblie.pdf"],
  },
  "narodziny-jezusa": {
    subject: "Twój egzemplarz e-booka - „Kiedy naprawdę narodził się Pan Jezus?”",
    attachmentTitle: "e-booka „Kiedy naprawdę narodził się Pan Jezus?”",
    attachmentName: "„Kiedy naprawdę narodził się Pan Jezus?”",
    attachments: ["kiedy-naprawde-narodzil-sie-pan-jezus.pdf"],
    ecomailListId: 4,
  },
};
