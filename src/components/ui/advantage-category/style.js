import styled from "styled-components";

export const StyledAdvantageCategory = styled.span`
  background-color: ${(props) => props.$bgColor};
  margin: 0 0 4px 0;
  padding: 2px 10px;
  max-width: 340px;
  min-height: 25px;
  display: inline-block;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.colorWhite};
`;
