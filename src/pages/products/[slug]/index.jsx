import ProductList from "@/components/product/ProductList";
import ProductInformation from "@/components/productDetail/ProductInformation";
import { categories } from "@/helpers/productData";
import React from "react";

const ProductDetail = ({ product, categoriesData }) => {
  return (
    <>
      <ProductInformation product={product} />
      <ProductList categories={categoriesData} currentSlug={product?.slug} />
    </>
  );
};
export const getStaticPaths = async () => {
  const paths = categories.flatMap((category) =>
    category.products.map((product) => ({
      params: { slug: product.slug },
    }))
  );

  return {
    paths,
    fallback: true, // still allows new slugs to render dynamically
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  let productData = null;
  for (const category of categories) {
    const product = category.products.find((p) => p.slug === slug);
    if (product) {
      productData = product;
      break;
    }
  }

  if (!productData) {
    return { notFound: true };
  }

  return {
    props: {
      product: productData,
      categoriesData: categories,
    },
  };
};

export default ProductDetail;
