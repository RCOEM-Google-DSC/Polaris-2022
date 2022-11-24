import "./home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">Hello World</header>
      <Link to="/hawai">Go to Hawai</Link>
    </div>
  );
}
