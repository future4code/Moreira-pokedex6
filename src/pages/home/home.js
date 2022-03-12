import HeaderHome from "../../components/HeaderHome";
import CardPokemon from "./CardPokemon";
import { ContainerCard } from "./style";
import { GlobalContext } from "../../Global/GlobalContext";
import { useContext } from "react";

export default function Home() {
  const { pokeDetails } = useContext(GlobalContext);
  const listPokemons = pokeDetails?.map((pokemon) => {
    return (
      <CardPokemon key={pokemon.id} nomes={pokemon.name} pokemon={pokemon} />
    );
  });
  return (
    <div>
      <HeaderHome />
      <ContainerCard>{listPokemons}</ContainerCard>
    </div>
  );
}
