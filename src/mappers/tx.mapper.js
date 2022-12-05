const nftTransferMapper = (edge) => {
	return {
		from: edge.node.from?.address,
		to: edge.node.to?.address,
		nft: {
			contract: edge.node.nft.contract.id,
			id: edge.node.nft.nftId
		}
	};
};

export default (input) => {
	return input.data.account.transferTransactions.edges.map((edge) => {
		return {
			hash: edge.transaction.hash,
			nftTransfers: edge.nftTransfers.edges.map(nftTransferMapper)
		};
	});
};
