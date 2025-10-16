import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div id="home_hero_section">
        <div id="home_hero_container">
          <h1>
            Pioneering <br /> Phthalocyanine Pigments. <br /> Revolutionizing
            Sustainability.
          </h1>
          <p>
            India’s Leading Manufacturer of Phthalocyanine Pigments Blue and
            Green. <br /> <span>Serving customers across 40+ countries</span>{" "}
            with repeatable quality, technical support, and on‑time dispatch.
          </p>
          <Image
            id="circle1"
            width={1000}
            height={1000}
            src="/images/home/blue-circle1.png"
            alt="blue-circle"
          />
          <Image
            id="circle2"
            width={1000}
            height={1000}
            src="/images/home/blue-circle1.png"
            alt="blue-circle"
          />
           <Image
            id="circle3"
            width={1000}
            height={1000}
            src="/images/home/blue-circle1.png"
            alt="blue-circle"
          />
          <Image
            id="circle4"
            width={1000}
            height={1000}
            src="/images/home/blue-circle1.png"
            alt="blue-circle"
          />
          <Image
            id="circle5"
            width={1000}
            height={1000}
            src="/images/home/blue-circle1.png"
            alt="blue-circle"
          />
        </div>
      </div>
   
    </>
  );
};

export default HeroSection;
