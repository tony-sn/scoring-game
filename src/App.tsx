import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "styled-components";

import Navbar from "components/Navbar";

import { useTheme } from "hooks/useTheme";

import Game from "pages/Game";
import GameOver from "pages/GameOver";
import HighScores from "pages/HighScores";
import Home from "pages/Home";

import { Container } from "styled/Container";
import GlobalStyle from "styled/GlobalStyle";
import { Main } from "styled/Main";
import { LightTheme, DarkTheme } from "styled/Themes";

function App() {
  let navigate = useNavigate();
  const [theme, toggleTheme] = useTheme();

  const { isLoading } = useAuth0();

  const currentTheme = theme === "light" ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Main>
        {isLoading && <p>Loading...</p>}
        {!isLoading && (
          <Container>
            <Navbar toggleTheme={toggleTheme} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/highscores" element={<HighScores />} />
              <Route path="/game" element={<Game navigate={navigate} />} />
              <Route
                path="/gameover"
                element={<GameOver navigate={navigate} />}
              />
            </Routes>
          </Container>
        )}
      </Main>
    </ThemeProvider>
  );
}

export default App;
