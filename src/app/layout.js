import "./globals.css";

export const metadata = {
  title: "Phipps Opticians - Trusted Opticians in Heckmondwike, West Yorkshire",
  description:
    "Phipps Opticians is your locally trusted, independent family opticians in Heckmondwike, West Yorkshire. We offer personalized eye care services, quality eyewear, and a welcoming experience.",
  keywords:
    "opticians, family opticians, Heckmondwike opticians, eye care, eyewear, independent opticians, West Yorkshire opticians",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-gb">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
