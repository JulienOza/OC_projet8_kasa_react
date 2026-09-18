import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";

function Home() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Chargement impossible");
        }
        return response.json();
      })
      .then((data) => setProperties(data))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p>Impossible de charger les logements.</p>;
  }

  return (
    <section>
      <h1>Chez vous, partout et ailleurs</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <PropertyCard
              id={property.id}
              title={property.title}
              cover={property.cover}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
