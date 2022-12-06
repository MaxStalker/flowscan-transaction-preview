import { useState, useEffect } from "react";
import { getNFTData } from "../services/find.service";

export const useNFTDetails = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setLoading(true);
    getNFTData(props)
      .then((r) => r.json())
      .then((result) => {
        setResult(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { loading, error, result };
};
