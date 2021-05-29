import React from "react";

import { Container, Right, Text, Img } from "./styles";

const HeaderRight: React.FC = () => {
  return (
    <Container>
      <Right>
        <Text>Shop</Text>
        <Text>Tesla Account</Text>
        <Img />
      </Right>
    </Container>
  );
};

export default HeaderRight;
