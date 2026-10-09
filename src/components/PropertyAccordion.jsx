import { useId, useState } from "react";
import "./PropertyAccordion.css";

function PropertyAccordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="property-accordion">
      <h2 className="property-accordion__heading">
        <button
          className="property-accordion__trigger"
          type="button"
          id={`${panelId}-trigger`}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{title}</span>
          <span
            className="property-accordion__chevron"
            aria-hidden="true"
          />
        </button>
      </h2>
      <div
        className={`property-accordion__panel${isOpen ? " is-open" : ""}`}
        id={panelId}
        role="region"
        aria-hidden={!isOpen}
        aria-labelledby={`${panelId}-trigger`}
      >
        <div className="property-accordion__content">{children}</div>
      </div>
    </section>
  );
}

export default PropertyAccordion;
