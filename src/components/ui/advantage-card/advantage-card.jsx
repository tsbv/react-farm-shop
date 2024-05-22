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
  category,
  name,
  description
}) {
  return (
    <article className="advantage-card">
      <AdvantageCategory className="advantage-card__category" category={category} />
      <Title size={TitleSize.SMALL}>{name}</Title>
      <p className="advantage-card__text" dangerouslySetInnerHTML={{ __html: description }}></p>
    </article>
  );
}

export default AdvantageCard;
