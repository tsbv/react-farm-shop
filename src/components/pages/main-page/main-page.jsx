import React from "react";
import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages/advantages";
import { TitleLevel } from "../../ui/title/title";

function MainPage({ advantages }) {
  return (
    <>
      <About level={TitleLevel.H1} />
      <Advantages advantages={advantages} level={TitleLevel.H2} />
    </>
  );
}

export default MainPage;
