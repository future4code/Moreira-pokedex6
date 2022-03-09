import React from "react";
import { Card, ImgPoke, CardContainer } from "./style";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function CardPokemon(props) {
  const [img, setImg] = useState([]);
  const getPokeFoto = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + props.nome)
      .then((res) => {
        // console.log(res.data);
        //moves
        // console.log(
        //   "moves",
        //   // res.data.moves
        //   // res.data.moves[0].move.name,
        //   // res.data.moves[1]?.move.name,
        //   // res.data.moves[2]?.move.name,
        //   // res.data.moves[3]?.move.name,
        //   // res.data.moves[4]?.move.name,
        //   // res.data.moves[5]?.move.name,
        //   // res.data.moves[6]?.move.name
        // );
        // types
        // console.log(
        //   "types",
        //   res.data.types[0].type.name,
        //   res.data.types[1]?.type.name
        // );
        // images
        // console.log(
        //   "images",
        //   res.data.sprites.front_default,
        //   res.data.sprites.back_default
        // );
        //abilities
        // console.log(
        //   "abilities",
        //   res.data.abilities[0]?.ability.name,
        //   res.data.abilities[1]?.ability.name,
        //   res.data.abilities[2]?.ability.name,
        // );
        setImg(res.data.sprites.front_default);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPokeFoto();
  }, []);
  return (
    <div>
      <CardContainer>
        <div>{props.nome}</div>
        <div>
          <ImgPoke src={img} alt="foto-pokemon" />
        </div>
        <div>
          <button> Adicionar a pokédex</button>
          <Link to="/pokedex-detail">
            <button>Ver detalhes</button>
          </Link>
        </div>
      </CardContainer>
    </div>
  );
}
