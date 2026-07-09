import nodemailer from "nodemailer";

export type MailGatewayConfig = {
  gatewayName: string;
  from: string;
  transporter: nodemailer.Transporter;
};

export function getMailGatewayConfig(): MailGatewayConfig {
  const smtpPort = Number(process.env.MAIL_SMTP_PORT);

  if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
    throw new Error("Nieprawidłowy MAIL_SMTP_PORT.");
  }

  const gatewayName = process.env.MAIL_GATEWAY_NAME ?? "smtp-default";
  const secure = process.env.MAIL_SMTP_SECURE === "true" || smtpPort === 465;

  return {
    gatewayName,
    from: process.env.MAIL_FROM ?? "",
    transporter: nodemailer.createTransport({
      host: process.env.MAIL_SMTP_HOST,
      port: smtpPort,
      secure,
      auth: {
        user: process.env.MAIL_SMTP_USER,
        pass: process.env.MAIL_SMTP_PASS,
      },
      name: process.env.MAIL_HELO_NAME || undefined,
    }),
  };
}
