import { useScore } from "contexts/ScoreContext";
import { StyledLink } from "styled/Navbar";

import { NavigationProps } from "interfaces/index";

export default function GameOver({ navigate }: NavigationProps): JSX.Element {
  const [score, setScore] = useScore();

  console.log(score);

  if (score === -1) navigate("/");

  return (
    <div>
      <h1>Game Over</h1>
      <p>{score}</p>
      <StyledLink to="/">Go Home</StyledLink>
      <StyledLink to="/game">Play Again</StyledLink>
    </div>
  );
}
