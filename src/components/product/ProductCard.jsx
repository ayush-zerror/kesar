import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className="product_list_card">
      <div className="product_img_wrap">
        <Image
          width={1000}
          height={1000}
          src="/images/product/product.png"
          alt="product"
        />
      </div>
      <div className="product_list_dets">
        <div>
          <h5 className="product_list_card_name">{product.name}</h5>
          <div className="product_card_desc">
            {product.tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
        </div>
        <Button title={"More"} color={"orange"} width={"fit"} />
      </div>
    </Link>
  );
};

export default ProductCard;
