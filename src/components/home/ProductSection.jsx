import React from "react";
import Button from "../common/Button";
import ProductCard from "./ProductCard";

const ProductSection = ({title,des,btn}) => {
  return (
    <div id="product_section">
      <div id="product_section_container">
        <div id="product_section_title">
          <div>
            <h4>{title}</h4>
            <p>
             {des}
            </p>
          </div>
          <Button title={btn} link={"/products"} />
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
