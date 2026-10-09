import { useState } from "react";
import "./PropertyGallery.css";

function PropertyGallery({ pictures = [], cover, title }) {
  const images = pictures.length > 0 ? pictures : cover ? [cover] : [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % images.length);
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
        src={images[activeIndex]}
        alt={`${title} — photo ${activeIndex + 1}`}
      />
      {images.length > 1 && (
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
            {activeIndex + 1}/{images.length}
          </span>
        </>
      )}
    </div>
  );
}

export default PropertyGallery;
