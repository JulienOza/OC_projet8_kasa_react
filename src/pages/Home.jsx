import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/property/1">PropertyDetails</Link>
      </nav>
    </>
  );
}

export default Home;
