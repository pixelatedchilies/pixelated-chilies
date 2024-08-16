import React from "react";
import ContentSection from "@/app/components/ContentSection";
import AnimatedTextSection from "@/app/components/AnimatedTextSection";
import {
  acceptanceOfTerms,
  companyInformation,
  disclaimerOfLiability,
  helpInformation,
  intellectualProperyRights,
  updatesToTermsAndConditions,
  userAgreement,
  userConduct,
  websiteInformation,
} from "@/app/constants/terms-and-conditions-data";

const dataSections = [
  companyInformation,
  websiteInformation,
  userAgreement,
  acceptanceOfTerms,
  intellectualProperyRights,
  userConduct,
  disclaimerOfLiability,
  updatesToTermsAndConditions,
  helpInformation,
];

const TermsAndConditions = () => {
  return (
    <main className="container py-20">
      <ContentSection
        title="Terms and Conditions"
        alignment="left"
        headingSize="text-2xl md:text-3xl"
        className="mt-12 mb-4"
      />
      <section className="flex flex-col gap-4">
        {dataSections.map((sections, index) => (
          <AnimatedTextSection
            key={index}
            sections={sections}
            classNames="p-4"
          />
        ))}
      </section>
    </main>
  );
};

export default TermsAndConditions;
