import React from "react";
import { HeaderContainer, HeaderContainerDisplay } from "./style";
import { Link } from "react-router-dom";
import PokedexLogo from '../img/logo-pokedex.png';


function HeaderHome() {
  return (
    <HeaderContainer>
      <HeaderContainerDisplay>
        <Link to="/pokedex">
          <button>Pokemons</button>
        </Link>
        <img src={PokedexLogo} alt="Logo do Pokemon" />
      </HeaderContainerDisplay>
    </HeaderContainer>
  );
}

export default HeaderHome;
