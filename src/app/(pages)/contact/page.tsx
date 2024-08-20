import ContentSection from "@/app/components/ContentSection";
import ContactForm from "@/app/views/ContactForm";

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
