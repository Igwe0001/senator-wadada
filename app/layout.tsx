import { Anton, Architects_Daughter, Fraunces, Instrument_Serif, Inter } from "next/font/google";

import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Sen. Ahmed Wadada Aliyu",
  description: "Decades of service. A lifetime of commitment. A vision to transform Nasarawa State.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Ahmed Wadada Aliyu",
    "Senator Ahmed Wadada",
    "Ahmed Wadada",
    "Sen. Ahmed Wadada",
    "Nasarawa West Senator",
    "Nasarawa State Senator",
    "Senator Nasarawa West",
    "Ahmed Wadada Aliyu Nasarawa",
  ],
  openGraph: {
    title: "Sen. Ahmed Wadada Aliyu",
    description: "Decades of service. A lifetime of commitment. A vision to transform Nasarawa State.",
    url: "https://www.senatorahmedwadada.com/", // Your actual website URL
    siteName: "Sen. Ahmed Wadada Aliyu",
    images: [
      {
        url: "https://www.senatorahmedwadada.com/og-image.png", // This is what shows when sharing!
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sen. Ahmed Wadada Aliyu",
    description: "Decades of service. A lifetime of commitment. A vision to transform Nasarawa State.",
    images: ["https://www.senatorahmedwadada.com/og-image.png"], // For Twitter
  },
};

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
});

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-architects-daughter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fraunces",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${architectsDaughter.variable} ${fraunces.variable} ${instrumentSerif.variable} ${inter.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
