import ContactSection from "@/components/contact/ContactSection";
import SeoHeader from "@/components/seo/SeoHeader";
import React from "react";

const Contact = ({ meta }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <ContactSection />
    </>
  );
};

export default Contact;

export async function getStaticProps() {
  const meta = {
    title:
      "Kesar Petroproducts Ltd. – Corporate Office, Plant Address & Enquiries",
    description:
      "Contact Kesar Petroproducts Ltd. for product enquiries, corporate communication, or support. Find our office addresses, phone numbers, email, and manufacturing unit details.",
    keywords:
      "contact Kesar Petroproducts, Kesar Petro address, petrochemical supplier contact, India petrochemical factory, support, sales enquiry",
    author: "Kesar Petroproducts Ltd.",
    robots: "index,follow",
  };
  return { props: { meta } };
}
