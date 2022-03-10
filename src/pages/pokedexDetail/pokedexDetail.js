import React from "react";
import HeaderDetails from "../../components/HeaderDetails";
import {
  ContainerDetails,
  ContainerTipo,
  CardFoto,
  ContainerPoderes,
  ContainerAtaques,
  ContainerTipoPokemon,
} from "./style.js";

export default function PokedexDetails() {
  return (
    <div>
      <HeaderDetails />
      <ContainerDetails>
        <div>
          <CardFoto>
            <img src="https://source.unsplash.com/user/c_v_r/150x150" />
          </CardFoto>
          <CardFoto>
            <img src="https://source.unsplash.com/user/c_v_r/150x150" />
          </CardFoto>
        </div>
        <ContainerPoderes>
          <h2>Poderes</h2>
          <p>hp:45</p>
          <p>attack: 49</p>
          <p>defense: 49</p>
          <p>special-attack: 65</p>
          <p>special-defense: 65</p>
          <p>speed: 45</p>
        </ContainerPoderes>
        <div>
          <ContainerTipo>
            <h2>Tipo</h2>
            <ContainerTipoPokemon>
              <p>grass</p>
              <p>poison</p>
            </ContainerTipoPokemon>
          </ContainerTipo>
          <ContainerAtaques>
            <h2>Principais ataques</h2>
            <p>razor-wind</p>
            <p>swords-dance</p>
            <p>cut</p>
            <p>bind</p>
            <p>vine-whip</p>
          </ContainerAtaques>
        </div>
      </ContainerDetails>
    </div>
  );
}
