import { useContext, useState } from "react";
import Table from "./components/Table";
import { Registry } from "./contexts/NFTContext.js";
import "./index.css";

export default function App() {
  const { nfts, fetchNFT } = useContext(Registry);
  const [value, setValue] = useState("bazinga");
  return (
    <div className="App">
      <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button
          onClick={() => {
            fetchNFT(value, Math.floor(Math.random() * 15000), 1);
          }}
        >
          Fetch
        </button>
      </div>
      {Object.keys(nfts).map((key) => {
        return (
          <div key={key}>
            <h3>{key}</h3>
            {Object.keys(nfts[key]).map((id) => {
              return (
                <p key={id}>
                  {id} - {typeof nfts[key][id]}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
