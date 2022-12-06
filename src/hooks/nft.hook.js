import { useState, useEffect } from "react";
import { getNFTData } from "../services/find.service";
import nftRegistry from "../registries/nft.registry.js";

export const useNFTDetails = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    nftRegistry.getNFT(props).then((details) => {
      console.log({ details });
    });
    /*
    console.log("Request NFT details for:", props);
    setLoading(true);
    getNFTData(props)
      .then((details) => {
        setDetails(details);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

     */
  }, []);

  return { loading, error, details };
};
