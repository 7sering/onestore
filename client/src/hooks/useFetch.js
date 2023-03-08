import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
  const [data, setData] = useState();

  const makeApiCall = async () => {
    const response = await fetchDataFromApi(endpoint);
    setData(response);
  };

  useEffect(() => {
    makeApiCall();
  }, [endpoint]);

  return {data};
};

export default useFetch;
