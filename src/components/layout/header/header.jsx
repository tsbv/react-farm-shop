import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../../layout/nav/nav";
import "./style";
import { StyledHeader, HeaderWrapper } from "./style";

function Header({
  pageUrl
}) {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo />
        <Nav pageUrl={pageUrl} />
      </HeaderWrapper>
    </StyledHeader>
  );
}

export default Header;
