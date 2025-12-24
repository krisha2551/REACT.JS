import axios from "axios";
import { useCallback, useState } from "react";

const useHttp = ({ url, method = "GET" }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (body = null, config) => {
      try {
        setLoading(true);

        const res = await axios({ url, method, data:body, ...config });

        setData(res.data);

        return res.data;
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    },
    [url, method]
  );

  console.log("use Data",data)



  return {
    data,
    loading,
    error,
    sendRequest,
  };
};

export default useHttp;
