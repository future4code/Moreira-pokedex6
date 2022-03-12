import React, {useContext} from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import { ContainerCard } from "./style";
import { GlobalContext } from "../../Global/GlobalContext"
import CardPokemon from "../../components/CardPokemon";

export default function Pokedex(props) {

  const { pokedex } = useContext(GlobalContext);
  const listPokemons = pokedex.map((pokemon) => {
    return (
      <CardPokemon
        key={pokemon.id}
        name={pokemon.name}
        pokemon={pokemon} />
    );
  });

  return (
    <div>

      <HeaderPokedex />
      <ContainerCard>
        {listPokemons}

      </ContainerCard>
    </div>
  );
}


