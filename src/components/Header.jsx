import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Kasa</Link>
      <nav>
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
