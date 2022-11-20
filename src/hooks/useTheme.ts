import React, { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const localStorageTheme = window.localStorage.getItem("theme");
    setTheme(localStorageTheme || "light");
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    }
  };

  return [theme, toggleTheme] as const;
}
