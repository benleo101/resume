import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

const thSarabunNew = localFont({
  src: "../public/font/2.3.2 THSarabunNew.ttf",
  variable: "--font-th-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KoronaMo Resume",
  description: "Personal resume website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={thSarabunNew.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
