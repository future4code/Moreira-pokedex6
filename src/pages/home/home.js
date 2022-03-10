
import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import CardPokemon from "./CardPokemon";
import { ContainerCard } from "./style";
export default function Home() {
//  const a= "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20";
  const [name, setName] = useState([]);

  const getPoke = () => {
   axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20")
      .then((res) => {
        console.log(res.data.results);
        setName(res.data.results);
     
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  // console.log("ver", name);
  const listName = name?.map((poke) => {
    return <CardPokemon key={poke.url} nome={poke.name} />;
  });

  useEffect(() => {
    getPoke();
    
  }, []);
  return (
    <div>
      <HeaderHome />
      {/* <ContainerCard>
        <CardPokemon  nome={name} foto={img} />
      </ContainerCard> */}
      <ContainerCard>{listName}</ContainerCard>
    </div>
  );
}
