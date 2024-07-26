import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./views/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Script
          src="https://static.heyflow.com/widget/latest/webview.js"
          strategy="afterInteractive"
        />
        <Footer />
      </body>
    </html>
  );
}
