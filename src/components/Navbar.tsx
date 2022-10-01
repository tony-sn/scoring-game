import {
  StyledLinkButton,
  StyledNavbar,
  StyledNavBrand,
  StyledNavItem,
} from "styled/Navbar";
import { Accent } from "styled/Random";

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLinkButton to="/">
          Learn. Play. <Accent>Code</Accent>
        </StyledLinkButton>
      </StyledNavBrand>
      <StyledNavItem>
        <li>
          <StyledLinkButton to="/">Home</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/game">Game</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/highscores">High Scores</StyledLinkButton>
        </li>
      </StyledNavItem>
    </StyledNavbar>
  );
}
