import React from "react";
import Button from "../common/Button";
import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";

const LatestNews = () => {
  return (
    <div id="latest_news_section">
      <div id="latest_news_section_container">
        <div className="latest_news_dets">
          <div>
            <h4>Latest News</h4>
            <div className="news_arrow">
              <AiFillCaretRight />
              <p>
                New Sustainable Pigment Series Launched <br /> for Packaging
                Industry
              </p>
            </div>
            <p>
              Global Expansion: New Manufacturing <br /> Facility in Southeast
              Asia
            </p>
            <p>
              Partnership with Leading Automotive <br /> OEM for Next-Gen
              Coatings
            </p>
          </div>
          <Button title={"View more "} />
        </div>
        <div className="latest_news_card">
          <div className="latest_news_card_dets">
            <div>
              <h5>
                New Sustainable Pigment Series Launched for Packaging Industry
              </h5>
              <p>March 15, 2024</p>
            </div>
            <p>
              Revolutionary eco-friendly formulations reduce environmental
              impact while maintaining superior performance standards.
            </p>
          </div>
          <div className="latest_news_card_img">
            <Image
              width={1000}
              height={1000}
              src="/images/home/news.png"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
