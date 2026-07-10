import { readFile } from "node:fs/promises";
import path from "node:path";

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

  static getAttachmentName(type: LeadFormValues["type"]): string {
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
      .replaceAll("{FIRST_NAME}", data.firstName)
      .replaceAll("{ATTACHMENT_TITLE}", MailTemplate.getAttachmentName(data.type));
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
}
