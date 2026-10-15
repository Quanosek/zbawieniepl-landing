import { readFile } from "node:fs/promises";
import path from "node:path";
import { format } from "date-fns";

import type { LeadFormValues } from "@/types/lead-form";
import { leads } from "@/utils/leads";

const templateCache = new Map<string, string>();

const logo = {
  filename: "zbawieniepl.png",
  path: path.join(process.cwd(), "public", "zbawieniepl.png"),
  cid: "zbawieniepl-logo",
  contentDisposition: "inline" as const,
};

async function readTemplate(name: string): Promise<string> {
  const cached = templateCache.get(name);

  if (cached) return cached;

  const template = await readFile(path.join(process.cwd(), "utils", "templates", name), "utf8");
  templateCache.set(name, template);
  return template;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

export async function buildLeadMail(lead: LeadFormValues) {
  const { subject, attachmentTitle, attachments } = leads[lead.type];
  const template = await readTemplate(`${lead.type}.html`);

  return {
    subject,
    html: template
      .replace("{FIRST_NAME}", () => escapeHtml(lead.firstName))
      .replace("{ATTACHMENT_TITLE}", attachmentTitle),
    attachments: [
      ...attachments.map((filename) => ({
        filename,
        path: path.join(process.cwd(), "public", "attachments", filename),
      })),
      logo,
    ],
  };
}

export async function buildDeliveryLogMail(lead: LeadFormValues) {
  const template = await readTemplate("delivery-log.html");

  return {
    subject: "Złożono nowe zamówienie przez stronę Zbawienie.pl",
    html: template
      .replace("{FIRST_NAME}", () => escapeHtml(lead.firstName))
      .replace("{EMAIL}", () => escapeHtml(lead.email))
      .replace("{NEWSLETTER}", lead.newsletter ? "TAK" : "NIE")
      .replace("{ATTACHMENT_NAME}", leads[lead.type].attachmentName)
      .replace("{ORDER_DATE}", format(new Date(), "dd.MM.yyyy, HH:mm:ss")),
    attachments: [logo],
  };
}
