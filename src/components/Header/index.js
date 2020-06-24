import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img
        src="http://avatars2.githubusercontent.com/u/2254731?v=4"
        alt="Avatar"
      />
      Diego Fernandes
    </User>
  </Container>
);

export default Header;
