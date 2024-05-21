import React from "react";
import Logo from "../../ui/logo/logo";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Logo />
        <span className="footer__copyright">Создано 2021</span>
      </div>
    </footer>
  );
}

export default Footer;
