import { useState } from "react";

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    try {
      setLoading(true);
      const response = await apiFunc(...args);
      setLoading(false);
      setError(false);
      setData(response);
    } catch (error) {
      console.log("Error in useApi hook", error);
      return setError(true);
    }
  };
  return { data, setData, error, loading, request };
};

export default useApi;
