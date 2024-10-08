import React from "react";

const Section = ({
  sectionName,
  sectionContent,
  visibleSection,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  openCard,
}) => {
  const isReset = openCard !== null;

  return (
    <div className={`section ${sectionName}`}>
      {Object.keys(sectionContent).map((contentKey, index) => (
        <div
          key={index}
          className={`contentDiv ${contentKey} ${isReset ? 'reset' : ''}`}
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
          <div className="teaser-image">{sectionContent[contentKey].image}</div>
          <div
            className="introText"
            style={{ opacity: visibleSection === contentKey ? 1 : 0 }}
          >
            <p>{sectionContent[contentKey].text}</p>
          </div>
          <span className="bottom-left-span">Find Out More &rarr;</span>
        </div>
      ))}
    </div>
  );
};

export default Section;
