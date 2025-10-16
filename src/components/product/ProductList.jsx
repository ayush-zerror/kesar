import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product_list">
      <h5>ink</h5>
      <div className="product_list_container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
