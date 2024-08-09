import React, { useEffect } from "react";

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

  const slides = content[openCard].slides; // content[ sec[]con[] ]

  return (
    <div className="cardOverlay show" onClick={handleOutsideClick}>
      <div
        className="card"
        onWheel={handleScroll}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="card-header">
          <h2>{content[openCard].title}</h2>
        </div>
        <div className="sliderContainer">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              {slide.content}
            </div>
          ))}
        </div>
        <div className="cardNavigation">
          <button onClick={() => navigateCard("left")} className="left-arrow">
            {"<"}
          </button>
          <button onClick={() => navigateCard("right")} className="right-arrow">
            {">"}
          </button>
          <button onClick={() => navigateCard("up")} className="up-arrow">
            {"^"}
          </button>
          <button onClick={() => navigateCard("down")} className="down-arrow">
            {"v"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
