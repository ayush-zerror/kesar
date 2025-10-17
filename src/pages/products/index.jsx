import ProductHero from "@/components/product/ProductHero";
import ProductList from "@/components/product/ProductList";
import { categories } from "@/helpers/productData";
import React from "react";

const Product = ({categoriesData}) => {
  
  return (
    <>
      <ProductHero />
      <ProductList  categories={categoriesData}/>
    </>
  );
};

export default Product;

export const getStaticProps = async () => {
  // you can also fetch from API here if needed
  return {
    props: {
      categoriesData: categories, // pass the categories
    },
  };
};
