import React from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import { Card, ContainerCard } from "./style";
import { Link } from "react-router-dom";
export default function Pokedex() {
  return (
    <div>
      <HeaderPokedex />
      <ContainerCard>
        <Card>
          <div>título</div>
          <div>
            <img src="https://source.unsplash.com/user/c_v_r/150x150" />
          </div>
          <div>
            <button> Adicionar a pokédex</button>
            <Link to="/pokedex-detail">
              <button>Ver detalhes</button>
            </Link>
          </div>
        </Card>
      </ContainerCard>
    </div>
  );
}
