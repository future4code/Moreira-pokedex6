import React from "react";
import { HeaderContainer, HeaderContainerDisplay } from "./style";
import { Link } from "react-router-dom";
function HeaderPokedex() {
  return (
    <HeaderContainer>
      <HeaderContainerDisplay>
        <Link to="/">
          <button>Voltar</button>
        </Link>
       
        <h1>Pokédex</h1>
      </HeaderContainerDisplay>
    </HeaderContainer>
  );
}

export default HeaderPokedex;
