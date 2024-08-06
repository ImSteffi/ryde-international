import { useState, useEffect } from "react";

function App() {
  const [visibleSection, setVisibleSection] = useState(null);
  const [openCard, setOpenCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
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
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target.className === "cardOverlay") {
      setOpenCard(null);
      setVisibleSection(null);
    }
  };

  const handleCloseCard = () => {
    setOpenCard(null);
    setVisibleSection(null);
  };

  return (
    <main className="container" onClick={handleOutsideClick}>
      <div className="section section1">
        <div
          className="contentDiv sec1con1"
          onMouseEnter={() => handleMouseEnter("sec1con1")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec1con1")}
        >
          <h2>My Story</h2>
          <div style={{ opacity: visibleSection === "sec1con1" ? 1 : 0 }}>
            <p>LOREM IPSUM</p>
          </div>
        </div>
        <div
          className="contentDiv sec1con2"
          onMouseEnter={() => handleMouseEnter("sec1con2")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec1con2")}
        >
          <h2>What We Believe In</h2>
          <div style={{ opacity: visibleSection === "sec1con2" ? 1 : 0 }}>
            <p>LOREM IPSUM</p>
          </div>
        </div>
        <div
          className="contentDiv sec1con3"
          onMouseEnter={() => handleMouseEnter("sec1con3")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec1con3")}
        >
          <h2>Our Journey</h2>
          <div style={{ opacity: visibleSection === "sec1con3" ? 1 : 0 }}>
            <p>LOREM IPSUM</p>
          </div>
        </div>
      </div>

      <div className="section section2">
        <div
          className="contentDiv sec2con1"
          onMouseEnter={() => handleMouseEnter("sec2con1")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec2con1")}
        >
          <h2>My Work</h2>
          <div style={{ opacity: visibleSection === "sec2con1" ? 1 : 0 }}>
            <p>LOREM IPSUM</p>
          </div>
        </div>
        <div
          className="contentDiv sec2con2"
          onMouseEnter={() => handleMouseEnter("sec2con2")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec2con2")}
        >
          <h2>What Do We Do?</h2>
          <div
            className="sec2con2text"
            style={{ opacity: visibleSection === "sec2con2" ? 1 : 0 }}
          >
            <p>LOREM IPSUM</p>
          </div>
        </div>
        <div
          className="contentDiv sec2con3"
          onMouseEnter={() => handleMouseEnter("sec2con3")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec2con3")}
        >
          <h2>Who I've Worked With</h2>
          <div style={{ opacity: visibleSection === "sec2con3" ? 1 : 0 }}>
            <p>LOREM IPSUM</p>
          </div>
        </div>
      </div>

      <div className="section section3">
        <div
          className="contentDiv sec3con1"
          onMouseEnter={() => handleMouseEnter("sec3con1")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec3con1")}
        >
          <h2>Ryde Design</h2>
          <div style={{ opacity: visibleSection === "sec3con1" ? 1 : 0 }}>
            <p>LOREM IPSUM</p>
          </div>
        </div>
        <div
          className="contentDiv sec3con2"
          onMouseEnter={() => handleMouseEnter("sec3con2")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec3con2")}
        >
          <h2>Ryde Growth</h2>
          <div style={{ opacity: visibleSection === "sec3con2" ? 1 : 0 }}>
            <p>LOREM IPSUM</p>
          </div>
        </div>
        <div
          className="contentDiv sec3con3"
          onMouseEnter={() => handleMouseEnter("sec3con3")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec3con3")}
        >
          <h2>Ryde Experiences</h2>
          <div style={{ opacity: visibleSection === "sec3con3" ? 1 : 0 }}>
            <p>LOREM IPSUM</p>
          </div>
        </div>
      </div>

      {openCard && (
        <div className="cardOverlay show">
          <div className="card">
            <h3>{openCard}</h3>
            <p>LOREM IPSUM</p>
            <button onClick={handleCloseCard}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
