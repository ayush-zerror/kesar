import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const ProductHero = () => {
  return (
    <div id="product_hero">
      <div id="product_hero_container">
        <div id="product_hero_title">
          <h4>Product Families</h4>
          <p>
            Comprehensive range of Phthalocyanine Pigments Blue and Green
            engineered for your specific applications.
          </p>
          <div id="product_filter_wrap">
            <div id="product_filters">
              <div className="product_filter_drop">
                <span>Select Application</span>
                <IoMdArrowDropdown />
              </div>
              <div className="product_filter_drop">
                <span>Select Colour Index</span>
                <IoMdArrowDropdown />
              </div>
              <div className="product_filter_drop">
                <span>Anti Corrosives</span>
                <IoMdArrowDropdown />
              </div>
              <div className="product_filter_drop">
                <span>Fertilizers</span>
                <IoMdArrowDropdown />
              </div>
            </div>
            <span>Clear Filter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
