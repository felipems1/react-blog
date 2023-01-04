import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="title">
        Blog
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new" className="new">
            Novo Post
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
