import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropertyAccordion from "../components/PropertyAccordion";
import PropertyGallery from "../components/PropertyGallery";
import PropertyRating from "../components/PropertyRating";
import NotFound from "./NotFound";
import "./PropertyDetails.css";

function PropertyDetails() {
  const { id } = useParams();
  const [result, setResult] = useState({
    id: null,
    property: null,
    status: "loading",
  });

  useEffect(() => {
    const controller = new AbortController();

    fetch(`http://localhost:8080/api/properties/${id}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.status === 404) {
          setResult({ id, property: null, status: "not-found" });
          return null;
        }
        if (!response.ok) {
          throw new Error(`Chargement impossible (${response.status})`);
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setResult({ id, property: data, status: "success" });
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          setResult({ id, property: null, status: "error" });
        }
      });

    return () => controller.abort();
  }, [id]);

  const isCurrentResult = result.id === id;
  const status = isCurrentResult ? result.status : "loading";
  const property = isCurrentResult ? result.property : null;

  if (status === "not-found") {
    return <NotFound />;
  }

  if (status === "error") {
    return (
      <p className="property-details__message" role="alert">
        Impossible de charger ce logement. Veuillez réessayer.
      </p>
    );
  }

  if (!property) {
    return (
      <p className="property-details__message" role="status">
        Chargement du logement…
      </p>
    );
  }

  return (
    <article className="property-details">
      <PropertyGallery
        pictures={property.pictures}
        cover={property.cover}
        title={property.title}
      />

      <div className="property-details__summary">
        <div className="property-details__heading">
          <h1 className="property-details__title">{property.title}</h1>
          <p className="property-details__location">{property.location}</p>
          <ul className="property-details__tags" aria-label="Étiquettes">
            {property.tags.map((tag) => (
              <li className="property-details__tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="property-details__host-rating">
          <div className="property-details__host">
            <span className="property-details__host-name">
              {property.host.name}
            </span>
            <img
              className="property-details__host-picture"
              src={property.host.picture}
              alt={`Hôte : ${property.host.name}`}
            />
          </div>
          <PropertyRating rating={property.rating} />
        </div>
      </div>

      <div className="property-details__accordions">
        <PropertyAccordion title="Description">
          <p>{property.description}</p>
        </PropertyAccordion>
        <PropertyAccordion title="Équipements">
          <ul className="property-details__equipment-list">
            {property.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </PropertyAccordion>
      </div>
    </article>
  );
}

export default PropertyDetails;
