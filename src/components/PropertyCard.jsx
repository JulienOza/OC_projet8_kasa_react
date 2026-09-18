import { Link } from "react-router-dom";

function PropertyCard({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
}

export default PropertyCard;
