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
  title: "SOLA kontorfællesskab",
  description: "Kontorfællesskabet har 10 pladser, køkken, mødelokale og egen kaffebar. Kontoret er udstyret med 1000/1000 internet, gratis kaffe fra ØNSK og en god beliggenhed nær spisesteder og grønne områder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.variable} ${alternateGothic.variable} bg-background`}>{children}</body>
    </html>
  );
}
