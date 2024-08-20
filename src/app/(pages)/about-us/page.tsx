import { Metadata } from "next";
import AnimatedTextSection from "../../components/AnimatedTextSection";
import ContentSection from "../../components/ContentSection";
import VideoSection from "../../components/Video";
import { sectionsData } from "../../constants/about-section-data";
import { TEAM_MEMBERS } from "../../constants/team-members";
import ProfileCard from "../../ui/ProfileCard";

export const metadata: Metadata = {
  title: "About Us - Pixelated Chilies | Your Digital Marketing Agency",
  description:
    "Discover Pixelated Chilies, a top digital marketing agency specializing in web development, SEO, social media management, and innovative brand strategies. Elevate your business with us.",
  keywords: [
    "digital marketing agency",
    "SEO services",
    "brand strategy",
    "web development",
    "social media management",
    "e-commerce marketing",
    "custom web development",
    "brand design",
    "social recruiting",
  ],
  alternates: {
    canonical: "https://pxchilies.com/about-us",
  },
  openGraph: {
    title: "About Us - Pixelated Chilies | Your Digital Marketing Agency",
    description:
      "Learn more about Pixelated Chilies, our team of marketing experts, and how we help brands grow with innovative digital strategies.",
    url: "https://pxchilies.com/about-us",
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

const AboutUs = () => {
  return (
    <main className="container mx-auto my-4">
      <section>
        <section className="relative overflow-hidden my-28 py-32 md:py-60">
          {/* Video Background */}
          <VideoSection src="https://res.cloudinary.com/dc10qw88i/video/upload/v1715794154/about-us-video-banner_ewewjh.mp4" />
          {/* Content Section */}
          <div className="relative z-10 flex items-center justify-center h-full md:w-2/3 mx-auto">
            <ContentSection
              title="About Us"
              description="Dedicated to crafting dynamic and innovative digital solutions.
                Specializing in custom web development, we blend cutting-edge
                technology with creative design to deliver websites that are not
                only visually stunning but also highly functional."
              alignment="center"
              headingLevel="h1"
            />
          </div>
        </section>
      </section>
      <section>
        <AnimatedTextSection
          sections={sectionsData}
          classNames="bg-gradient-to-tr from-[#000000] via-[#001116] to-[#000000] p-4 md:p-8"
        />
      </section>
      <section className="pb-4 pt-32">
        <ContentSection title="Meet the visionary team" alignment="center" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {TEAM_MEMBERS.map(({ id, src, name, description }) => (
          <ProfileCard
            key={id}
            id={id}
            src={src}
            name={name}
            description={description}
          />
        ))}
      </section>
    </main>
  );
};

export default AboutUs;
