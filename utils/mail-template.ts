import { readFile } from "node:fs/promises";
import path from "node:path";
import { format } from "date-fns";

import type { LeadFormValues } from "@/types/lead-form";

export default class MailTemplate {
  static templateCache = new Map<string, string>();

  type: LeadFormValues["type"];

  constructor(type: LeadFormValues["type"]) {
    this.type = type;
  }

  async buildLeadSubject(): Promise<string> {
    //* TYTUŁ”
    switch (this.type) {
      case "boski-plan-wiekow":
        return "Twój egzemplarz książki - „Boski Plan Wieków”";
      case "dlaczego-warto":
        return "Twój egzemplarz e-booka - „Dlaczego warto czytać Biblię?”";
    }
  }

  static getAttachmentTitle(type: LeadFormValues["type"]): string {
    //* „Dziękujemy za zamówienie...”
    switch (type) {
      case "boski-plan-wiekow":
        return "egzemplarza książki „Boski Plan Wieków”";
      case "dlaczego-warto":
        return "e-booka „Dlaczego warto czytać Biblię?”";
    }
  }

  static interpolateLeadTemplate(template: string, data: LeadFormValues): string {
    return template
      .replace("{FIRST_NAME}", data.firstName)
      .replace("{ATTACHMENT_TITLE}", MailTemplate.getAttachmentTitle(data.type));
  }

  static async readTemplate(templateName: string): Promise<string> {
    const cachedTemplate = MailTemplate.templateCache.get(templateName);

    if (cachedTemplate) {
      return cachedTemplate;
    }

    const templatePath = path.join(process.cwd(), "utils", "templates", templateName);
    const templateContent = await readFile(templatePath, "utf8");

    MailTemplate.templateCache.set(templateName, templateContent);

    return templateContent;
  }

  async buildLeadHtml(data: LeadFormValues): Promise<string> {
    const templateContent = await MailTemplate.readTemplate(`${data.type}.html`);
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
        : ["Dlaczego warto czytać Biblię.pdf"];

    return attachmentFileNames.map((attachmentFileName) => ({
      filename: attachmentFileName,
      path: path.join(process.cwd(), "public", "attachments", attachmentFileName),
    }));
  }

  static getAttachmentName(type: LeadFormValues["type"]): string {
    //* Nazwa załącznika”
    switch (type) {
      case "boski-plan-wiekow":
        return "„Boski Plan Wieków”";
      case "dlaczego-warto":
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
    const templateContent = await MailTemplate.readTemplate("delivery-log.html");
    return MailTemplate.interpolateLogTemplate(templateContent, data);
  }
}
