import { useState, useEffect } from "react";
import { NavigateFunction } from "react-router-dom";
import {
  StyledCharacter,
  StyledGame,
  StyledScore,
  StyledTimer,
} from "styled/Game";
import { Strong } from "styled/Random";

interface NavigationProps {
  navigate: NavigateFunction;
}

export default function Game({ navigate }: NavigationProps): JSX.Element {
  const [score, setScore] = useState(0);
  const MAX_SECONDS = 5;
  const [ms, setMs] = useState<number | string>(999);
  const [seconds, setSeconds] = useState<number | string>(MAX_SECONDS);

  useEffect(() => {
    const currentTime = new Date();
    const interval = setInterval(() => {
      updateTime(currentTime);
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

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

  return (
    <StyledGame>
      <StyledScore>
        Score: <Strong>{score}</Strong>
      </StyledScore>
      <StyledCharacter> A</StyledCharacter>
      <StyledTimer>
        Time: <Strong>00: 0000</Strong>
      </StyledTimer>
    </StyledGame>
  );
}
