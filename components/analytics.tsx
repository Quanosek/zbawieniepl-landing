"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Analytics() {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string;
  return <GoogleAnalytics trackPageViews gaMeasurementId={gaMeasurementId} />;
}
