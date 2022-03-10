import HeaderHome from "../../components/HeaderHome";
import CardPokemon from "./CardPokemon";
import { ContainerCard } from "./style";
import { GlobalContext } from "../../Global/GlobalContext";
import { useContext } from "react";
export default function Home() {
  const { data } = useContext(GlobalContext);
  const listName = data?.map((poke) => {
    return <CardPokemon key={poke.url} nomes={poke.name} />;
  });
  return (
    <div>
      <HeaderHome />
      <ContainerCard> {listName}</ContainerCard>
    </div>
  );
}
