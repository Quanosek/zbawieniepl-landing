import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import type { LeadFormValues } from "@/types/lead-form";
import { subscribeToEcomail } from "@/utils/ecomail";
import { emailPattern, leadFieldMaxLength } from "@/utils/lead-validation";
import { leads } from "@/utils/leads";
import { buildDeliveryLogMail, buildLeadMail } from "@/utils/mail-template";

const namePattern = /^[\p{L}\s]{1,100}$/u;

const transporter = nodemailer.createTransport(
  {
    host: process.env.MAIL_SMTP_HOST,
    port: Number(process.env.MAIL_SMTP_PORT),
    secure: process.env.MAIL_SMTP_SECURE === "true",
    auth: {
      user: process.env.MAIL_SMTP_USER,
      pass: process.env.MAIL_SMTP_PASS,
    },
  },
  {
    from: process.env.MAIL_FROM,
    headers: { "X-Mail-Gateway-Name": process.env.MAIL_GATEWAY_NAME ?? "smtp-default" },
  },
);

function parseLead(body: Record<string, unknown>): LeadFormValues | null {
  const { type, firstName, email, newsletter } = body;

  if (
    typeof type !== "string" ||
    !Object.hasOwn(leads, type) ||
    typeof firstName !== "string" ||
    !namePattern.test(firstName.trim()) ||
    typeof email !== "string" ||
    email.length > leadFieldMaxLength ||
    !emailPattern.test(email.trim()) ||
    newsletter !== true
  ) {
    return null;
  }

  return {
    type: type as LeadFormValues["type"],
    firstName: firstName.trim(),
    email: email.trim(),
    newsletter,
  };
}

export async function POST(request: Request) {
  const body = ((await request.json().catch(() => null)) ?? {}) as Record<string, unknown>;

  // Honeypot: bots get a fake success and nothing is sent.
  if (body.website) {
    return NextResponse.json({ status: "success" });
  }

  const lead = parseLead(body);

  if (!lead) {
    return NextResponse.json({ status: "invalid" }, { status: 400 });
  }

  const { ecomailListId } = leads[lead.type];

  try {
    const [leadMail, deliveryLogMail] = await Promise.all([
      buildLeadMail(lead),
      buildDeliveryLogMail(lead),
    ]);

    // Newsletter sign-up must not fail the lead after the file e-mail was sent.
    const newsletterSignup =
      lead.newsletter && ecomailListId
        ? subscribeToEcomail(ecomailListId, {
            email: lead.email,
            name: lead.firstName,
            source: `landing-${lead.type}`,
          }).catch((error: unknown) => console.error("Ecomail subscription error:", error))
        : undefined;

    await Promise.all([
      transporter.sendMail({ ...leadMail, to: lead.email }),
      transporter.sendMail({ ...deliveryLogMail, to: process.env.MAIL_DELIVERY_LOG_ADDRESS }),
      newsletterSignup,
    ]);

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json({ status: "error" }, { status: 502 });
  }
}
