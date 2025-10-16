import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import { GrNext } from "react-icons/gr";

const GallerySection = () => {
  return (
    <div id="gallery_section">
      <div id="gallery_section_container">
        <div id="gallery_section_header">
          <div>
            <h4>Gallery</h4>
            <p>
              Explore our world-class facilities, cutting-edge research
              laboratories, and the precision that goes into every product we
              manufacture.
            </p>
          </div>
          <Button title={"Full Gallery"} />
        </div>
        <div id="gallery_section_cards">
          <div className="gallery_section_card">
            <Image
              width={1000}
              height={1000}
              src="/images/home/gallery1.png"
              alt="image"
            />
            <div className="gallery_section_card_overlay">
              <div className="overlay_tab">
                <span>Plant</span>
                <GrNext />
              </div>
            </div>
          </div>
          <div className="gallery_section_card">
            <Image
              width={1000}
              height={1000}
              src="/images/home/gallery2.png"
              alt="image"
            />
            <div className="gallery_section_card_overlay">
              <div className="overlay_tab">
                <span>Lab</span>
                <GrNext />
              </div>
            </div>
          </div>
          <div className="gallery_section_card">
            <Image
              width={1000}
              height={1000}
              src="/images/home/gallery3.png"
              alt="image"
            />
            <div className="gallery_section_card_overlay">
              <div className="overlay_tab">
                <span>Products</span>
                <GrNext />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
