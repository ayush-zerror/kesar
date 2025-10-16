import React from "react";
import Button from "../common/Button";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <div id="product_section">
      <div id="product_section_container">
        <div id="product_section_title">
          <div>
            <h4>Our Product</h4>
            <p>
              Comprehensive range of Phthalocyanine Pigments Blue and Green
              engineered for your specific applications.
            </p>
          </div>
          <Button title={"Explore more Products"} />
        </div>
       <div className="product_slider">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
       </div>
        
      </div>
    </div>
  );
};

export default ProductSection;
