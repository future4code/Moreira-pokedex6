import styled from "styled-components";

export const ContPrincipal = styled.div`


`
export const ContainerDetails = styled.div`
  display: flex;
  margin-top: 80px;
  flex-direction: row;
  align-items: center; 
  justify-content :  space-evenly;
  color: black;
`;
export const ContainerTipoPokemon = styled.div`
  display: flex;
  align-items: center;
`;
export const ContainerTipo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  background-color: #CCE5FF;

  h2 {
    margin: 10px;
    color: green;

  }
  p {
    margin: 10px;
  }
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const CardFoto = styled.div`
  display: flex;
  align-items: center;
  margin: 46px 0px;
  width:100%;
  box-shadow: 0 8px 8px 0 rgba(0, 1, 1, 0.2);
  transition: 0.5s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(2, 0, 0, 0.2);
    background-color: #CCE5FF;
  }
`;

export const ContainerPoderes = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 66px 0px;
  box-shadow: 0 6px 8px 0 rgba(0, 1, 1, 0.2);
  transition: 0.5s;
  width: 20%;
  background-color: #CCE5FF;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(2, 0, 0, 0.2);
  }
  h2 {
    margin: 10px;
    color: green;

  }
  p {
    margin: 10px;
  }
`;
export const ContainerAtaques = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
  box-shadow: 0 6px 8px 0 rgba(0, 1, 1, 0.2);
  transition: 0.5s;
  background-color: #CCE5FF;

  h2 {
    margin: 10px;
    color: green;

  }
  p {
    margin: 10px;
  }
  :hover {
    box-shadow: 0 8px 16px 0 rgba(2, 0, 0, 0.2);
  }
`;
export const ImgPoke = styled.img`
  height: 250px;
  width: 250px;
  position: relative;
  top: 0;
  left: 0;
  border:black;
  
`;

export const Power = styled.div`
  display: flex;
  flex-direction: row;
`