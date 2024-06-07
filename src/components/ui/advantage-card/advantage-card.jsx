import React from "react";
import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import "./style.css";
import AdvantageCategory from "../advantage-category/advantage-category";

function AdvantageCard({
  image,
  category,
  isNegative,
  name,
  description
}) {
  return (
    <article className={`advantage-card${isNegative ? " advantage-card__negative" : ""}`}>
      <div className="advantage-card__top">
        <img
            className="advantage-card__image"
            width={56}
            height={56}
            src={image}
            alt={name}
          />
        <div className="advantage-card__description-wrapper">
          <AdvantageCategory className="advantage-card__category" category={category} />
          <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
            {name}
          </Title>
        </div>
      </div>
      <p className="advantage-card__text" dangerouslySetInnerHTML={{ __html: description }}></p>
    </article>
  );
}

export default AdvantageCard;
