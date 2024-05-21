import React from "react";
import Title from "../../ui/title/title";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import Button from "../../ui/button/button";
import "./style.css";

function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages__wrapper">
        <Title>Почему фермерские продукты лучше?</Title>
        <ul className="advantages__list">
          <li className="advantages__item">
            <AdvantageCard />
          </li>
        </ul>
        <Button minWidth={260}>Купить</Button>
      </div>
    </section>
  );
}

export default Advantages;
