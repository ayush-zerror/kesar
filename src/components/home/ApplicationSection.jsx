import React from "react";
import Button from "../common/Button";

const ApplicationSection = () => {
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
            <div className="application_card"></div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationSection;
