import { query } from "@onflow/fcl";
import { default as cadence } from "./getDetails";

export const getNFTData = async () => {
	const args = (arg, t) => [
		arg("bjartek", t.String),
		arg("A.921ea449dffec68a.FlovatarComponent.NFT", t.String),
		arg("91004", t.UInt64),
		arg(
			[
				//"A.1d7e57aa55817448.MetadataViews.Traits"
			],
			t.Array(t.String)
		)
	];

	// You can read about "query" method on Flow Docs Site:
	// https://docs.onflow.org/fcl/reference/api/#query
	return query({ args, cadence });
};
