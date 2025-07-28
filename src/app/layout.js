import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "Phipps Opticians | Trusted Opticians in Heckmondwike, West Yorkshire",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
