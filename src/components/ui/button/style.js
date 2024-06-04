import styled from "styled-components";
export const StyledButton = styled.a`
  padding: 16px;
  display: block;
  min-width: 260px;
  max-width: 700px;
  min-height: 60px;
  font-family: "Inter", "Arial", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #ffffff;
  background-color: #fc9b27;
  text-align: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

  &:hover,
  &:active {
    background-color: #fc7427;
    box-shadow: inset 0 4px 0 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;
