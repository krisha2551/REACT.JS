import { useCallback, useState } from "react";


const URL = "http://localhost:5000";

const useHttp = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async ({ url, method = "GET", body = null, config = {} }) => {
      setLoading(true);
      setError(null);

      try {
        const response = await({
          url: URL + url,
          method,
          data: body,
          ...config, 
        });

        setData(response.data);
        
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, loading, error, sendRequest };
};

export default useHttp;
