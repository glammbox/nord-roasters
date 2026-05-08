import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nord Roasters — seasonal coffee from Mile End",
  description:
    "Seasonal single-origin coffee roasted in small batches in Mile End, Montréal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}