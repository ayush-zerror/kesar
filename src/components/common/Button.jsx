import React from "react";
import { GrNext } from "react-icons/gr";

const Button = ({ title, color, width }) => {
  return (
    <div
      className={`button ${color ? `${color}` : ""} ${
        width ? `${width}` : ""
      }`}
   
    >
      <h6>{title}</h6>
      <GrNext />
    </div>
  );
};

export default Button;
