import {
  StyledLink,
  StyledNavbar,
  StyledNavBrand,
  StyledNavItem,
} from "styled/Navbar";
import { Accent } from "styled/Random";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLink to="/">
          Learn. Play. <Accent>Code</Accent>
        </StyledLink>
      </StyledNavBrand>
      <StyledNavItem>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/game">Game</StyledLink>
        </li>
        <li>
          <StyledLink to="/highscores">High Scores</StyledLink>
        </li>
      </StyledNavItem>
    </StyledNavbar>
  );
}
