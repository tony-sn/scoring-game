import { useAuth0 } from "@auth0/auth0-react";
import { FaMoon, FaSun } from "react-icons/fa";

import { NavbarProps } from "interfaces/index";

import { StyledButton } from "styled/Button";
import {
  StyledLink,
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledButtonLink,
} from "styled/Navbar";
import { Accent } from "styled/Random";

export default function Navbar({
  toggleTheme,
  theme,
}: NavbarProps<HTMLButtonElement>) {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
          <StyledLink to="/highscores">High Scores</StyledLink>
        </li>
        <li>
          <StyledLink to="/game">Game</StyledLink>
        </li>

        {isAuthenticated && (
          <>
            <li>{user?.nickname}</li>
            <li>
              <StyledButtonLink
                onClick={() =>
                  logout({
                    returnTo: window.location.origin,
                  })
                }
              >
                Log Out
              </StyledButtonLink>
            </li>
          </>
        )}
        {!isAuthenticated && (
          <li>
            <button onClick={() => loginWithRedirect()}>Login</button>
          </li>
        )}
        <li>
          <StyledButton onClick={toggleTheme}>
            {theme === "dark" ? <FaMoon /> : <FaSun />}
          </StyledButton>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
