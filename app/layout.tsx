import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/lib/LenisProvider";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import WhatsAppBubble from "@/components/WhatsappBubble";

// 🎨 Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

// 🧭 SEO + Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://phippsopticians.uk"),
  title:
    "Phipps Opticians | Trusted Opticians in Heckmondwike, West Yorkshire",
  description:
    "Discover expert eye care and a wide range of eyewear at Phipps Opticians in Heckmondwike, West Yorkshire. Book an appointment with our trusted family opticians today.",
  keywords: [
    "opticians Heckmondwike",
    "trusted opticians West Yorkshire",
    "family-friendly opticians Heckmondwike",
    "advanced eye care West Yorkshire",
    "NHS opticians Heckmondwike",
    "eye care specialists West Yorkshire",
    "prescription glasses Heckmondwike",
    "contact lens fitting West Yorkshire",
    "comprehensive eye exams Heckmondwike",
    "stylish glasses and eyewear West Yorkshire",
    "contact lens experts Heckmondwike",
    "local opticians West Yorkshire",
    "nearby eye care services",
  ],
  alternates: {
    canonical: "https://phippsopticians.uk",
  },
  openGraph: {
    type: "website",
    title:
      "Phipps Opticians | Trusted Opticians in Heckmondwike, West Yorkshire",
    description:
      "Your trusted family opticians in Heckmondwike, West Yorkshire, providing exemplary eye care and unparalleled service.",
    url: "https://phippsopticians.uk",
    siteName: "Phipps Opticians",
    locale: "en_GB",
    images: [
      {
        url: "https://phippsopticians.uk/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Phipps Opticians Storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Phipps Opticians | Trusted Opticians in Heckmondwike, West Yorkshire",
    description:
      "Your trusted family opticians in Heckmondwike, West Yorkshire, providing exemplary eye care and unparalleled service.",
    images: ["https://phippsopticians.uk/images/hero.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

// 🌐 Viewport settings
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f2f23",
};

// 🧱 Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: "Phipps Opticians",
  url: "https://phippsopticians.uk",
  logo: "https://phippsopticians.uk/favicon.ico",
  image: "https://phippsopticians.uk/images/hero.jpg",
  description:
    "Discover expert eye care and a wide range of eyewear at Phipps Opticians in Heckmondwike, West Yorkshire. Book an appointment with our trusted family opticians today.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "63 Market Place",
    addressLocality: "Heckmondwike",
    addressRegion: "West Yorkshire",
    postalCode: "WF16 0EZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.707038810053874,
    longitude: -1.6747588134919713,
  },
  telephone: "+44 1924 409334",
  sameAs: [],
};

// 🧩 Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>

      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {/* Accessibility heading for SEO */}
        <h1 className="sr-only">Phipps Opticians</h1>

        <LenisProvider>
          <Navbar />
          <ScrollToTop />
          <WhatsAppBubble />
          <main className="pt-20">{children}</main>
          <Footer />
        </LenisProvider>

        <Analytics />
      </body>
    </html>
  );
}
