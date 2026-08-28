import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <h1>About</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/property/1">PropertyDetails</Link>
      </nav>
    </>
  );
}

export default About;
