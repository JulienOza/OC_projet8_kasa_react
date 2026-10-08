import { Link, NavLink } from "react-router-dom";
import kasaLogo from "../assets/kasa-svg-2.svg";
import "./Header.css";

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo" aria-label="Kasa - Accueil">
        <img src={kasaLogo} alt="Kasa" />
      </Link>
      <nav className="site-header__nav" aria-label="Navigation principale">
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
