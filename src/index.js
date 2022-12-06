import React from "react";
import ReactDOM from "react-dom/client";
import { config } from "@onflow/fcl";
import App from "./App";
import NFTContext from "./contexts/NFTContext";
import "./index.css";

config({
  "accessNode.api": "https://rest-mainnet.onflow.org",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NFTContext>
      <App />
    </NFTContext>
  </React.StrictMode>
);
