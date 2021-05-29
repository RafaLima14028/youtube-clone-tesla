import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const List = styled.div`
  display: none;

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } ;
`;

export const Text = styled.text`
  margin-right: 20px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;
`;
