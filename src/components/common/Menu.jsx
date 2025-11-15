import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuData } from "@/helpers/MenuData";

const Menu = () => {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu-container ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
      <p>Menu</p>

      <div id="menu-icon" >
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
              <li key={index} className={isActive ? "active" : ""}>
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
