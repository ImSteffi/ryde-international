import { useState, useEffect } from "react";

function App() {
  const [visibleSection, setVisibleSection] = useState(null);
  const [openCard, setOpenCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const sectionOrder = [
    ["sec1con1", "sec1con2", "sec1con3"],
    ["sec2con1", "sec2con2", "sec2con3"],
    ["sec3con1", "sec3con2", "sec3con3"],
  ];

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
    if (openCard && !event.target.closest(".card")) {
      setOpenCard(null);
      setVisibleSection(null);
    }
  };

  const navigateCard = (direction) => {
    if (!openCard) return;
  
    let row, col;
  
    sectionOrder.forEach((rowSections, rowIndex) => {
      const colIndex = rowSections.indexOf(openCard);
      if (colIndex !== -1) {
        row = rowIndex;
        col = colIndex;
      }
    });
  
    if (direction === "left") {
      if (col > 0) {
        col--;
      } else if (row > 0) {
        row--;
        col = sectionOrder[row].length - 1;
      } else {
        row = sectionOrder.length - 1;
        col = sectionOrder[row].length - 1;
      }
    } else if (direction === "right") {
      if (col < sectionOrder[row].length - 1) {
        col++;
      } else if (row < sectionOrder.length - 1) {
        row++;
        col = 0;
      } else {
        row = 0;
        col = 0;
      }
    } else if (direction === "up") {
      if (row > 0) {
        row--;
      } else {
        row = sectionOrder.length - 1;
      }
    } else if (direction === "down") {
      if (row < sectionOrder.length - 1) {
        row++;
      } else {
        row = 0;
      }
    }
  
    setOpenCard(sectionOrder[row][col]);
  };  

  const content = {
    sec1con1:
      "As the founder of Ryde International, I started this journey with a vision to redefine the boundaries of global consulting. With over a decade of experience in the industry, my story is one of innovation, perseverance, and a relentless pursuit of excellence.",
    sec1con2:
      "At Ryde International, we believe in the power of collaboration, integrity, and innovation. Our core values guide everything we do, from the way we interact with clients to the solutions we deliver. We are committed to driving meaningful change for businesses worldwide.",
    sec1con3:
      "Our journey began with a single idea: to create a consulting firm that truly understands the unique challenges of today's global market. Over the years, we have grown into a trusted partner for businesses across various industries, providing them with the insights and strategies needed to thrive.",
    sec2con1:
      "Throughout my career, I have had the privilege of working with some of the most forward-thinking companies around the world. My work is centered on delivering actionable insights, sustainable growth strategies, and transformative solutions that empower businesses to succeed.",
    sec2con2:
      "Ryde International specializes in providing tailored consulting services that address the complex needs of modern businesses. From strategy development to digital transformation, we offer a comprehensive range of services designed to help our clients navigate the challenges of today's dynamic market environment.",
    sec2con3:
      "Over the years, I have partnered with a diverse range of clients, from startups to Fortune 500 companies. My focus has always been on building long-lasting relationships that are based on trust, mutual respect, and a shared commitment to achieving outstanding results.",
    sec3con1:
      "At Ryde International, design is at the heart of everything we do. Our design philosophy is about creating solutions that are not only functional but also visually compelling. We believe that great design can transform businesses and create meaningful connections with customers.",
    sec3con2:
      "Growth is more than just expanding your business; it's about creating sustainable success. At Ryde International, we work closely with our clients to develop growth strategies that are innovative, data-driven, and tailored to their unique needs. We help businesses scale and succeed in today's competitive market.",
    sec3con3:
      "Creating memorable experiences is key to building lasting customer relationships. Ryde International specializes in designing experiences that resonate with your audience, from digital platforms to physical spaces. We help you create impactful, meaningful interactions that drive engagement and loyalty.",
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
          <h3>My Story</h3>
          <div
            style={{ opacity: visibleSection === "sec1con1" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec1con1}</p>
          </div>
        </div>
        <div
          className="contentDiv sec1con2"
          onMouseEnter={() => handleMouseEnter("sec1con2")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec1con2")}
        >
          <h3>What We Believe In</h3>
          <div
            style={{ opacity: visibleSection === "sec1con2" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec1con2}</p>
          </div>
        </div>
        <div
          className="contentDiv sec1con3"
          onMouseEnter={() => handleMouseEnter("sec1con3")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec1con3")}
        >
          <h3>Our Journey</h3>
          <div
            style={{ opacity: visibleSection === "sec1con3" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec1con3}</p>
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
          <h3>My Work</h3>
          <div
            style={{ opacity: visibleSection === "sec2con1" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec2con1}</p>
          </div>
        </div>
        <div
          className="contentDiv sec2con2"
          onMouseEnter={() => handleMouseEnter("sec2con2")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec2con2")}
        >
          <h3>What Do We Do?</h3>
          <div
            style={{ opacity: visibleSection === "sec2con2" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec2con2}</p>
          </div>
        </div>
        <div
          className="contentDiv sec2con3"
          onMouseEnter={() => handleMouseEnter("sec2con3")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec2con3")}
        >
          <h3>Who I've Worked With</h3>
          <div
            style={{ opacity: visibleSection === "sec2con3" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec2con3}</p>
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
          <h3>Ryde Design</h3>
          <div
            style={{ opacity: visibleSection === "sec3con1" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec3con1}</p>
          </div>
        </div>
        <div
          className="contentDiv sec3con2"
          onMouseEnter={() => handleMouseEnter("sec3con2")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec3con2")}
        >
          <h3>Ryde Growth</h3>
          <div
            style={{ opacity: visibleSection === "sec3con2" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec3con2}</p>
          </div>
        </div>
        <div
          className="contentDiv sec3con3"
          onMouseEnter={() => handleMouseEnter("sec3con3")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("sec3con3")}
        >
          <h3>Ryde Experiences</h3>
          <div
            style={{ opacity: visibleSection === "sec3con3" ? 1 : 0 }}
            className="intoText"
          >
            <p>{content.sec3con3}</p>
          </div>
        </div>
      </div>

      {openCard && (
        <div className="cardOverlay show" onClick={handleOutsideClick}>
          <div className="card">
            <h3>{openCard}</h3>
            <p>{content[openCard]}</p>
            <div className="cardNavigation">
              <button
                className="arrow up-arrow"
                onClick={() => navigateCard("up")}
              >
                ↑
              </button>
              <button
                className="arrow down-arrow"
                onClick={() => navigateCard("down")}
              >
                ↓
              </button>
              <button
                className="arrow left-arrow"
                onClick={() => navigateCard("left")}
              >
                ←
              </button>
              <button
                className="arrow right-arrow"
                onClick={() => navigateCard("right")}
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
