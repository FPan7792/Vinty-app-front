import logo from "../assets/imgs/logo-vinty.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <Link to={"/"}>
        <img src={logo} alt="Logo" width="80" />
      </Link>

      <nav>
        <Link to="/user/signup">
          <button>S'inscrire</button>
        </Link>
        <Link to="/user/login">
          <button>Se connecter</button>
        </Link>
        <Link to="/offer/publish">
          <button>Vends tes articles</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
