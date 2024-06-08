import React from "react";
import Title from "../../ui/title/title";
import AdvantageCard from "../../ui/advantage-card/advantage-card";
import Button from "../../ui/button/button";
import { StyledAdvantages, AdvantagesWrapper, AdvantagesList } from "./style";

function Advantages({ advantages, level }) {
  return (
    <StyledAdvantages>
      <AdvantagesWrapper>
        {advantages && advantages.length ? (
            <>
              <Title level={level}>Почему фермерские продукты лучше?</Title>
              <AdvantagesList>
                {advantages.map((advantage) => (
                  <li className="advantages__item" key={advantage.id}>
                    <AdvantageCard {...advantage} />
                  </li>
                ))}
              </AdvantagesList>
              <Button minWidth={260} link="/buy">Купить</Button>
            </>
          ) : null}
      </AdvantagesWrapper>
    </StyledAdvantages>
  );
}

export default Advantages;
