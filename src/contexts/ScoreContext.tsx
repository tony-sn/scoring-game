import { createContext, ReactNode, useContext, useState } from "react";

import { TODO_TYPEME } from "src/interfaces";

type ScoreProviderProps = {
  children: ReactNode | undefined;
};

const ScoreContext = createContext<TODO_TYPEME>(-1); // -1 so users who won't play will never access to GameOver page
const useScore = () => useContext(ScoreContext);

function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState(-1);

  const value = [score, setScore];

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
}

export { ScoreProvider, useScore };
