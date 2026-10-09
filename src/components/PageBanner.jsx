import "./PageBanner.css";

function PageBanner({
  title,
  image,
  imageAlt = "",
  imagePosition = "center",
  titleId,
  overlayOpacity = 0.6,
  hasShadow = true,
}) {
  return (
    <div
      className={`page-banner${hasShadow ? " page-banner--shadow" : ""}`}
      style={{
        "--page-banner-image-position": imagePosition,
        "--page-banner-overlay-opacity": overlayOpacity,
      }}
    >
      <img className="page-banner__image" src={image} alt={imageAlt} />
      {title && (
        <h1 className="page-banner__title" id={titleId}>
          {title}
        </h1>
      )}
    </div>
  );
}

export default PageBanner;
