import React from "react";
import { HeaderContainer, HeaderContainerDisplayDetails } from "./style";
import { Link } from "react-router-dom";
import PokedexLogo from '../img/logo-pokedex.png';

function HeaderDetails() {
  return (
    <HeaderContainer>
      <HeaderContainerDisplayDetails>

      <Link to="/">
          <button>Lista de Pokémons</button>
        </Link>
        <img src={PokedexLogo} alt="Logo do Pokemon" />
        <Link to="/pokedex">
          <button>Sua pokedex</button>
        </Link>
      </HeaderContainerDisplayDetails>
    </HeaderContainer>
  );
}

export default HeaderDetails;
