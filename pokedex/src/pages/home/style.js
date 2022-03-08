import styled from "styled-components";
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 46px;
  justify-items: center;
  margin-top: 80px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 6px 8px 0 rgba(0, 1, 1, 0.2);
  transition: 0.5s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(2, 0, 0, 0.2);
  }
  div {
    padding: 2px 16px;
  }
  button {
    margin: 0 8px;
  }
`;

export const Card1 = styled.div`
  display: flex;
  box-shadow: 0 6px 8px 0 rgba(0, 1, 1, 0.2);
  transition: 0.5s;
  width: 43%;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(2, 0, 0, 0.2);
  }
  button {
    margin: 20px 0px;
  }
  div {
    padding: 2px 8px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
