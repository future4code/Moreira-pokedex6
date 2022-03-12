import axios from "axios";
import { useEffect, useState } from "react";
import useGet from "../Hooks/useGet";
import { GlobalContext } from "./GlobalContext";
const GlobalState = (props) => {
  const [pokeDetails, setPokeDetails] = useState([]);
  const data = useGet("?limit=20");
  const details = [];
  const getDetails = () => {
    data.map((poke) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
        .then((res) => {
          details.push(res.data);
          setPokeDetails([...details]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    getDetails();
  }, [data]);
  return (
    <GlobalContext.Provider value={{ pokeDetails }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
