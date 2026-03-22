import type { Metadata } from "next";
import localFont from "next/font/local";

import "../index.css";
import Header from "@/components/header";
import Providers from "@/components/providers";

const satoshi = localFont({
  src: [
    { path: "../fonts/Satoshi-Light.woff2", weight: "300" },
    { path: "../fonts/Satoshi-Regular.woff2", weight: "400" },
    { path: "../fonts/Satoshi-Medium.woff2", weight: "500" },
    { path: "../fonts/Satoshi-Bold.woff2", weight: "700" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const clashDisplay = localFont({
  src: [
    { path: "../fonts/ClashDisplay-Light.woff2", weight: "300" },
    { path: "../fonts/ClashDisplay-Regular.woff2", weight: "400" },
    { path: "../fonts/ClashDisplay-Medium.woff2", weight: "500" },
    { path: "../fonts/ClashDisplay-Semibold.woff2", weight: "600" },
    { path: "../fonts/ClashDisplay-Bold.woff2", weight: "700" },
  ],
  variable: "--font-clash",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MADVISUAL | Photography & Visual Arts",
  description:
    "Portfolio de photographie — Capturer l'essence de la vie urbaine à travers un regard cinématographique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${clashDisplay.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
