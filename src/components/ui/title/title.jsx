import React from "react";
import "./style.css";

export const TitleSize = {
  SMALL: "small",
  BIG: "big",
  DEFAULT: ""
};

function Title({ children, size }) {
  return (
    <h1 className={`title${size ? ` title_${size}` : ""}`}>
      {children}
    </h1>
  ); 
}

export default Title;
