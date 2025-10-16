import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdArrowOutward, MdOutlineFileDownload } from "react-icons/md";
const ProductInformation = () => {
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
          <div id="product_preview">
            <div className="product_sample"></div>
            <div className="product_sample"></div>
          </div>
          <div className="product_title_box">
            <h5>KPL Blue 7003 D</h5>
            <p>General redder grade with 10% pigment loading</p>
          </div>
          <div className="product_tags_container">
            <div className="product_card_desc">
              <span>PB 15.0</span>
              <span>Ink</span>
            </div>
            <div className="product_application">
              <span>Application:</span>
              <span>
                <IoIosCheckmarkCircle /> NC - PU
              </span>
              <span>
                <IoIosCheckmarkCircle /> NC Alcohol
              </span>
              <span>
                <IoIosCheckmarkCircle /> NC Alcohol
              </span>
              <span>
                <IoIosCheckmarkCircle /> Vinyl - EVA
              </span>
            </div>
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
