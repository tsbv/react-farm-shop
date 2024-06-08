import styled from "styled-components";
import AdvantageCategory from "../advantage-category/advantage-category";

export const StyledAdvantageCard = styled.article`
  margin: 0;
  padding: 20px;
  min-width: 314px;
  min-height: 197px;
  height: 100%;
  background-color: #e1edce;
  display: flex;
  flex-direction: column;
`;

export const CardTopWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Image = styled.img`
  display: block;
`;

/* .advantage-card__negative {
  background-color: #f8ddd7;
} */

export const StyledAdvantageCategory = styled.span`
  margin: 0 0 4px 0;
  padding: 2px 10px;
  max-width: 340px;
  min-height: 25px;
  display: inline-block;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.colorForStoreCategory
      : props.theme.colorForFarmCategory};
`;

export const Text = styled.p`
  margin: 20px 0 0 0;
  font-size: 18px;
  line-height: 1.5;
  color: #333333;

  @media (max-width: 768px) {
    margin-top: auto;
  }
`;
