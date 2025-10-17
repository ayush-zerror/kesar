"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname(); // ✅ get current route

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Our Products", path: "/products" },
    { name: "Applications & Industries", path: "/about" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "News", path: "/news" },
    { name: "Gallery", path: "/gallery" },
    { name: "Investors", path: "/investors" },
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
            const isActive =
              pathname === item.path ||
              (item.path !== "/" && pathname.startsWith(item.path));
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
