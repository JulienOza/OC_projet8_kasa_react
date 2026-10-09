import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <h1 className="not-found__code" id="not-found-title">
        404
      </h1>
      <p className="not-found__message">
        <span>Oups! La page que </span>
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link className="not-found__link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default NotFound;
