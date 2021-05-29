import React from "react";

import { Container, Header } from "./styles";
import HeaderLeft from "./Header/HeaderLeft";
import HeaderMiddle from "./Header/HeaderMiddle";
import HeaderRight from "./Header/HeaderRight";
import Footer from "./Footer";

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderLeft />
        <HeaderMiddle />
        <HeaderRight />
      </Header>

      <Footer />
    </Container>
  );
};

export default UniqueOverlay;
