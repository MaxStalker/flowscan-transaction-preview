import { useNFTDetails } from "../hooks/nft.hook";
import "./nft.css";

const NFT = (props) => {
  const { transfer } = props;
  const { from, to = "🤷‍♂", nft } = transfer;
  const { contract, id } = nft;
  console.log(transfer);

  const { loading, error, details } = useNFTDetails(
    {
      owner: to,
      resource: contract + ".NFT",
      id,
    },
    []
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if(!details){
    return <p>Nothing to see here...</p>
  }

  return (
    <div className="nft-container">
      <p>From: {from}</p>
      <p>To: {to}</p>

      <section>
        <p>
          Id: <span>{details.nftDetail.id}</span>
        </p>
        <p>
          UUID: <span>{details.nftDetail.uuid}</span>
        </p>
        <p>
          Type: <span>{details.nftDetail.type}</span>
        </p>
        <p>Thumbnail:</p>{" "}
        <img className="nft-thumbnail" src={details.nftDetail.thumbnail} />
      </section>
    </div>
  );
};

export default NFT;
