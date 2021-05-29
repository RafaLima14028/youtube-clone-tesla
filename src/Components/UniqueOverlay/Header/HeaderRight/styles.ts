import styled from "styled-components";

import { BurgerSVG } from "../../IconSVG";

export const Container = styled.div`
  margin-top: -4px;
  margin-right: -8px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Right = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } ;
`;

export const Text = styled.text`
  margin-right: 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export const Img = styled(BurgerSVG)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  padding-right: 5px;
`;
