import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname() || "/";

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Our Products", path: "/products" },
    { name: "Applications & Industries", path: "/about" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="menu-container">
      <p>Menu</p>

      <div id="menu-icon">
        <span className="m-line"></span>
        <span className="m-line"></span>
        <span className="m-line"></span>
      </div>

      <div className="menu-container-dropdown">
        <ul>
          {menuItems.map((item, index) => {
            // Highlight menu if pathname starts with the item's path
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
