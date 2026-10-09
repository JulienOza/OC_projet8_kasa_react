import { useId, useState } from "react";
import "./Accordion.css";

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="accordion">
      <h2 className="accordion__heading">
        <button
          className="accordion__trigger"
          type="button"
          id={`${panelId}-trigger`}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span>{title}</span>
          <span
            className="accordion__chevron"
            aria-hidden="true"
          />
        </button>
      </h2>
      <div
        className={`accordion__panel${isOpen ? " is-open" : ""}`}
        id={panelId}
        role="region"
        aria-hidden={!isOpen}
        aria-labelledby={`${panelId}-trigger`}
      >
        <div className="accordion__content">{children}</div>
      </div>
    </section>
  );
}

export default Accordion;
