import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useScore } from "contexts/ScoreContext";
import { StyledLink } from "styled/Navbar";
import { StyledCharacter } from "styled/Game";

import { NavigationProps, Record } from "interfaces/index";

export default function GameOver({ navigate }: NavigationProps): JSX.Element {
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState("");
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (score === -1) navigate("/"); // if not play, return to home page
    return;
  }, []);

  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const token = await getAccessTokenSilently();
        console.log(token);
        const options = {
          method: "POST",
          // NOTE: ES6 shorthand
          body: JSON.stringify({ name: "James", score }),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await fetch("/.netlify/functions/saveHighScore", options);
        const data: Record = await res.json();
        if (data.id) {
          setScoreMessage("Congrats! You got a high score!");
        } else {
          setScoreMessage("Sorry, not a high score. Keep trying!");
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (isAuthenticated) {
      saveHighScore();
    }
  }, [score]);

  return (
    <div>
      <h1>Game Over</h1>
      <h2>{scoreMessage}</h2>
      {!isAuthenticated && (
        <h2>You should log in or sign up to compete for high scores!</h2>
      )}

      <StyledCharacter>{score}</StyledCharacter>

      <br />
      <div>
        <StyledLink to="/">Go Home</StyledLink>
      </div>
      <div>
        <StyledLink to="/game">Play Again?</StyledLink>
      </div>
    </div>
  );
}
