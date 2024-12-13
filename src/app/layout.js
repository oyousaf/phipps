import "./globals.css";

export const metadata = {
  title: "Phipps Opticians | Trusted Opticians in Heckmondwike, West Yorkshire",
  description:
    "Discover expert eye care and a wide range of eyewear at Phipps Opticians in Heckmondwike, West Yorkshire. Book an appointment with our trusted family opticians today.",
  keywords: [
    "opticians in Heckmondwike",
    "trusted opticians in West Yorkshire",
    "family opticians West Yorkshire",
    "advanced eye care technology",
    "NHS opticians in Heckmondwike",
    "eye care specialists Heckmondwike",
    "prescription glasses West Yorkshire",
    "contact lens fitting Heckmondwike",
    "comprehensive eye exams",
    "stylish eyewear Heckmondwike",
    "contact lens specialists",
    "local opticians near me",
    "local eye care Heckmondwike",
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
      <body>{children}</body>
    </html>
  );
}
