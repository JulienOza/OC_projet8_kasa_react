import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import homeBanner from "../assets/home-banner-1.jpeg";

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
    <section className="home-page" aria-labelledby="home-title">
      <div className="home-hero">
        <img
          src={homeBanner}
          alt="Paysage côtier"
          className="home-hero__image"
        />
        <h1 id="home-title" className="home-hero__title">
          Chez vous, partout et ailleurs
        </h1>
      </div>

      <ul className="property-gallery">
        {properties.map((property) => (
          <li key={property.id} className="property-gallery__item">
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
