import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "components/Navbar";

import Home from "pages/Home";
import HighScores from "pages/HighScores";
import Game from "pages/Game";
import GameOver from "pages/GameOver";

import { Container } from "styled/Container";
import { Main } from "styled/Main";
import GlobalStyle from "styled/GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Main>
        <Container>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/highscores" element={<HighScores />} />
            <Route path="/game" element={<Game />} />
            <Route path="/gameover" element={<GameOver />} />
          </Routes>
        </Container>
      </Main>
    </BrowserRouter>
  );
}

export default App;
