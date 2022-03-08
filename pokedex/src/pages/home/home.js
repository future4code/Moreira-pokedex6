import React from "react";
import HeaderHome from "../../components/HeaderHome";
import CardPokemon from "./CardPokemon";
export default function Home() {
  return (
    <div>
      <HeaderHome />

      <CardPokemon nome="título" />
    </div>
  );
}
