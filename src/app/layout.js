import "./globals.css";

export const metadata = {
  title: "Phipps Opticians",
  description: "Your locally trusted, independent family opticians",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-gb">
      <body>{children}</body>
    </html>
  );
}
