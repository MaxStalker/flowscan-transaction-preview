import { createContext, useState } from "react";

export const Registry = createContext({ nfts: {}, fetchNFT: null });

export default function NFTContext(props) {
  const [nfts, setNFTs] = useState({});
  const [fetched, setFetched] = useState({});

  const fetchNFT = async (contract, id, owner) => {
      const key = `contract:id`;
      if(!fetched[key]){
        
      }
      setFetched({
        ...fetched,
        [key]: true
      })
/*    if (nfts[contract] && nfts[contract][id]) {
      console.log("we already fetched this one");
      return;
    }
    const promisedResult = new Promise((resolve, reject) => {
      const timeout = 1000 + Math.round(Math.random() * 2000);
      console.log(timeout);
      setTimeout(() => {
        resolve(1337);
      }, timeout);
    });
    setNFTs({
      ...nfts,
      [contract]: {
        ...nfts.contract,
        [id]: promisedResult,
      },
    });*/
  };

  return (
    <Registry.Provider value={{ nfts, fetchNFT }}>
      {props.children}
    </Registry.Provider>
  );
}
