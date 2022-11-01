import { useEffect, useState } from "react";

import { Record } from "interfaces/index";
import { ScoreLI, ScoresList } from "styled/ScoresList";

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
      <h1>Highscores</h1>
      <ScoresList>
        {highScores.map((score) => (
          <ScoreLI key={score.id}>
            {score.fields.name} - {score.fields.score}
          </ScoreLI>
        ))}
      </ScoresList>
    </div>
  );
}
