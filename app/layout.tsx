import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Business Scale Workshop | Stop Being the Bottleneck",
  description:
    "Apply for a high-impact workshop that replaces you as the single point of failure in your business. Join hundreds of founders who've reclaimed their time.",
  keywords: "business workshop, scale business, founder, entrepreneur, systems, delegation",
  openGraph: {
    title: "Business Scale Workshop | Stop Being the Bottleneck",
    description:
      "Apply for a high-impact workshop that replaces you as the single point of failure in your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
