import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Global/GlobalContext";
import { CardContainer, ImgPoke } from "./style";


export default function CardPokemon({name, pokemon}) {

  const { pokedex,
    addToPokedex,
    excluirPokemon } = useContext(GlobalContext);

  const navigate = useNavigate()
  const goToDetails = () => {
    navigate(`/pokedex-detail/${name}`)
  }
  return (
      <CardContainer>
        <h1>{name}</h1>
        <div>
          <ImgPoke
            src={
              pokemon &&
              pokemon.sprites.versions["generation-v"]["black-white"]
                .animated.front_default
            }
            alt="foto-pokemon"
          />
        </div>
        <div>
          {pokedex.includes(pokemon) ? <button onClick={() => excluirPokemon(pokemon)}>Remover</button> :
            <button onClick={() => addToPokedex(pokemon)}>Adicionar</button>}
          <button onClick={goToDetails}>Ver detalhes</button>
        </div>
      </CardContainer>
  
  );
}