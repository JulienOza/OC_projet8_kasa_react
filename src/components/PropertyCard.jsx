import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ id, title, cover }) {
  return (
    <Link to={`/property/${id}`} className="property-card">
      <img src={cover} alt={title} className="property-card__image" />
      <h2 className="property-card__title">{title}</h2>
    </Link>
  );
}

export default PropertyCard;
