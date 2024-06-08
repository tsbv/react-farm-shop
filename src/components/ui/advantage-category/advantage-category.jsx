import React from "react";
import { StyledAdvantageCategory } from "./style";

export const CardCategory = {
  FARM: "farm-products",
  STORE: "store-products"
};

function AdvantageCategory({ className = "", category }) {
  let options;

  switch (category) {
    case CardCategory.FARM:
      options = {
        text: "Фермерские продукты",
        bgColor: "#88aa4d",
        isNegative: false
      };
      break;
    case CardCategory.STORE:
      options = {
        text: "Магазинные продукты",
        bgColor: "#f75531",
        isNegative: true
      };
      break;
    default:
      options = {
        text: "",
        bgColor: "#d8ecfe"
      };
      break;
  }

  return options.text ? (
    <StyledAdvantageCategory className={className} $bgColor={options.bgColor}>
      {options.text}
    </StyledAdvantageCategory>
  ) : null;
}

export default AdvantageCategory;
