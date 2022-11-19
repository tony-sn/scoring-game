import { Theme } from "interfaces/index";

const sharedStyles = {
  accent: "#e16365",
};

export const DarkTheme: Theme = {
  mainBgColor: "#333",
  mainTextColor: "#f9f9f9",
  ...sharedStyles,
};

export const LightTheme: Theme = {
  mainBgColor: "#f9f9f9",
  mainTextColor: "#333",
  ...sharedStyles,
};
