import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/property/1">PropertyDetails</Link>
      </nav>
    </>
  );
}

export default NotFound;
