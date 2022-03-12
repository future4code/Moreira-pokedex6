import styled from "styled-components";
export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
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
  h2 {
    margin: 10px;
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
    background-color: bisque;
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
  :hover {
    box-shadow: 0 8px 16px 0 rgba(2, 0, 0, 0.2);
  }
  h2 {
    margin: 10px;
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
  h2 {
    margin: 10px;
  }
  p {
    margin: 10px;
  }
  :hover {
    box-shadow: 0 8px 16px 0 rgba(2, 0, 0, 0.2);
  }
`;
export const ImgPoke = styled.img`
  width: 80px;
  height: 80px;
`;