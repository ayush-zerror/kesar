import React from "react";
import { GrNext } from "react-icons/gr";

const Button = ({title}) => {
  return (
    <div className="button">
      <h6>{title}</h6>
      <GrNext />
    </div>
  );
};

export default Button;
