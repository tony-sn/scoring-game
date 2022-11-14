import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import "./index.css";

import config from "./config.json";

import { ScoreProvider } from "contexts/ScoreContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
      audience={config.audience}
    >
      <ScoreProvider>
        <Router>
          <App />
        </Router>
      </ScoreProvider>
    </Auth0Provider>
  </React.StrictMode>
);
