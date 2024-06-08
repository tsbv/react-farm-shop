import React from "react";
import Logo from "../../ui/logo/logo";
import { StyledFooter, FooterWrapper, Copyright } from "./style";

function Footer() {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Logo />
        <Copyright>
          Создано 2021
        </Copyright>
      </FooterWrapper>
    </StyledFooter>
  );
}

export default Footer;
