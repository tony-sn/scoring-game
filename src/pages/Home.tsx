import { useEffect } from "react";
import CTA from "styled/CTA";
import { Accent, StyledTitle } from "styled/Random";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home(): JSX.Element {
  const { user } = useAuth0();
  if (typeof user !== "undefined") console.log("user log: ", { user });

  return (
    <div>
      <StyledTitle>Ready to Play?</StyledTitle>
      <CTA to="/game">
        Click or type <Accent>'s'</Accent> to start playing!
      </CTA>
    </div>
  );
}
