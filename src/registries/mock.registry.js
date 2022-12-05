export default {
	data: {
		account: {
			address: "0x886f3aeaf848c535",
			transferCount: 3142,
			tokenTransferCount: 1054,
			nftTransferCount: 2088,
			transferTransactions: {
				pageInfo: {
					hasNextPage: true,
					endCursor: "NDEwNTUwOTEvNA==",
					__typename: "PageInfo"
				},
				edges: [
					{
						transaction: {
							hash:
								"8f170497739ce2c9384d106b71fe19c8225f18b0731284a0b9fb6b70114cafdc",
							time: "2022-12-02T23:21:42.785402Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x921ea449dffec68a",
											__typename: "Account"
										},
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "91004",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"8dc847b41e1c521779524b0a98dcd47d8ddef039e97d7ce42c810a68215665c4",
							time: "2022-12-02T23:21:20.210973Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x921ea449dffec68a",
											__typename: "Account"
										},
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "85049",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"46637a5d2428d219b50277e74796444463ba28095c1c32cbc65cd6fc8fb47def",
							time: "2022-12-01T20:45:27.373224Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x921ea449dffec68a",
											__typename: "Account"
										},
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "88706",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"24f71840467d0c6332fed780c0ecc2cfa12490aaf16c7a5a0f0a38189e3004bc",
							time: "2022-12-01T15:14:41.596178Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "8924",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "72763",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"8f6da305c1ea602c240cd1d5bee8fe324b077e90fa78417470efe832de01c58e",
							time: "2022-12-01T15:13:33.793491Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "10232",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "72835",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"b7470d6217a9d4ef895481a5f3037eb35ea554187f00c22c21380c750d0ff624",
							time: "2022-12-01T10:07:00.783457Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.8de96244f54db422.SportsIconCollectible",
												__typename: "Contract"
											},
											nftId: "783894258",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"20a8e77842855d442ce065d5b4e661f8e28052ebb1358ca2af9f1ef9c98a03c7",
							time: "2022-11-30T16:10:52.166381Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [
								{
									node: {
										type: "Deposit",
										amount: {
											token: {
												id: "A.1654653399040a61.FlowToken",
												__typename: "Token"
											},
											value: "5276430002",
											__typename: "TokenAmount"
										},
										counterparty: {
											address: "0x8624b52f9ddcd04a",
											__typename: "Account"
										},
										counterpartiesCount: 2,
										__typename: "TokenTransfer"
									},
									__typename: "TokenTransferEdge"
								}
							],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: { edges: [], __typename: "NFTTransferConnection" },
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"dd7269797e0da77d68e48d8fc2711fba42fb359e63604d5618598bf8217cb403",
							time: "2022-11-30T13:24:45.704556Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [
								{
									node: {
										type: "Withdraw",
										amount: {
											token: {
												id: "A.1654653399040a61.FlowToken",
												__typename: "Token"
											},
											value: "100000000",
											__typename: "TokenAmount"
										},
										counterparty: {
											address: "0xa3db411f3801ae75",
											__typename: "Account"
										},
										counterpartiesCount: 2,
										__typename: "TokenTransfer"
									},
									__typename: "TokenTransferEdge"
								}
							],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: { edges: [], __typename: "NFTTransferConnection" },
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"0a11c987ef62f05dc79b6f51996d3409e9eef135c6727e48f9b960e75abfcfdd",
							time: "2022-11-29T12:13:07.600975Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [
								{
									node: {
										type: "Withdraw",
										amount: {
											token: {
												id: "A.3c5959b568896393.FUSD",
												__typename: "Token"
											},
											value: "500000000",
											__typename: "TokenAmount"
										},
										counterparty: {
											address: "0x097bafa4e0b48eef",
											__typename: "Account"
										},
										counterpartiesCount: 1,
										__typename: "TokenTransfer"
									},
									__typename: "TokenTransferEdge"
								}
							],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: { edges: [], __typename: "NFTTransferConnection" },
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"ac18d4e9600fa6a81a040fb83def2a13efac287d3d49dc6fa5b5eec70d6d11d5",
							time: "2022-11-29T12:12:12.059548Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [
								{
									node: {
										type: "Withdraw",
										amount: {
											token: {
												id: "A.1654653399040a61.FlowToken",
												__typename: "Token"
											},
											value: "4527725963",
											__typename: "TokenAmount"
										},
										counterparty: {
											address: "0xc6c77b9f5c7a378f",
											__typename: "Account"
										},
										counterpartiesCount: 2,
										__typename: "TokenTransfer"
									},
									__typename: "TokenTransferEdge"
								},
								{
									node: {
										type: "Deposit",
										amount: {
											token: {
												id: "A.3c5959b568896393.FUSD",
												__typename: "Token"
											},
											value: "4999999997",
											__typename: "TokenAmount"
										},
										counterparty: {
											address: "0x87f3f233f34b0733",
											__typename: "Account"
										},
										counterpartiesCount: 1,
										__typename: "TokenTransfer"
									},
									__typename: "TokenTransferEdge"
								}
							],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: { edges: [], __typename: "NFTTransferConnection" },
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"94519be38c32a4c97a143c97e44dc2b04e013a35256013c7a6b8d14abf233988",
							time: "2022-11-27T13:48:27.387295Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "43229",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"30aa21afd554bbc80f96f95917cfe500355f1d3740bd172b2027056631be8d56",
							time: "2022-11-27T13:46:23.325759Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [
								{
									node: {
										type: "Withdraw",
										amount: {
											token: {
												id: "A.1654653399040a61.FlowToken",
												__typename: "Token"
											},
											value: "500000000000",
											__typename: "TokenAmount"
										},
										counterparty: {
											address: "0x8624b52f9ddcd04a",
											__typename: "Account"
										},
										counterpartiesCount: 2,
										__typename: "TokenTransfer"
									},
									__typename: "TokenTransferEdge"
								}
							],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: { edges: [], __typename: "NFTTransferConnection" },
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"f888803e9455461822e95dd0612008990eacfb460b034245efbe69210c83a5a7",
							time: "2022-11-26T00:02:55.289805Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [
								{
									node: {
										type: "Deposit",
										amount: {
											token: {
												id: "A.1654653399040a61.FlowToken",
												__typename: "Token"
											},
											value: "500000000000",
											__typename: "TokenAmount"
										},
										counterparty: {
											address: "0x47fd53250cc3982f",
											__typename: "Account"
										},
										counterpartiesCount: 1,
										__typename: "TokenTransfer"
									},
									__typename: "TokenTransferEdge"
								}
							],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: { edges: [], __typename: "NFTTransferConnection" },
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"138edced4a5afe0212757249bd7e0e8efb9ee26a3a0b24b1f994a20b914c84cd",
							time: "2022-11-23T15:57:15.611669Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [
								{
									node: {
										type: "Deposit",
										amount: {
											token: {
												id: "A.1654653399040a61.FlowToken",
												__typename: "Token"
											},
											value: "5216869202",
											__typename: "TokenAmount"
										},
										counterparty: {
											address: "0x8624b52f9ddcd04a",
											__typename: "Account"
										},
										counterpartiesCount: 2,
										__typename: "TokenTransfer"
									},
									__typename: "TokenTransferEdge"
								}
							],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: { edges: [], __typename: "NFTTransferConnection" },
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"3e0152d8d40a7c6b3e70e427cdde76cb1c6d5b80e4ca0e36969883c81bf6f168",
							time: "2022-11-19T17:55:11.506815Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "88685",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "19043",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.Flovatar",
												__typename: "Contract"
											},
											nftId: "5965",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "23268",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "43473",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "74511",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "114723",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "68098",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"aaa32167262692bfbb420ad88eda58e2713af21a58ae2d852f7f34b52ac0affb",
							time: "2022-11-18T14:12:23.490638Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.Flovatar",
												__typename: "Contract"
											},
											nftId: "5953",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "30853",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "66683",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "114828",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "114624",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "114432",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"f8b51d58d82742072aac31c6e862be6c4e71427b28064fe4accbce246bbfb3c0",
							time: "2022-11-18T12:23:28.841278Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "9751",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "8425",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"079abe1eab05d68e0dc6d97e80a125f92e68b9f6b6c9a51419bb9ae156fec34d",
							time: "2022-11-18T12:18:48.253842Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: {
											address: "0x16ae8f1cbfceaa9e",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.Flovatar",
												__typename: "Contract"
											},
											nftId: "943",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"9d3609ee199ad004d9c69041894b671763cfd600eef1907981a9c4a90371a6bd",
							time: "2022-11-18T12:17:45.253984Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "74511",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"2b29f5d18f08c22780f8c1715e11e588864d9387e2bf71e9aff00b82969fd96d",
							time: "2022-11-18T12:17:03.663158Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "88685",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"4b14d0b505cb3f7de60e7cfa5671272d04819e192c3471c56c4d3dd22cf75ea4",
							time: "2022-11-18T12:14:08.038449Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "91893",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"cd01c486de5bea2ad67be099dccf3d38835ddf687abe3d532b80f7e26cea8d3a",
							time: "2022-11-18T11:17:45.73161Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x16ae8f1cbfceaa9e",
											__typename: "Account"
										},
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "8425",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"dfd5348a8828ce8324d762c55c3103315144a6a5feecc141d2a8da27efe01c8b",
							time: "2022-11-18T02:17:07.133814Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x921ea449dffec68a",
											__typename: "Account"
										},
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "114624",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"41d50369a07d75f52538094c4d2cbd06118e6c58cdd4c6f33eefc7c10e4a8471",
							time: "2022-11-18T02:12:06.218691Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x921ea449dffec68a",
											__typename: "Account"
										},
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "114828",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x921ea449dffec68a",
											__typename: "Account"
										},
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "114432",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x921ea449dffec68a",
											__typename: "Account"
										},
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "114723",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"cb720c00e097a6aea0a1ca7e4d3456bf646a0151efc655311e712e8ff0d89ec2",
							time: "2022-11-17T20:39:05.934791Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "75363",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "74511",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"a8b5a2e07057e2a1f071e98ed7bfc685569ec047ee9e08d552d340b093b7f40c",
							time: "2022-11-17T20:38:34.78969Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "86263",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "88685",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"47a9eff82ec1ae97a96423d69d5be35d4417b729d9cfc664c362c6d922f1d0d6",
							time: "2022-11-17T20:35:59.621111Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "86263",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "3233",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"a3403769c701c929d393b3bf08db063db791540bf9df09c57854c73c58439be5",
							time: "2022-11-17T20:32:39.292858Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "49487",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "91893",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"18ec1fe2e5b96711374371500cc407a4d14032eba05fc8e0f6d32742a5261efc",
							time: "2022-11-17T11:29:57.22459Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: {
											address: "0xe334ee6ac2f7f5d1",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "89070",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					},
					{
						transaction: {
							hash:
								"e0f202293a7212790d55090b4742bd18a915fb07deba051085caa87cf4d4ef25",
							time: "2022-11-17T09:09:04.778092Z",
							__typename: "Transaction"
						},
						tokenTransfers: {
							edges: [],
							__typename: "TokenTransferConnection"
						},
						nftTransfers: {
							edges: [
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "18392",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "19344",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "64910",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: null,
										to: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										nft: {
											contract: {
												id: "A.921ea449dffec68a.Flovatar",
												__typename: "Contract"
											},
											nftId: "5947",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "113879",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "109999",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "107620",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								},
								{
									node: {
										from: {
											address: "0x886f3aeaf848c535",
											__typename: "Account"
										},
										to: null,
										nft: {
											contract: {
												id: "A.921ea449dffec68a.FlovatarComponent",
												__typename: "Contract"
											},
											nftId: "34859",
											__typename: "NFT"
										},
										__typename: "NFTTransfer"
									},
									__typename: "NFTTransferEdge"
								}
							],
							__typename: "NFTTransferConnection"
						},
						__typename: "AccountTransferEdge"
					}
				],
				__typename: "AccountTransferConnection"
			},
			__typename: "Account"
		}
	}
};
