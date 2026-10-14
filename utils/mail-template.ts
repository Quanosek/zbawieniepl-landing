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
    //* E-mail subject
    switch (this.type) {
      case "boski-plan-wiekow":
        return "Twój egzemplarz książki - „Boski Plan Wieków”";
      case "dlaczego-warto":
        return "Twój egzemplarz e-booka - „Dlaczego warto czytać Biblię?”";
      case "narodziny-jezusa":
        return "Twój egzemplarz e-booka - „Kiedy naprawdę narodził się Pan Jezus?”";
    }
  }

  static getAttachmentTitle(type: LeadFormValues["type"]): string {
    //* „Dziękujemy za zamówienie...”
    switch (type) {
      case "boski-plan-wiekow":
        return "egzemplarza książki „Boski Plan Wieków”";
      case "dlaczego-warto":
        return "e-booka „Dlaczego warto czytać Biblię?”";
      case "narodziny-jezusa":
        return "e-booka „Kiedy naprawdę narodził się Pan Jezus?”";
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

    let attachmentFileNames;
    switch (this.type) {
      case "boski-plan-wiekow":
        attachmentFileNames = [
          "Boski Plan Wieków - Wykłady Pisma Świętego Tom 1.pdf",
          "Boski Plan Wieków - schemat (załącznik 1).pdf",
        ];
        break;
      case "dlaczego-warto":
        attachmentFileNames = ["Dlaczego warto czytać Biblię.pdf"];
        break;
      case "narodziny-jezusa":
        attachmentFileNames = ["Kiedy naprawdę narodził się Pan Jezus.pdf"];
        break;
    }

    return attachmentFileNames.map((attachmentFileName) => ({
      filename: attachmentFileName,
      path: path.join(process.cwd(), "public", "attachments", attachmentFileName),
    }));
  }

  static getAttachmentName(type: LeadFormValues["type"]): string {
    //* Attachment name
    switch (type) {
      case "boski-plan-wiekow":
        return "„Boski Plan Wieków”";
      case "dlaczego-warto":
        return "„Dlaczego warto czytać Biblię?”";
      case "narodziny-jezusa":
        return "„Kiedy naprawdę narodził się Pan Jezus?”";
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
