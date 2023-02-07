import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./components/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <BrowserRouter>a
  <HashRouter>
    <App />
  </HashRouter>
);
