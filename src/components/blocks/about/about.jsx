import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import "./style";
import { AboutWrapper, StyledSection, TextWrapper, Text } from "./style";

function About({ level }) {
  return (
    <StyledSection>
      <AboutWrapper>
        <TextWrapper>
          <Title size={TitleSize.BIG} title={level}>Магазин фермерских продуктов с доставкой</Title>
          <Text>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить продукты за день до отправки заказа клиентам. Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
          </Text>
        </TextWrapper>
      </AboutWrapper>
    </StyledSection>
  );
}

export default About;
