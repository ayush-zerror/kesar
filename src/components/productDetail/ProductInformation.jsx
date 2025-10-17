import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdArrowOutward, MdOutlineFileDownload } from "react-icons/md";

const ProductInformation = ({ product }) => {
  return (
    <div id="product_info_section">
      <div id="product_info_section_container">
        <div id="change_product">
          <span>
            <GrFormPrevious /> Previous
          </span>
          <span>
            Next <GrFormNext />
          </span>
        </div>

        <div id="product_content">
          {/* Product preview shades */}
          <div id="product_preview">
            {product.shades.map((shade, idx) => (
              <div
                key={idx}
                className="product_sample"
                style={{ backgroundColor: shade }}
              ></div>
            ))}
          </div>

          {/* Product title and description */}
          <div className="product_title_box">
            <h5>{product.name}</h5>
            <p>{product.desc}</p>
          </div>

          {/* Tags and applications */}
          <div className="product_tags_container">
            <div className="product_card_desc">
              {product.tags.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>

            <div className="product_application">
              <span>Application:</span>
              {product.application.map((app, idx) => (
                <span key={idx}>
                  <IoIosCheckmarkCircle /> {app}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="product_btns">
              <button>
                <span>Request Quotation</span>
                <MdArrowOutward />
              </button>
              <button>
                <span>MSDS Download</span>
                <MdOutlineFileDownload />
              </button>
              <button>
                <span>TDS Download</span>
                <MdOutlineFileDownload />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
