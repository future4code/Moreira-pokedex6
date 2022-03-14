import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: green;
  border: 1px solid black;
  button{
    background-color: #f2c13e; 
    padding: 10px 20px; 
    outline: none;
    border: #2f2e9a solid 2px;
    color: #2f2e9a;
    font-weight: 600;
    font-size: 15px;
    margin: 1rem;
    border-radius: 7px;
    cursor: pointer;
    opacity: 0.9;
    :hover{
    opacity: 1;

    }
  }
`;
export const HeaderContainerDisplay = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  

  img{
        width: 200px
  }
    
`;
export const HeaderContainerDisplayDetails = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color:green;

  img{
        width: 200px
  }
`;

export const CardContainer = styled.div`
  width: 300px;
  padding: 1rem 0;
  border-radius: 8px ;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-position: bottom right;
  border: 1.5px solid black;
  background-color: white;
  margin: 20px 20px;
  //time to execute the transition //how long it lasts
  transition: all 0.3s;
  :hover {
    transform: translate(-2%, -2%) skew(-1deg, -1deg) translate3d(0, 0, 0);
    transform-style: preserve-3d;
    box-shadow: 8px 8px 4px green;
  }
  button {
    background-color: #f2c13e; 
    padding: 9px 16px; 
    outline: none;
    border: #2f2e9a solid 2px;
    color: #2f2e9a;
    font-weight: 600;
    font-size: 15px;
    margin: 0.4rem;
    border-radius: 7px;
    cursor: pointer;
    opacity: 0.9;
    :hover{
    opacity: 1;

    }
  }
`;

export const ImgPoke = styled.img`
  width: 82px;
  height: 82px;
  left: auto;
  right: auto;


`;