import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import "./style.css";
import AdvantageCategory from "../advantage-category/advantage-category";

/* function AdvantageCard() {
  return (
    <article className="advantage-card">
      <span className="advantage-card__category">Фермерские продукты</span>
      <Title size={TitleSize.SMALL}>Еда намного вкуснее</Title>
      <p className="advantage-card__text">Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники</p>
    </article>
  );
} */

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
          <Title size={TitleSize.SMALL}>{name}</Title>
        </div>
      </div>
      <p className="advantage-card__text" dangerouslySetInnerHTML={{ __html: description }}></p>
    </article>
  );
}

export default AdvantageCard;
