import React from "react";
import "./style.css";

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
    <span
      className={`${className}`}
      style={{ backgroundColor: options.bgColor }}
    >
      {options.text}
    </span>
  ) : null;
}

export default AdvantageCategory;