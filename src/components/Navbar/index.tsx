import React from "react";
import Notifications from "../Notifications";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Notifications />
    </Container>
  );
};

export default Navbar;
