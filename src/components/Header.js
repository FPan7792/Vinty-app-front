import logo from "../assets/imgs/logo-vinty.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ userToken, setUserToken }) => {
  return (
    <>
      <header className="header-container">
        <Link to={"/"}>
          <img src={logo} alt="Logo" width="80" />
        </Link>
        <div>
          {userToken === null ? (
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
          ) : (
            <button
              onClick={() => {
                Cookies.remove("token");
                setUserToken(null);
              }}
            >
              Se deconnecter
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
