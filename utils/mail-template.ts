import { readFile } from "node:fs/promises";
import path from "node:path";
import { format } from "date-fns";

import type { LeadFormValues } from "@/types/lead-form";

export default class MailTemplate {
  type: LeadFormValues["type"];

  constructor(type: LeadFormValues["type"]) {
    this.type = type;
  }

  async buildLeadSubject(): Promise<string> {
    switch (this.type) {
      case "boski-plan-wiekow":
        return "Twój egzemplarz książki - „Boski Plan Wieków”";
      case "e-book":
        return "Twój egzemplarz e-booka - „Dlaczego warto czytać Biblię?”";
    }
  }

  static getAttachmentTitle(type: LeadFormValues["type"]): string {
    //* „Dziękujemy za zamówienie...”
    switch (type) {
      case "boski-plan-wiekow":
        return "egzemplarza książki „Boski Plan Wieków”";
      case "e-book":
        return "e-booka „Dlaczego warto czytać Biblię?”";
    }
  }

  static interpolateLeadTemplate(template: string, data: LeadFormValues): string {
    return template
      .replace("{FIRST_NAME}", data.firstName)
      .replace("{ATTACHMENT_TITLE}", MailTemplate.getAttachmentTitle(data.type));
  }

  async buildLeadHtml(data: LeadFormValues): Promise<string> {
    const templatePath = path.join(process.cwd(), "utils", "templates", `${data.type}.html`);
    const templateContent = await readFile(templatePath, "utf8");
    return MailTemplate.interpolateLeadTemplate(templateContent, data);
  }

  async buildLeadAttachments(): Promise<{ filename: string; path: string }[]> {
    //! Be careful with attachments names
    //! Order matter here

    const attachmentFileNames =
      this.type === "boski-plan-wiekow"
        ? [
            "Boski Plan Wieków - Wykłady Pisma Świętego Tom 1.pdf",
            "Boski Plan Wieków - schemat (załącznik 1).pdf",
          ]
        : ["e-book-cover.png"];

    return attachmentFileNames.map((attachmentFileName) => ({
      filename: attachmentFileName,
      path: path.join(process.cwd(), "public", "attachments", attachmentFileName),
    }));
  }

  static getAttachmentName(type: LeadFormValues["type"]): string {
    switch (type) {
      case "boski-plan-wiekow":
        return "„Boski Plan Wieków”";
      case "e-book":
        return "„Dlaczego warto czytać Biblię?”";
    }
  }

  static interpolateLogTemplate(template: string, data: LeadFormValues): string {
    return template
      .replace("{FIRST_NAME}", data.firstName)
      .replace("{EMAIL}", data.email)
      .replace("{NEWSLETTER}", String(data.newsletter) === "true" ? "TAK" : "NIE")
      .replace("{ATTACHMENT_NAME}", MailTemplate.getAttachmentName(data.type))
      .replace("{ORDER_DATE}", format(new Date(), "dd.MM.yyyy, HH:mm:ss"));
  }

  async buildDeliveryLog(data: LeadFormValues): Promise<string> {
    const templatePath = path.join(process.cwd(), "utils", "templates", `delivery-log.html`);
    const templateContent = await readFile(templatePath, "utf8");
    return MailTemplate.interpolateLogTemplate(templateContent, data);
  }
}
