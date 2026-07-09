import { NextResponse } from "next/server";

import { getMailGatewayConfig } from "@/utils/mail-gateway";
import { buildLeadMailHtml } from "@/utils/mail-template";
import type { LeadFormValues } from "@/types/lead-form";

function getLeadData(body: LeadFormValues) {
  const firstName = typeof body.firstName === "string" ? body.firstName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const newsletter = body.newsletter === true;

  return { firstName, email, newsletter };
}

export async function POST(request: Request) {
  const body = await request.json();

  const leadData = getLeadData(body);
  const gatewayConfig = getMailGatewayConfig();

  try {
    await gatewayConfig.transporter.sendMail({
      from: gatewayConfig.from,
      to: leadData.email,
      subject: "Twój PDF - Boski Plan Wieków",
      html: buildLeadMailHtml(leadData),
      headers: { "X-Mail-Gateway-Name": gatewayConfig.gatewayName },
    });

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json({ status: "error" }, { status: 502 });
  }
}
