import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import { StyledAdvantageCard, StyledAdvantageCategory, CardTopWrapper, Image, Text } from "./style";
import AdvantageCategory from "../advantage-category/advantage-category";

function AdvantageCard({
  image,
  category,
  isNegative,
  name,
  description
}) {
  return (
    <StyledAdvantageCard isNegative={isNegative}>
      <CardTopWrapper>
        <Image
            src={image}
            width={56}
            height={56}
            alt={name}
          />
        <div className="advantage-card__description-wrapper">
          <StyledAdvantageCategory isNegative={isNegative}>
            {category}
          </StyledAdvantageCategory>
          <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
            {name}
          </Title>
        </div>
      </CardTopWrapper>
      <Text
        className="advantage-card__text"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </StyledAdvantageCard>
  );
}

export default AdvantageCard;
