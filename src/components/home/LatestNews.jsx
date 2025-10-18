import React, { useEffect, useRef } from "react";
import Button from "../common/Button";
import Image from "next/image";
import { AiFillCaretRight } from "react-icons/ai";
import { GrNext } from "react-icons/gr";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LatestNews = () => {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
    const image = imageRef.current;
    const section = sectionRef.current;

    // Zoom-out reveal animation (plays when section hits viewport)
    const tl = gsap.fromTo(
      image,
      { scale: 1.2 },
      {
        scale: 1,
        duration: 1.5, // controls reveal speed
        ease: "power3.out", // smooth ease-out effect
        scrollTrigger: {
          trigger: section,
          start: "top 90%", // starts when section is 70% from top of viewport
          toggleActions: "play none none reverse",
          // play when enters, reverse when scrolling back up
        },
      }
    );

    // Cleanup on unmount
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

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
          <Button title={"View more "} icon={<GrNext />} />
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

          {/* Zoom-out effect image */}
          <div className="latest_news_card_img" ref={sectionRef}>
            <Image
              ref={imageRef}
              width={1000}
              height={1000}
              src="/images/home/news.webp"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
