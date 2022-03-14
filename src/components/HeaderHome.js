import React from "react";
import { HeaderContainer, HeaderContainerDisplay } from "./style";
import { Link } from "react-router-dom";
function HeaderHome() {
  return (
    <HeaderContainer>
      <HeaderContainerDisplay>
        <Link to="/pokedex">
          <button>Pokédex</button>
        </Link>
        <h1>Pokémon Game</h1>
      </HeaderContainerDisplay>
    </HeaderContainer>
  );
}

export default HeaderHome;
