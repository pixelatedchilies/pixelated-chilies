import ContentSection from "@/app/components/ContentSection";
import ContactForm from "@/app/views/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Pixelated Chilies | Your Digital Marketing Agency",
  description:
    "Get in touch with Pixelated Chilies to discuss your digital marketing needs. Whether it's web development, SEO, social media management, or brand strategy, we're here to help you grow your business.",
  keywords: [
    "contact Pixelated Chilies",
    "digital marketing consultation",
    "web development inquiries",
    "SEO services contact",
    "social media management contact",
    "branding services contact",
  ],
  alternates: {
    canonical: "https://pxchilies.com/contact",
  },
  openGraph: {
    title: "Contact Us - Pixelated Chilies | Your Digital Marketing Agency",
    description:
      "Reach out to Pixelated Chilies to elevate your digital marketing strategy. We're eager to assist with web development, SEO, social media management, and brand design to ensure your business thrives.",
    url: "https://pxchilies.com/contact",
    siteName: "Pixelated Chilies",
    images: [
      {
        url: "https://pxchilies.com/og-image.jpg",
        width: 1920,
        height: 921,
        alt: "Pixelated Chilies Contact",
      },
    ],
  },
};

const Contact = () => {
  return (
    <main className="container py-20">
      <ContentSection
        title="Contact Us"
        description="Want to take your online presence to another level? Contact us today!"
        alignment="left"
        headingLevel="h1"
        className="mt-12 mb-8"
      />
      <section className="pb-8">
        <ContactForm />
      </section>
    </main>
  );
};

export default Contact;
