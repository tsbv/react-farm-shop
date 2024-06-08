import styled from "styled-components";

export const StyledLogo = styled.a`
  min-height: 44px;
  display: flex;
  align-items: center;
  gap: 24px;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  min-height: 44px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.15;
  color: ${(props) => props.theme.colorBlackForText};
`;
