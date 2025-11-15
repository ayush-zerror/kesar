import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuData } from "@/helpers/MenuData";
import Image from "next/image";

const Menu = () => {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) return;
    setIsOpen(!isOpen);
  };

  const toggleMenuMobile = () => {
    if (window.innerWidth >= 768) return;
    setIsOpen(!isOpen);
  };

  // ✅ Close menu when clicking a link on mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`menu-container ${isOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <p id="menu_text">Menu</p>

      <Link href="/">
        <Image
          id="mobile_logo"
          src="/kesar-logo.webp"
          alt="Kesar"
          priority
          width={1000}
          height={1000}
        />
      </Link>

      <div id="menu-icon" onClick={toggleMenuMobile}>
        <span className="m-line"></span>
        <span className="m-line"></span>
        <span className="m-line"></span>
      </div>

      <div className="menu-container-dropdown">
        <ul>
          {MenuData.map((item, index) => {
            const isActive =
              item.path === "/"
                ? pathname === "/"
                : pathname.startsWith(item.path);

            return (
              <li
                key={index}
                className={isActive ? "active" : ""}
                onClick={handleLinkClick} // 👈 added
              >
                <Link href={item.path}>
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
