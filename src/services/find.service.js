import { query } from "@onflow/fcl";
import { default as cadence } from "./cadence/getDetails";

export const getNFTData = async (props) => {
  const { owner, resource, id } = props;
  const args = (arg, t) => [
    // arg("bjartek", t.String),
    // arg("A.921ea449dffec68a.FlovatarComponent.NFT", t.String),
    //arg("91004", t.UInt64),
    arg(owner, t.String),
    arg(resource, t.String),
    arg(id, t.UInt64),
    arg(
      [
        //"A.1d7e57aa55817448.MetadataViews.Traits"
      ],
      t.Array(t.String)
    ),
  ];

  return query({ args, cadence });
};
