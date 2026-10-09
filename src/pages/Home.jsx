import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import PageBanner from "../components/PageBanner";
import homeBanner from "../assets/home-banner-1.jpeg";
import "./Home.css";

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
      <PageBanner
        title="Chez vous, partout et ailleurs"
        titleId="home-title"
        image={homeBanner}
        imageAlt="Paysage côtier"
        imagePosition="44% 56%"
      />

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
