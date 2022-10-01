import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          Learn. Play. <span>Code</span>
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/highscores">High Scores</Link>
        </li>
      </ul>
    </nav>
  );
}
