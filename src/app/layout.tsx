import type { Metadata } from "next";
import Head from "next/head";
import Navbar from "./views/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pixelated Chilies - Your Digital Marketing Agency",
  description:
    "Pixelated Chilies is a leading digital marketing agency dedicated to launching, growing, and elevating your brand's success through innovative strategies and tailored solutions.",
  keywords: [
    "digital marketing agency",
    "growth strategies",
    "brand success",
    "marketing solutions",
    "e-commerce marketing",
    "social media management",
    "SEO services",
    "brand design",
    "social recruiting",
    "software development",
    "web development",
  ],
  alternates: {
    canonical: "https://pxchilies.com/",
  },
  openGraph: {
    title: "Pixelated Chilies - Your Digital Marketing Agency",
    description:
      "Pixelated Chilies helps brands achieve remarkable growth with our comprehensive digital marketing strategies. Discover how we can elevate your business.",
    url: "https://pxchilies.com/",
    siteName: "Pixelated Chilies",
    images: [
      {
        url: "https://pxchilies.com/og-image.jpg",
        width: 1920,
        height: 921,
        alt: "Pixelated Chilies OG Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* PNG favicon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* ICO favicon for legacy support */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* PNG favicons for different sizes */}
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        {/* Apple touch icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <title>Pixelated Chilies - Your Digital Marketing Agency</title>
        <meta
          name="description"
          content="Pixelated Chilies is a leading digital marketing agency dedicated to launching, growing, and elevating your brand's success through innovative strategies and tailored solutions."
        />
        <meta
          name="keywords"
          content="digital marketing agency, growth strategies, brand success, marketing solutions, e-commerce marketing, social media management, SEO services, brand design, social recruiting, software development, web development"
        />
        <meta
          property="og:title"
          content="Pixelated Chilies - Your Digital Marketing Agency"
        />
        <meta
          property="og:description"
          content="Pixelated Chilies helps brands achieve remarkable growth with our comprehensive digital marketing strategies. Discover how we can elevate your business."
        />
        <meta property="og:url" content="https://pxchilies.com/" />
        <meta property="og:site_name" content="Pixelated Chilies" />
        <meta
          property="og:image"
          content="https://pxchilies.com/og-image.jpg"
        />
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://static.heyflow.com/widget/latest/webview.js"
          async
        />
      </body>
    </html>
  );
}
