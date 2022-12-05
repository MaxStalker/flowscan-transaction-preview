import txMapper from "../mappers/tx.mapper";
import txData from "../registries/mock.registry";
import NFT from "./NFT.jsx";

const fixedData = txMapper(txData);

const Table = () => {
  return (
    <>
      {fixedData.map((tx) => {
        const { hash, nftTransfers } = tx;
        return (
          <div key={hash} className="single-tx">
            <h3>Hash: {hash.slice(0, 8)}</h3>
            {nftTransfers.length > 0 ? (
              nftTransfers.map((transfer) => {
                return <NFT key={transfer.nft.id} transfer={transfer} />;
              })
            ) : (
              <p className="boring">😔 No NFT transfers...</p>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Table;
