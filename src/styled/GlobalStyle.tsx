import { createGlobalStyle } from "styled-components";
import { Theme } from "interfaces/index";

interface ThemeProps {
  theme: Theme;
}

export default createGlobalStyle`

:root {
  --main-bg-color: ${(props: ThemeProps) => props.theme.mainBgColor};
  --main-text-color: ${(props: ThemeProps) => props.theme.mainTextColor};
  --accent-color: ${(props: ThemeProps) => props.theme.accent};
}

  *{
    box-sizing: border-box;
    color: var(--main-text-color);
    margin: 0;
    font-family: sans-serif;
    font-weight: 300;
  }

  h1, h2{
    margin-bottom: 2rem;
  }
`;
