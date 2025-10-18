import Image from 'next/image'
import React from 'react'
import Button from '../common/Button'
import { GrNext } from 'react-icons/gr'

const ProductCard = () => {
  return (
    <div className="product_card">
          <div className="product_details">
            <h3 className="product_name">CPC Blue</h3>
            <div className="product_description">
              <span>Intermediates</span>
              <span>Processing</span>
            </div>
          </div>
          <Image
            width={1000}
            height={1000}
            src="/images/home/product.webp"
            alt="product"
          />
          <div className="product_info">
            <p>Crude & Activated intermediates for downstream processing</p>
            <Button title={"More"} color={"orange"} width={"fit"} icon={<GrNext />} />
          </div>
        </div>
  )
}

export default ProductCard