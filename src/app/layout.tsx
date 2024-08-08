import type { Metadata } from "next";
import Navbar from "./views/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixelated Chilies",
  description: "The digital marketing agency for growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://static.heyflow.com/widget/latest/webview.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
