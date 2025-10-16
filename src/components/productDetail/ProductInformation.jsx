import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const ProductInformation = () => {
  return (
    <div id="product_info_section">
      <div id="product_info_section_container">
        <div id="change_product">
          <span>
            <GrFormPrevious /> Previous
          </span>
          <span>
            Next <GrFormNext />
          </span>
        </div>
        <div id="product_content">
          <div id="product_preview">
            <div className="product_sample"></div>
            <div className="product_sample"></div>
          </div>
          <div className="product_title_box">
            <h5>KPL Blue 7003 D</h5>
            <p>General redder grade with 10% pigment loading</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
