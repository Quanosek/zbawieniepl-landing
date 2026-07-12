import { NextResponse } from "next/server";
import path from "node:path";
import nodemailer from "nodemailer";

import MailTemplateClass from "@/utils/mail-template";

export async function POST(request: Request) {
  const body = await request.json();

  const gatewayName = process.env.MAIL_GATEWAY_NAME ?? "smtp-default";

  const gatewayConfig = {
    gatewayName,
    from: process.env.MAIL_FROM,
    transporter: nodemailer.createTransport({
      host: process.env.MAIL_SMTP_HOST,
      port: Number(process.env.MAIL_SMTP_PORT),
      secure: process.env.MAIL_SMTP_SECURE === "true",
      auth: {
        user: process.env.MAIL_SMTP_USER,
        pass: process.env.MAIL_SMTP_PASS,
      },
    }),
  };

  const mailTemplate = new MailTemplateClass(body.type);

  try {
    const [subject, leadHtml, deliveryLogHtml, leadAttachments] = await Promise.all([
      mailTemplate.buildLeadSubject(),
      mailTemplate.buildLeadHtml(body),
      mailTemplate.buildDeliveryLog(body),
      mailTemplate.buildLeadAttachments(),
    ]);

    const inlineLogos = [
      {
        filename: "zbawieniepl.png",
        path: path.join(process.cwd(), "public", "zbawieniepl.png"),
        cid: "zbawieniepl-logo",
        contentDisposition: "inline" as const,
      },
    ];

    await Promise.all([
      gatewayConfig.transporter.sendMail({
        from: gatewayConfig.from,
        to: body.email,
        subject,
        html: leadHtml,
        attachments: [...leadAttachments, ...inlineLogos],
        headers: { "X-Mail-Gateway-Name": gatewayName },
      }),
      gatewayConfig.transporter.sendMail({
        from: gatewayConfig.from,
        to: process.env.MAIL_DELIVERY_LOG_ADDRESS,
        subject: "Złożono nowe zamówienie przez stronę Zbawienie.pl",
        html: deliveryLogHtml,
        attachments: [...inlineLogos],
        headers: { "X-Mail-Gateway-Name": gatewayName },
      }),
    ]);

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json({ status: "error" }, { status: 502 });
  }
}
