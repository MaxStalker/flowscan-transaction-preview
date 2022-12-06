import React from "react";
import ReactDOM from "react-dom/client";
import { config } from "@onflow/fcl";
import App from "./App";
import "./index.css";

config().put("accessNode.api", "https://rest-mainnet.onflow.org");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
