import React from "react";
import { Card, Card1, ContainerCard, Container } from "./style";
import { Link } from "react-router-dom";
export default function CardPokemon(props) {
  return (
    <ContainerCard>
      <Card>
        <div>{props.nome}</div>
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
      <Card>
        <div>{props.nome}</div>
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
      <Card>
        <div>{props.nome}</div>
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
      <Card1>
        <Container>
          <div>{props.nome}</div>
          <div>
            <img src="https://source.unsplash.com/user/c_v_r/150x150" />
          </div>
        </Container>
        <div>
          <button> Adicionar a pokédex</button>
          <Link to="/pokedex-detail">
            <button>Ver detalhes</button>
          </Link>
        </div>
      </Card1>
      <Card1>
        <Container>
          <div>{props.nome}</div>
          <div>
            <img src="https://source.unsplash.com/user/c_v_r/150x150" />
          </div>
        </Container>
        <div>
          <button> Adicionar a pokédex</button>
          <Link to="/pokedex-detail">
            <button>Ver detalhes</button>
          </Link>
        </div>
      </Card1>
      <Card1>
        <Container>
          <div>{props.nome}</div>
          <div>
            <img src="https://source.unsplash.com/user/c_v_r/150x150" />
          </div>
        </Container>
        <div>
          <button> Adicionar a pokédex</button>
          <Link to="/pokedex-detail">
            <button>Ver detalhes</button>
          </Link>
        </div>
      </Card1>
    </ContainerCard>
  );
}
