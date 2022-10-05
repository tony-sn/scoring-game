import React, { ReactNode, useContext, useState } from "react";

type ContextValue<DefaultValue> = undefined | DefaultValue;

type ScoreProviderProps = {
  children: ReactNode | undefined;
};

const ScoreContext = React.createContext<ContextValue<number>>(-1); // -1 so users who won't play will never access to GameOver page
const useScore = () => useContext(ScoreContext);

function ScoreProvider({ children }: ScoreProviderProps) {
  const [score, setScore] = useState(-1);

  return (
    <ScoreContext.Provider value={[score, setScore]}>
      {children}
    </ScoreContext.Provider>
  );
}

export { ScoreProvider, useScore };
