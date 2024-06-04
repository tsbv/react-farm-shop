import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.js";
import advantagesList from "../../mocks/advantagesList";
import { GlobalStyle } from "./style";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper advantages={advantagesList} />
    </>
  );
}
