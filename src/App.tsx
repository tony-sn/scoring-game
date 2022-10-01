import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "components/Navbar";

import Home from "pages/Home";
import HighScores from "pages/HighScores";
import Game from "pages/Game";
import GameOver from "pages/GameOver";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/highscores" element={<HighScores />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<GameOver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
