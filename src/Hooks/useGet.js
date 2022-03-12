import { BaseUrl } from "../constants/constants";
import axios from "axios";
import { useState, useEffect } from "react";
const useGet = (url) => {
  const [data, setData] = useState([]);
  const getPoke = () => {
    axios
      .get(BaseUrl + url)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPoke();
  }, []);
  return data;
};
export default useGet;
