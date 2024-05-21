import React from "react";
import logo from "../../../assets/logo.svg";
import "./style.css";

function Logo() {
  return (
    <a className="logo__link" href="/">
      <img src={logo} alt="Логотип фермер." />
      <span className="logo__text">Фермерские продукты</span>
    </a>
  );
}

export default Logo;
