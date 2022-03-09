import { BaseUrl } from "../constants/constants";

const useGet=()=>{
      const [name, setName] = useState([]);
 const getPoke = () => {
   axios
     .get(BaseUrl)
     .then((res) => {
    //    console.log(res.data.results.name);
       setName(res.data.results);
     })
     .catch((err) => {
       console.log(err);
     });
 };
   useEffect(() => {
     getPoke();
   }, []);
return {}
}
export default useGet