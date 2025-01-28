import React from "react";
import ReactGA from "react-ga4";
import resume from "../Assets/Rameez Khan's Resume 2025.pdf";
import "./Resume.css";
import download from "../Assets/CV.svg"

const Resume = () => {
  const handleDownload = () => {
    ReactGA.event({
      category: "Download",
      action: "Downloaded Resume",
    });
  };

  return (
    <div className="cv-button">
      <a href={resume} download="Rameez Khan's Resume.pdf" onClick={handleDownload}>
      <img className="svgIcon" src={download} alt="Download CV"/>
      </a>
    </div>
  );
};

export default Resume;
