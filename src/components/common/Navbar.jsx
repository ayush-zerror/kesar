import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <Image src="/kesar-logo.png" alt="Logo" width={1000} height={1000} />
        <p>
          Phthalocyanine <br /> Pigments
        </p>
      </div>
      <div className="menu-container">
        <p>Menu</p>
        <div id="menu-icon">
          <span className="m-line"></span>
          <span className="m-line"></span>
          <span className="m-line"></span>
        </div>
      </div>
      <div className="input-container">
        <BiSearch />
        <input type="text" placeholder="Search Products here" />
      </div>
      <div className="request-btn">
        <p>Request Quotation</p>
      </div>
    </nav>
  );
};

export default Navbar;
