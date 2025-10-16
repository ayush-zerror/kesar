import Image from 'next/image'
import React from 'react'
import Button from '../common/Button'

const ProductCard = () => {
  return (
       <div className="product_list_card">
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
              <h5 className="product_list_card_name">KPL Blue 7000 D</h5>
              <div className="product_card_desc">
                <span>PB 15.0</span>
                <span>Ink</span>
              </div>
            </div>
            <Button title={"More"} color={"orange"} width={"fit"} />
          </div>
        </div>
  )
}

export default ProductCard