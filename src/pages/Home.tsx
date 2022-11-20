import { useEffect, useCallback } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import CTA from "styled/CTA";
import { Accent, StyledTitle } from "styled/Random";

export default function Home(): JSX.Element {
  const { user } = useAuth0();
  const navigate = useNavigate();
  if (typeof user !== "undefined") console.log("user log: ", { user });

  const keyUpHandler = useCallback((ev: KeyboardEvent) => {
    if (ev.key === "s") {
      navigate("/game");
    } else {
      return;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [keyUpHandler]);

  return (
    <div>
      <StyledTitle>Ready to Play?</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>'s'</Accent> to start playing!
      </CTA>
    </div>
  );
}
