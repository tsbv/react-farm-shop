import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import advantagesList from "../../mocks/advantagesList";

export default function App() {
  return <PageWrapper advantages={advantagesList} />;
}
