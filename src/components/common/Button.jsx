import React from "react";
import { useRouter } from "next/navigation";

const Button = ({ title, color, width, link, onClick ,icon }) => {
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
      <div className="btn-text">
        <div className="btn-text-wrap">
          <h6>{title}</h6>
         {icon && icon } 
        </div>
         <div className="btn-text-wrap">
          <h6>{title}</h6>
          {icon && icon}
        </div>
      </div>
    </div>
  );
};

export default Button;
