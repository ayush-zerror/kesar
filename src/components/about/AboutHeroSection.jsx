import Image from "next/image";
import React from "react";

const AboutHeroSection = () => {
  return (
    <div id="about_hero">
      <div id="about_hero_container">
        <Image
          width={1000}
          height={1000}
          src="/images/about/about-banner.jpg"
          alt="about-banner"
        />
        <div id="about_hero_overlay">
          <h2>Think Phthalocyanine. <br /> Think Kesar.</h2>
          <div className="about_hero_dets">
            <p>
              Kesar Petroproducts Ltd. is a technology‑driven Phthalocyanine
              pigment manufacturer and one of India’s established producers of
              phthalocyanine blue crude and downstream blues, with a sustainable
              presence in 15+ countries.
            </p>
            <p>
              Over three decades, we’ve combined efficient manufacturing with
              documented quality systems to deliver consistent blues and greens
              for inks, coatings, plastics, textiles, master batches and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
