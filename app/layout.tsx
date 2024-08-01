import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

const openSans = localFont({
  src: './OpenSans-VariableFont_wdth,wght.ttf',
  display: 'swap',
  variable: '--font-sans',
})

const alternateGothic = localFont({
  src: './alternate-gothic-comp-atf-black.otf',
  display: 'swap',
  variable: '--font-gothic',
})

export const metadata: Metadata = {
  title: "SOLA",
  description: "Kaffebar og kontorfællesskab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${alternateGothic.variable} bg-[#f0efd6]`}>{children}</body>
    </html>
  );
}
