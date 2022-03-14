import HeaderHome from "../../components/HeaderHome";
import CardPokemon from "../../components/CardPokemon";
import { ContainerCard, ContainerGeral } from "./style";
import { GlobalContext } from "../../Global/GlobalContext";
import { useContext } from "react";

export default function Home() {
  const { pokeDetails } = useContext(GlobalContext);
  const listPokemons = pokeDetails?.map((pokemon) => {
    return <CardPokemon
        key={pokemon.id}
        name={pokemon.name}
        pokemon={pokemon} />        
    });

  return (
    <ContainerGeral>
      <HeaderHome />
      <ContainerCard>
        {listPokemons}</ContainerCard>

    </ContainerGeral>
  );
}
