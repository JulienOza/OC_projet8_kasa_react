import { useState } from "react";
import "./PropertyGallery.css";

function PropertyGallery({ pictures, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    if (activeIndex === 0) {
      setActiveIndex(pictures.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const showNext = () => {
    if (activeIndex === pictures.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div
      className="property-carousel"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Photos du logement"
    >
      <img
        className="property-carousel__image"
        src={pictures[activeIndex]}
        alt={`${title} — photo ${activeIndex + 1}`}
      />
      {pictures.length > 1 && (
        <>
          <button
            className="property-carousel__control property-carousel__control--previous"
            type="button"
            onClick={showPrevious}
            aria-label="Photo précédente"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            className="property-carousel__control property-carousel__control--next"
            type="button"
            onClick={showNext}
            aria-label="Photo suivante"
          >
            <span aria-hidden="true">›</span>
          </button>
          <span className="property-carousel__counter" aria-live="polite">
            {activeIndex + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default PropertyGallery;
