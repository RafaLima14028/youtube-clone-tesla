import React from "react";

import { Container, Logo } from "./styles";
import { TeslaSVG } from "../../IconSVG";

const HeaderLeft: React.FC = () => {
  return (
    <Container>
      <Logo>
        <TeslaSVG />
      </Logo>
    </Container>
  );
};

export default HeaderLeft;
