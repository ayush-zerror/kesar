import ProductHero from "@/components/product/ProductHero";
import ProductList from "@/components/product/ProductList";
import ProductInformation from "@/components/productDetail/ProductInformation";
import React from "react";

const ProductDetail = () => {
  return (
    <>
      <ProductInformation />
      <ProductList />
      <ProductList />
      <ProductList />
      <ProductList />
    </>
  );
};

export default ProductDetail;
