import React from "react";
import Button from "../common/Button";
import ApplicationCard from "./ApplicationCard";

const ApplicationSection = () => {
  const applications = [
    {
      id: 1,
      title: "Inks",
      image: "/images/home/ink.png",
      description:
        "High-quality Phthalocyanine pigments for printing inks with excellent color strength and stability",
      tags: ["Color Strength", "Lightfastness", "Chemical Resistance"],
    },
    {
      id: 2,
      title: "Coatings",
      image: "/images/home/coatings.png",
      description:
        "Durable Phthalocyanine pigments for industrial and architectural coatings applications",
      tags: ["Weather Resistance", "UV Stability", "Heat Resistance"],
    },
    {
      id: 3,
      title: "Plastics (Master Batch)",
      image: "/images/home/plastic.png",
      description:
        "Heat-stable pigments for polymer applications and processing",
      tags: ["Heat Stability", "Lightfastness", "Chemical Resistance"],
    },
    {
      id: 4,
      title: "Offset",
      image: "/images/home/offset.png",
      description:
        "Concentrated Phthalocyanine pigment preparations for plastic coloration",
      tags: ["Weather Resistance", "UV Stability", "Heat Resistance"],
    },
  ];
  return (
    <div id="application_section">
      <div id="application_section_container">
        <div id="application_section_header">
          <div>
            <h4>Applications & Industries</h4>
            <p>
              Specialized solutions for diverse industrial applications with
              proven performance
            </p>
          </div>
          <Button title={"Explore more Products"} />
        </div>
        <div id="application_section_cards">
          {applications.map((data, index) => (
            <ApplicationCard key={index} data={data} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationSection;
