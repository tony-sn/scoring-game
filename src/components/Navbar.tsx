import {
  StyledLink,
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
} from "styled/Navbar";
import { Accent } from "styled/Random";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLink to="/">
          Learn. Play. <Accent>Code</Accent>
        </StyledLink>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/game">Game</StyledLink>
        </li>
        <li>
          <StyledLink to="/highscores">High Scores</StyledLink>
        </li>

        {isAuthenticated && (
          <li>
            <button
              onClick={() =>
                logout({
                  returnTo: window.location.origin,
                })
              }
            >
              Log Out
            </button>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </li>
        )}
      </StyledNavItems>
    </StyledNavbar>
  );
}
