import ProductHero from "@/components/product/ProductHero";
import ProductList from "@/components/product/ProductList";
import SeoHeader from "@/components/seo/SeoHeader";
import { categories } from "@/helpers/productData";
import React from "react";

const Product = ({ categoriesData, meta }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <ProductHero />
      <ProductList categories={categoriesData} />
    </>
  );
};

export default Product;

export const getStaticProps = async () => {
  const meta = {
    title:
      "Kesar Petroproducts Ltd. – Our Products: Phthalic Anhydride, Plasticizers, Resins & Petrochemicals",
    description:
      "Explore Kesar Petroproducts' complete range of industrial petrochemical products including phthalic anhydride, CPW, plasticizers, alkyd resins, and more. Quality engineered for industrial applications.",
    keywords:
      "Kesar products, phthalic anhydride, CPW, alkyd resins, plasticizers, petrochemical products, chemical manufacturer, industrial chemicals",
    author: "Kesar Petroproducts Ltd.",
    robots: "index,follow",
  };
  return {
    props: {
      categoriesData: categories, // pass the categories
      meta,
    },
  };
};
