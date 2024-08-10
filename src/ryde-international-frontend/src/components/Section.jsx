import React from "react";

const Section = ({
  sectionName,
  sectionContent,
  visibleSection,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}) => {
  return (
    <div className={`section ${sectionName}`}>
      {Object.keys(sectionContent).map((contentKey, index) => (
        <div
          key={index}
          className={`contentDiv ${contentKey}`}
          style={{
            opacity:
              visibleSection === null || visibleSection === contentKey
                ? 1
                : 0.5,
            backgroundColor:
              visibleSection === contentKey || visibleSection === null
                ? "transparent"
                : "rgba(0, 0, 0, 0.3)",
          }}
          onMouseEnter={() => handleMouseEnter(contentKey)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(contentKey)}
        >
          <h3>{sectionContent[contentKey].title}</h3>
          <div>{sectionContent[contentKey].image}</div>
          <div
            style={{ opacity: visibleSection === contentKey ? 1 : 0 }}
            className="intoText"
          >
            <p>{sectionContent[contentKey].text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
