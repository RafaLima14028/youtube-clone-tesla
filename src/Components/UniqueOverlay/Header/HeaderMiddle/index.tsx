import React from "react";

import { Container, List, Text } from "./styles";

const HeaderMiddle: React.FC = () => {
  return (
    <Container>
      <List>
        <Text>Model S</Text>
        <Text>Model 3</Text>
        <Text>Model X</Text>
        <Text>Model Y</Text>
        <Text>Solar Roof</Text>
        <Text>Solar Panels</Text>
      </List>
    </Container>
  );
};

export default HeaderMiddle;
