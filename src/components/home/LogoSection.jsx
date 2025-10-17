import Image from "next/image";
import React from "react";

const logoData = [
  {
    src: "/images/home/logo1.webp",
    text: "Annual Capacity (Tons)",
  },
  {
    src: "/images/home/logo2.webp",
    text: "5 Integrated Facilities",
  },
  {
    src: "/images/home/logo3.webp",
    text: "ISO & REACH",
  },
  {
    src: "/images/home/logo4.webp",
    text: "In-house Power",
  },
  {
    src: "/images/home/logo5.webp",
    text: "Backward Integration",
  },
  {
    src: "/images/home/logo6.webp",
    text: "Forward Integration",
  },
];

const LogoSection = () => {
  return (
    <div id="logo_section">
      {logoData.map((item, index) => (
        <div className="logo_card" key={index}>
          <Image
            width={1000}
            height={1000}
            src={item.src}
            alt={`logo-${index + 1}`}
          />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default LogoSection;
