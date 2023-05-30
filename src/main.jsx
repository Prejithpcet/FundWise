import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import App from "./App";
//import { StateContextProvider } from "./context";
import { StateContextProvider } from "./context";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider activeChain={Sepolia}>
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>
  </ThirdwebProvider>
);
