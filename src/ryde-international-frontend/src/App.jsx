import { useState, useEffect, useRef, useCallback } from "react";
import content from "./data/content.jsx";
import Section from "./components/Section.jsx";
import Card from "./components/Card.jsx";
import Loading from "./components/Loading.jsx";

function App() {
  const [visibleSection, setVisibleSection] = useState(null);
  const [openCard, setOpenCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const canSwitchSlide = useRef(true);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const sectionOrder = [
    ["sec1con1", "sec1con2", "sec1con3"],
    ["sec2con1", "sec2con2", "sec2con3"],
    ["sec3con1", "sec3con2", "sec3con3"],
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (section) => {
    if (!isMobile) {
      setVisibleSection(section);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setVisibleSection(null);
    }
  };

  const handleClick = (section) => {
    if (isMobile) {
      if (visibleSection === section) {
        setOpenCard(section);
        setVisibleSection(null);
      } else {
        setVisibleSection(section);
      }
    } else {
      setOpenCard(section);
      setCurrentSlide(0);
    }
  };

  const handleOutsideClick = (event) => {
    if (openCard && !event.target.closest(".card")) {
      setOpenCard(null);
      setVisibleSection(null);
      setCurrentSlide(0);
    }
  };

  const handleScroll = (event) => {
    if (!openCard || !canSwitchSlide.current) return;

    const direction = event.deltaY > 0 ? "down" : "up";
    const slides = content[openCard].slides;

    if (direction === "down" && currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if ( direction === "up" && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    canSwitchSlide.current = false;
    setTimeout(() => {
      canSwitchSlide.current = true;
    }, 750);
  };

  const handleTouchEnd = () => {
    if (!openCard || !canSwitchSlide.current) return;

    const touchDistance = touchStartY.current - touchEndY.current;

    if (
      touchDistance > 50 &&
      currentSlide < content[openCard].slides.length - 1
    ) {
      setCurrentSlide((prev) => prev + 1);
    } else if (touchDistance < -50 && currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }

    canSwitchSlide.current = false;
    setTimeout(() => {
      canSwitchSlide.current = true;
    }, 750);
  };

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event) => {
    touchEndY.current = event.touches[0].clientY;
  };

  const navigateCard = (direction) => {
    if (!openCard) return;

    const flatSections = sectionOrder.flat();
    const currentIndex = flatSections.indexOf(openCard);

    const getNewIndex = (direction) => {
      const colCount = sectionOrder[0].length;
      switch (direction) {
        case "left":
          return (currentIndex - 1 + flatSections.length) % flatSections.length;
        case "right":
          return (currentIndex + 1) % flatSections.length;
        case "up":
          return (
            (currentIndex - colCount + flatSections.length) %
            flatSections.length
          );
        case "down":
          return (currentIndex + colCount) % flatSections.length;
        default:
          return currentIndex;
      }
    };

    const newIndex = getNewIndex(direction);
    setOpenCard(flatSections[newIndex]);
    setCurrentSlide(0);
  };

  // if (!loadingComplete) {
  //   return <Loading onComplete={() => setLoadingComplete(true)} />;
  // }

  return (
    <main className="container" onClick={handleOutsideClick}>
      {content.backgroundImage}
      {sectionOrder.map((sections, index) => (
        <Section
          key={index}
          sectionName={`section${index + 1}`}
          sectionContent={sections.reduce((acc, sectionKey) => {
            acc[sectionKey] = content[sectionKey];
            return acc;
          }, {})}
          visibleSection={visibleSection}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          handleClick={handleClick}
        />
      ))}

      <Card
        openCard={openCard}
        content={content}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        handleOutsideClick={handleOutsideClick}
        handleScroll={handleScroll}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
        handleTouchEnd={handleTouchEnd}
        navigateCard={navigateCard}
      />
    </main>
  );
}

export default App;
