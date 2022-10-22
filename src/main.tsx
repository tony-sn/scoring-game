import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";

import { ScoreProvider } from "contexts/ScoreContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ScoreProvider>
      <Router>
        <App />
      </Router>
    </ScoreProvider>
  </React.StrictMode>
);
