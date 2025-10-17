"use client";
import React from "react";
import { GrNext } from "react-icons/gr";
import { useRouter } from "next/navigation";

const Button = ({ title, color, width, link, onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      router.push(link);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`button ${color ? color : ""} ${width ? width : ""}`}
    >
      <h6>{title}</h6>
      <GrNext />
    </div>
  );
};

export default Button;
