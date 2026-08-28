import { Link } from "react-router-dom";

function PropertyDetails() {
  return (
    <>
      <h1>PropertyDetails</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default PropertyDetails;
