import React from "react";
import Button from "../common/Button";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className="product_list_card">
      <div className="product_img_wrap">
        <div className="product_sample_container">
          {product.shades.map((shade, idx) => (
              <div
                key={idx}
                className={`product_sample${idx + 1}`}
                style={{ backgroundColor: shade }}
              ></div>
            ))}
        </div>
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
