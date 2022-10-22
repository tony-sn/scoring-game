import { useScore } from "contexts/ScoreContext";
import { StyledLink } from "styled/Navbar";

import { NavigationProps } from "interfaces/index";
import { useEffect } from "react";

export default function GameOver({ navigate }: NavigationProps): JSX.Element {
  const [score] = useScore();

  useEffect(() => {
    if (score === -1) navigate("/"); // if not play, return to home page
    return;
  }, []);

  return (
    <div>
      <h1>Game Over</h1>
      <p>{score}</p>
      <br />
      <StyledLink to="/">Go Home</StyledLink>
      <StyledLink to="/game">Play Again?</StyledLink>
    </div>
  );
}
