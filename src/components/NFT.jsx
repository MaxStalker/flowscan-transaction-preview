import { useNFTDetails } from "../hooks/nft.hook";
import "./nft.css";

const NFT = (props) => {
  const { loading, error, details } = useNFTDetails({
    owner: "bjartek",
    resource: "A.921ea449dffec68a.FlovatarComponent.NFT",
    id: "91004",
  });
  const { transfer } = props;
  const { from, to = "🤷‍♂", nft } = transfer;
  const { contract, id } = nft;

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="nft-container">
      <p>From: {from}</p>
      <p>To: {to}</p>
    </div>
  );
};

export default NFT;
