import React from "react";
import { ImgPoke, CardContainer } from "./style";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CardPokemon(props) {
  const [img, setImg] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + props.nomes)
      .then((res) => {
        setImg(
          res.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CardContainer>
        <h1>{props.nomes}</h1>
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
