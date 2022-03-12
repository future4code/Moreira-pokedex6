import React from "react";
import HeaderPokedex from "../../components/HeaderPokedex";
import { Card, ContainerCard } from "./style";
import { ImgPoke } from "../home/style";
export default function Pokedex(props) {
  return (
    <div>
      <HeaderPokedex />
      <ContainerCard>
        <Card>
          <div>nome</div>
          <div>
            <ImgPoke src={""} alt="foto-pokemon" />
          </div>
          <div>
            <button>Remover</button>
            <button>Ver detalhes</button>
          </div>
        </Card>
      </ContainerCard>
    </div>
  );
}
