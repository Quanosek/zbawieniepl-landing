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
    const logoPath = path.join(process.cwd(), "public", "zbawieniepl.png");

    await gatewayConfig.transporter.sendMail({
      from: gatewayConfig.from,
      to: body.email,
      subject: await mailTemplate.buildLeadSubject(),
      html: await mailTemplate.buildLeadHtml(body),
      attachments: [
        ...(await mailTemplate.buildLeadAttachments()),
        {
          filename: "zbawieniepl.png",
          path: logoPath,
          cid: "zbawieniepl-logo",
        },
      ],
      headers: { "X-Mail-Gateway-Name": gatewayName },
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json({ status: "error" }, { status: 502 });
  }
}
