import Image from "next/image";
import React from "react";

const AboutInfo = () => {
  return (
    <div id="about_info">
      <div id="about_info_container">
        <div className="about_info_card">
          <Image
            width={1000}
            height={1000}
            src="/images/about/logo1.webp"
            alt="logo"
          />
          <h5>Manufacturing Units</h5>
          <p>CPC crude · Alpha Blue · Beta Blue · Pigment Green 7</p>
        </div>
        <div className="about_info_card">
          <Image
            width={1000}
            height={1000}
            src="/images/about/logo2.webp"
            alt="logo"
          />
          <h5>Certifications</h5>
          <p>ISO 9001:2015; REACH-registered grades</p>
        </div>
        <div className="about_info_card">
          <Image
            width={1000}
            height={1000}
            src="/images/about/logo3.webp"
            alt="logo"
          />
          <h5>Employees</h5>
          <p>550+ employees, strong repeat business culture</p>
        </div>
        <div className="about_info_card">
          <Image
            width={1000}
            height={1000}
            src="/images/about/logo4.webp"
            alt="logo"
          />
          <h5>Headquarters</h5>
          <p>BKC Mumbai, Maharashtra, India</p>
        </div>
        <div className="about_info_card">
          <Image
            width={1000}
            height={1000}
            src="/images/about/logo5.webp"
            alt="logo"
          />
          <h5>Manufacturing Plant</h5>
          <p>MIDC Lote Parshuram, Ratnagiri, Maharashtra, India</p>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
