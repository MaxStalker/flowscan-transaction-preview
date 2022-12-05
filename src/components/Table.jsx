import txMapper from "../mappers/tx.mapper";
import txData from "../registries/mock.registry";

const fixedData = txMapper(txData);

const Table = () => {
  return (
    <>
      {fixedData.map((tx) => {
        const { hash, nftTransfers } = tx;
        return (
          <div key={hash} className="single-tx">
            <h3>Hash: {hash.slice(0, 8)}</h3>
            <p>NFT Transfers: {nftTransfers.length}</p>
            {nftTransfers.map((transfer) => {
              const { from, to, nft } = transfer;
              return (
                <div key={nft.id}>
                  <p>From: {from} </p>
                  <p>To: {to} </p>
                  <p>
                    NFT: {nft.id} = {nft.contract}{" "}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Table;
