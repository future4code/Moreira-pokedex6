import useGet from "../Hooks/useGet";
import { GlobalContext } from "./GlobalContext";
const GlobalState = (props) => {
  const data  = useGet("?limit=20&offset=20");

  return <GlobalContext.Provider value={{data}}>{props.children}</GlobalContext.Provider>;
};
export default GlobalState;
