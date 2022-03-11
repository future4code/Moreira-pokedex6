import React from "react";
import { ImgPoke, CardContainer } from "./style";
import { useNavigate } from "react-router-dom";
export default function CardPokemon(props) {
  const navigate = useNavigate();
  const goToDetails = (name) => {
    navigate(`/pokedex-detail/${name}`);
  };

  return (
    <div>
      <CardContainer>
        <h1>{props.nomes}</h1>
        <div>
          <ImgPoke
            src={
              props.pokemon &&
              props.pokemon.sprites.versions["generation-v"]["black-white"]
                .animated.front_default
            }
            alt="foto-pokemon"
          />
        </div>
        <div>
          <button> Adicionar a pokédex</button>

          <button onClick={() => goToDetails(props.nomes)}>Ver detalhes</button>
        </div>
      </CardContainer>
    </div>
  );
}
