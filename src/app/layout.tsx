import type { Metadata } from "next";
import { Lato } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

const latoFont = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const ibrandFont = LocalFont({
  src: "../assets/fonts/ibrand.otf",
  variable: "--font-ibrand",
});

export const metadata: Metadata = {
  title: "NaryosMed",
  description: "Most trusted medical consultant in Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${latoFont.variable} ${ibrandFont.variable}`}>
        <Header />

        <main className="w-[100dvw] h-screen flex flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
