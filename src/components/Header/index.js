import React from "react";
import { Container, Search, User } from "./styles";

const Header = () => {
  return (
    <Container>
      <Search>
        <input placeholder="Search" />
      </Search>

      <User>
        <img
          src="https://avatars1.githubusercontent.com/u/38235074?v=4"
          alt="avatar"
        />
        Douglas Brandão
      </User>
    </Container>
  );
};

export default Header;
