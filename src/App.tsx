import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Navbar from "components/Navbar";

import Home from "pages/Home";
import HighScores from "pages/HighScores";
import Game from "pages/Game";
import GameOver from "pages/GameOver";

import { Container } from "styled/Container";
import { Main } from "styled/Main";
import GlobalStyle from "styled/GlobalStyle";

function App() {
  let navigate = useNavigate();

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Main>
      <GlobalStyle />
      <Container>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highscores" element={<HighScores />} />
          <Route path="/game" element={<Game navigate={navigate} />} />
          <Route path="/gameover" element={<GameOver navigate={navigate} />} />
        </Routes>
      </Container>
    </Main>
  );
}

export default App;
