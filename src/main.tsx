import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import "./index.css";

import { ScoreProvider } from "contexts/ScoreContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4qtpar7jgfmybofo.us.auth0.com"
      clientId="7FvWD1luTjixDQ1nssPg6DefjLPLK811"
      redirectUri={window.location.origin}
    >
      <ScoreProvider>
        <Router>
          <App />
        </Router>
      </ScoreProvider>
    </Auth0Provider>
  </React.StrictMode>
);
