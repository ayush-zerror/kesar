import GalleryMain from "@/components/gallery/GalleryMain";
import SeoHeader from "@/components/seo/SeoHeader";
import React from "react";

const Gallery = ({ meta }) => {
  return (
    <>
      <SeoHeader meta={meta} />
      <GalleryMain />
    </>
  );
};

export default Gallery;

export async function getStaticProps() {
  const meta = {
    title:
      "Kesar Petroproducts Ltd. – Gallery | Manufacturing Unit, Plant & Infrastructure",
    description:
      "View photos of Kesar Petroproducts' advanced petrochemical manufacturing facilities, plant infrastructure, production units, storage, laboratory and operations.",
    keywords:
      "Kesar Petro gallery, manufacturing plant photos, petrochemical factory, industrial plant images, resin production unit, phthalic anhydride plant",
    author: "Kesar Petroproducts Ltd.",
    robots: "index,follow",
  };
  return { props: { meta } };
}
