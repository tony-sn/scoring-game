import { createContext, ReactNode, useContext, useState } from "react";

// type ContextValue<DefaultValue> = undefined | DefaultValue;
import { TODO_TYPEME } from "interfaces";

type ScoreProviderProps = {
  children: ReactNode | undefined;
};

interface ScoreContextInterface {
  score: number | undefined;
}

const ScoreContext = createContext<ScoreContextInterface | number>(-1); // -1 so users who won't play will never access to GameOver page
const useScore = () => useContext(ScoreContext);

function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState<TODO_TYPEME>(-1);

  const value = [score, setScore];

  return (
    <ScoreContext.Provider value={value}>{children}</ScoreContext.Provider>
  );
}

export { ScoreProvider, useScore };
