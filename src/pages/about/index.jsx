import AboutHeroSection from "@/components/about/AboutHeroSection";
import AboutInfo from "@/components/about/AboutInfo";
import Leadership from "@/components/about/Leadership";
import GallerySection from "@/components/home/GallerySection";
import Sustainability from "@/components/home/Sustainability";
import SeoHeader from "@/components/seo/SeoHeader";
import React from "react";

const About = ({ meta }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <AboutHeroSection />
      <AboutInfo />
      <Sustainability />
      <Leadership />
      <GallerySection />
    </>
  );
};

export default About;

export async function getStaticProps() {
  const meta = {
    title:
      "Kesar Petroproducts Ltd. – Applications & Industries for Petrochemical Solutions",
    description:
      "Discover the wide range of industries and applications powered by Kesar Petroproducts’ high-quality petrochemicals, including plastics, textiles, pharmaceuticals, coatings, automotive and more.",
    keywords:
      "petrochemical applications, chemical industries India, industrial chemicals use, Kesar Petroproducts applications, chemical solutions for industries, manufacturing chemicals",
    author: "Kesar Petroproducts Ltd.",
    robots: "index,follow",
  };

  return { props: { meta } };
}
