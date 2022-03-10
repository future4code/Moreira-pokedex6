import React from "react";
import { HeaderContainer, HeaderContainerDisplayDetails } from "./style";
import { Link } from "react-router-dom";
function HeaderDetails() {
  return (
    <HeaderContainer>
      <HeaderContainerDisplayDetails>
        <Link to="/pokedex">
          <button>Voltar</button>
        </Link>
        <h1>Pokedex details</h1>
        <Link to="/">
          <button>Lista de pokemons</button>
        </Link>
      </HeaderContainerDisplayDetails>
    </HeaderContainer>
  );
}

export default HeaderDetails;
