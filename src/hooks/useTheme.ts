import React, { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return [theme, toggleTheme] as const;
}
