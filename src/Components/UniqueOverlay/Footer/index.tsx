import React from "react";
import { useTransform } from "framer-motion";

import useWrapperScroll from "../../Model/useWrapperScroll";
import { Container } from "./styles";

const Footer: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container style={{ opacity }}>
      <ul>
        <li>
          <a href="#">Tesla © 2021</a>
        </li>
        <li>
          <a href="#">Privacy & Legal</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Get Newsletter</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Forums</a>
        </li>
        <li>
          <a href="#">Locations</a>
        </li>
      </ul>
    </Container>
  );
};

export default Footer;
