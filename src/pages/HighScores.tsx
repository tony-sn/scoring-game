import { useEffect, useState } from "react";

import { Record } from "interfaces/index";
import { ScoreLI, ScoresList } from "styled/ScoresList";
import { StyledTitle } from "styled/Random";

export default function HighScores(): JSX.Element {
  const [highScores, setHighScores] = useState<Record[]>([]);

  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch(".netlify/functions/getHighScores");
        const scores = await res.json();
        setHighScores(scores);
      } catch (error) {
        console.error(error);
      }
    };
    loadHighScores();
  }, []);
  return (
    <div>
      <StyledTitle>High Scores</StyledTitle>

      <ScoresList>
        {highScores.map((score, index) => (
          <ScoreLI key={score.id}>
            {index + 1}. {score.fields.name} - {score.fields.score}
          </ScoreLI>
        ))}
      </ScoresList>
    </div>
  );
}
