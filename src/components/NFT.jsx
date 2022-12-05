import "./nft.css";
const NFT = (props) => {
  const { transfer } = props;
  const { from, to = "🤷‍♂", nft } = transfer;
  const { contract, id } = nft;
  return (
    <div className="nft-container">
      <p>From: {from}</p>
      <p>To: {to}</p>
    </div>
  );
};

export default NFT;
