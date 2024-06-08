import styled from "styled-components";

export const StyledAdvantages = styled.section`
  background-color: #${(props) => props.theme.colorWhite};
`;

export const AdvantagesWrapper = styled.div`
  margin: 0 auto;
  padding: 100px 90px;
  max-width: ${(props) => props.theme.pageWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 100px 50px;
  }
  
  @media (max-width: 767px) {
    padding: 100px 30px;
  }
`;

export const AdvantagesList = styled.ul`
  margin: 64px 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.indent};

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
