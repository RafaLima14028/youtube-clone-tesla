import React from "react";
import { useTransform } from "framer-motion";

import useWrapperScroll from "../Model/useWrapperScroll";
import { Container, Header, Footer } from "./styles";

import HeaderLeft from "./Header/HeaderLeft";
import HeaderMiddle from "./Header/HeaderMiddle";
import HeaderRight from "./Header/HeaderRight";

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <HeaderLeft />
        <HeaderMiddle />
        <HeaderRight />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Made with 💜</a>
          </li>
          <li>
            <a href="#">By Rafael Lima</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;

/*
const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <div className="left">
          <Logo />
        </div>

        <div className="middle">
          <Text>Model S</Text>
          <Text>Model 3</Text>
          <Text>Model X</Text>
          <Text>Model Y</Text>
          <Text>Solar Roof</Text>
          <Text>Solar Panels</Text>
        </div>

        <div className="right">
          <Text>Shop</Text>
          <Text>Tesla Account</Text>
          <Burger />
        </div>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">Made with 💜</a>
          </li>
          <li>
            <a href="#">By Rafael Lima</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};*/
