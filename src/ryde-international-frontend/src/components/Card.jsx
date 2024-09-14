import React from "react";

const Card = ({
  openCard,
  content,
  currentSlide,
  handleOutsideClick,
  handleScroll,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  navigateCard,
}) => {
  if (!openCard) return null;

  const slides = content[openCard].slides;

  return (
    <div className="cardOverlay show" onClick={handleOutsideClick}>
      <div
        className="card"
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <div className="card-header">
              <h2>{content[openCard].title}</h2>
            </div>
            {slide.content}
          </div>
        ))}
      </div>

      <div className="cardNavigation">
        <button
          onClick={(event) => {
            event.stopPropagation();
            navigateCard("left");
          }}
          className="left-arrow"
        >
          {"<"}
        </button>
        <button
          onClick={(event) => {
            event.stopPropagation();
            navigateCard("right");
          }}
          className="right-arrow"
        >
          {">"}
        </button>
        <button
          onClick={(event) => {
            event.stopPropagation();
            navigateCard("up");
          }}
          className="up-arrow"
        >
          {"^"}
        </button>
        <button
          onClick={(event) => {
            event.stopPropagation();
            navigateCard("down");
          }}
          className="down-arrow"
        >
          {"v"}
        </button>
      </div>
    </div>
  );
};

export default Card;
