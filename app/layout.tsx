import type { Metadata } from "next";
import { Alata, Josefin_Sans } from "next/font/google";
import "./globals.css";

const alata = Alata({
  variable: "--ff-alata",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--ff-josefin-sans",
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Loopstudios landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alata.variable} ${josefinSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
