import React from "react";
import Button from "../common/Button";

const Integrated = () => {
  return (
    <div id="integrated_section">
      <div id="integrated_container">
        <div id="integrated_details">
          <h4>Integrated Value Chain</h4>
          <p>
            We control CPC crude, cuprous chloride, synergists/additives, and
            captive power; manufacture PB 15:0/1/3 & PG7 (plus Activated CPC);
            and valorise by‑products into Zinc Phosphate / ZnO / ZnCO₃ and DAP /
            MAP / Zinc Sulphate - closing the loop for repeatable shade, stable
            pricing, and lower waste.
          </p>
          <Button title={"Learn More About our Integration "}/>
        </div>
        <div id="integrated_process">
            <div className="process">
                <span>Backward Integration</span>
            </div>
            <div className="process">
                <span>Phthalocyanine Pigments</span>
            </div>
            <div className="process">
                <span>Forward Integration</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Integrated;
