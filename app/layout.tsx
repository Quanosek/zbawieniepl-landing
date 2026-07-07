import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zbawienie.pl",
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "any" },
      { url: "/assets/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/assets/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${openSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#ffffff] text-[#1e1e1e]">
        <Header />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
