import type { Metadata } from "next";
import { Lato } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Logo from "~/assets/images/logo.png";
import Link from "next/link";

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
        <header className="w-[100dvw] flex items-center justify-center">
          <nav className="w-[90%] py-3 flex justify-around rounded-b-2xl drop-shadow-sm bg-green-50">
            {/* logo */}
            <div className="w-[20%]">
              <Image src={Logo} alt="NaryosMed" width={150} />
            </div>

            {/* navigation */}
            <div className="w-[70%] flex justify-end items-center gap-12">
              <ul className="flex gap-6 items-center flex-row">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
              </ul>

              <button className="gradient-button px-4 py-2 font-ibrand text-white rounded-xl shadow-md hover:shadow-lg hover:translate-x-1 cursor-pointer">
                Enquire Us
              </button>
            </div>
          </nav>
        </header>

        <main className="w-[100dvw] flex flex-col justify-center items-center">
          {children}
        </main>

        <footer></footer>
      </body>
    </html>
  );
}
