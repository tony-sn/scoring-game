import { useState, useEffect, useCallback } from "react";

import { NavigationProps } from "src/interfaces";
import { useScore } from "contexts/ScoreContext";

import {
  StyledCharacter,
  StyledGame,
  StyledScore,
  StyledTimer,
} from "styled/Game";
import { Strong } from "styled/Random";

// TODO: Need new logic for this page:
/*
PSEUDO:

INPUT: User inputs a bunch of code: JS for example

PROCESS:
- Step 1: Learn about CodeRacer or monkeytype algorithm, read the codebase if they have on GitHub
- Step 2: Change characters to code block const
- Step 3: check currentCharacter based on the whole word
- Step 4: No longer minus point if user enter wrong, user get a point for each word correct
- Step 5: setScore change from character to full word count
- Step 6: Change second from 5s to 30s | 60s...

OUTPUT: Total score after finish typing the code block show on screen
*/

export default function Game({ navigate }: NavigationProps): JSX.Element {
  const [score, setScore] = useScore();
  const MAX_SECONDS = 5;
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const [currentCharacter, setCurrentCharacter] = useState("a");
  const [ms, setMs] = useState<number | string>(999);
  const [seconds, setSeconds] = useState<number | string>(MAX_SECONDS);

  useEffect(() => {
    setRandomCharacter();
    setScore(0);
    const currentTime = new Date();
    const interval = setInterval(() => {
      updateTime(currentTime);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const setRandomCharacter = () => {
    const randomInt: number = Math.floor(Math.random() * 36);
    setCurrentCharacter(characters[randomInt]);
  };

  const updateTime = (startTime: Date) => {
    const endTime = new Date();
    const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
    //add zeros if necessary to ensure the string has exactly 5 characters
    const formattedMsString = ("0000" + msPassedStr).slice(-5);
    //0000 - first 2 are the seconds, and the last 3 are the ms
    const updatedSeconds =
      MAX_SECONDS - parseInt(formattedMsString.substring(0, 2)) - 1;
    const updatedMs =
      1000 -
      parseInt(formattedMsString.substring(formattedMsString.length - 3));
    setSeconds(addLeadingZeros(updatedSeconds, 2));
    setMs(addLeadingZeros(updatedMs, 3));
  };

  useEffect(() => {
    if (seconds <= -1) {
      navigate("/gameOver");
    }
  }, [seconds, ms, history]);

  const addLeadingZeros = (str: string | number, length: number) => {
    let zeros = "";
    for (let i = 0; i < length; i++) {
      zeros += "0";
    }
    return (zeros + str).slice(-length);
  };

  const keyUpHandler = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === currentCharacter) {
        setScore((prevScore: number) => prevScore + 1);
      } else {
        if (score > 0) {
          setScore((prevScore: number) => prevScore - 1);
        }
      }

      setRandomCharacter();
    },
    [currentCharacter]
  );

  useEffect(() => {
    document.addEventListener("keyup", keyUpHandler);
    return () => {
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, [keyUpHandler]);

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter>{currentCharacter}</StyledCharacter>
      <StyledTimer>
        Time:{" "}
        <Strong>
          {seconds}: {ms}
        </Strong>
      </StyledTimer>
    </StyledGame>
  );
}
