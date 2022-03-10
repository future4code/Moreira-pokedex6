import React from "react";
import { HeaderContainer, HeaderContainerDisplay } from "./style";
import { Link } from "react-router-dom";
function HeaderHome() {
  return (
    <HeaderContainer>
      <HeaderContainerDisplay>
        <Link to="/pokedex">
          <button>Pokedex</button>
        </Link>
        <h1>Home</h1>
      </HeaderContainerDisplay>
    </HeaderContainer>
  );
}

export default HeaderHome;
