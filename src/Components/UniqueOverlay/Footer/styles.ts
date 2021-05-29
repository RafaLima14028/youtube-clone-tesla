import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    li {
      list-style: none;
      font-size: 14px;

      & + li {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #393c41;

        &:hover {
          color: #000;
        }
      }
    }
  }

  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 38px;

    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`;
