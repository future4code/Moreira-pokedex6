import React from "react";
import { HeaderContainer, HeaderContainerDisplay } from "./style";
import { Link } from "react-router-dom";
import PokedexLogo from '../img/logo-pokedex.png';

function HeaderPokedex() {
  return (
    <HeaderContainer>
      <HeaderContainerDisplay>
        <Link to="/">
          <button>Voltar</button>
        </Link>
       
        <img src={PokedexLogo} alt="Logo do Pokemon" />
      </HeaderContainerDisplay>
    </HeaderContainer>
  );
}

export default HeaderPokedex;
