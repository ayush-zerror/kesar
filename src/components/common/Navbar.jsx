import Image from "next/image";
import React from "react";
import { BiSearch } from "react-icons/bi";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
       <Link href="/"><Image src="/kesar-logo.png" alt="Logo" width={1000} height={1000} /></Link>
        <p>
          Phthalocyanine <br /> Pigments
        </p>
      </div>
     <Menu/>
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
