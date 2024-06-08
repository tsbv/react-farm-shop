import styled from "styled-components";
import { Section } from "../../styled/";
import aboutImage from "../../../assets/farmer-with-vegetables.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
`;

export const StyledSection = styled(Section)`
  background-color: ${(props) => props.theme.colorForLightBackground};
`;

export const AboutWrapper = styled.div`
  margin: 0 auto;
  padding: 183px 90px;
  position: relative;
  max-width: ${(props) => props.theme.pageWidth};
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 90px;
    transform: translateY(-50%);
    width: 446px;
    height: 447px;
    display: block;
    background-color: ${(props) => props.theme.colorForCircleBackground};
    border-radius: 100%;
    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 90px;
    width: 446px;
    height: 600px;
    margin: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 273px 627px;
    z-index: -1;
    background-image: url(${aboutImage});
  }
`;

export const TextWrapper = styled.div`
  max-width: 538px;

  @media screen and (max-width: 1030px) {
    filter: drop-shadow(2px 4px 6px #000000);
    color: ${(props) => props.theme.colorWhite};
  }
`;

export const Text = styled(Paragraph)`
  margin: 24px 0 0 0;
  padding: 0;
`;


