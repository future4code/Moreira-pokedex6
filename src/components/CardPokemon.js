import React, { useContext } from "react";
import { ImgPoke, CardContainer, } from "../pages/home/style";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Global/GlobalContext";


export default function CardPokemon({name, pokemon}) {

  const { pokedex,
    addToPokedex,
    excluirPokemon } = useContext(GlobalContext);

  const navigate = useNavigate()
  const goToDetails = () => {
    navigate(`/pokedex-detail/${name}`)
  }
  return (
    <div>
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
    </div>
  );
}