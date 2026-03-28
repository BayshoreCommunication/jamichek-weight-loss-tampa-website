import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./globals.css";
import { Providers } from "./providers";

// TAN ANGLETON (Headline)
const tanAngleton = localFont({
  src: "./fonts/TAN - Angleton Regular.ttf",
  variable: "--font-heading",
});

// CANVA SANS (Body + Subheadline)
const canvaSans = localFont({
  src: [
    {
      path: "./fonts/canva-sans-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body",
});

// ✅ METADATA
export const metadata: Metadata = {
  title: "Medical Weight Loss Tampa",
  description: "Medical Weight Loss Tampa website",

  metadataBase: new URL("https://www.medicalweightlosstampa.com"),

  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    title: "Medical Weight Loss Tampa",
    description: "Medical Weight Loss Tampa website",
    url: "https://www.medicalweightlosstampa.com",
    siteName: "Medical Weight Loss Tampa",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Medical Weight Loss Tampa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${tanAngleton.variable} ${canvaSans.variable}`}>
      <body>
        {/* ✅ Script MUST be inside body */}
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="Ns4hfOuAF8"
          data-position="3"
          strategy="afterInteractive"
        />

        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
