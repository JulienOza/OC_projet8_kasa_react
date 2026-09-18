import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logement introuvable");
        }
        return response.json();
      })
      .then((data) => setProperty(data))
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) {
    return <NotFound />;
  }

  if (!property) {
    return <p>Chargement du logement…</p>;
  }

  return (
    <article>
      <h1>{property.title}</h1>
      <p>{property.location}</p>
      <p>Note : {property.rating}/5</p>

      <h2>Hôte</h2>
      <p>{property.host.name}</p>
      <img src={property.host.picture} alt={property.host.name} width="80" />

      <h2>Description</h2>
      <p>{property.description}</p>

      <h2>Tags</h2>
      <ul>
        {property.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <h2>Équipements</h2>
      <ul>
        {property.equipments.map((equipment) => (
          <li key={equipment}>{equipment}</li>
        ))}
      </ul>

      <h2>Images</h2>
      <ul>
        {property.pictures.map((picture) => (
          <li key={picture}>
            <img src={picture} alt={property.title} width="200" />
          </li>
        ))}
      </ul>
    </article>
  );
}

export default PropertyDetails;
