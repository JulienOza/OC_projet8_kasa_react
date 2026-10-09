import "./PropertyRating.css";

function PropertyRating({ rating }) {
  const numericRating = Number(rating);
  const filledStars = Number.isFinite(numericRating)
    ? Math.max(0, Math.min(5, Math.round(numericRating)))
    : 0;

  return (
    <div
      className="property-rating"
      role="img"
      aria-label={`Note : ${rating} sur 5`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          className={`property-rating__star${star <= filledStars ? " is-active" : ""}`}
          key={star}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default PropertyRating;
