import React from "react";
import { Container } from "react-bootstrap";
import "./Story.css";
import ariss from "../../Assets/Ariss-logo.png";
import crisfood from "../../Assets/crisfood-logo.png";
import unity from "../../Assets/unity-logo.png";
import firewings from "../../Assets/firewings-log.png";
import gazeebo from "../../Assets/gazeebo-logo.png";
import silverfork from "../../Assets/silverfork-logo.png";
import storypfp from "../../Assets/Story pfp.png";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";

export default function Story() {
  const [myRef, isVisible, hasBeenVisible] = useIntersectionObserver();

  return (
    <>
      <Container>
        <div className="story-parent" >
          <div id="Story" className="story-container">
            <div className="story-heading">
              <h2 className="text-center">
                A Formal
                <br />
                Introduction.
              </h2>
            </div>
            <div ref={myRef} className="story-section">
              <div className="story-content">
                <div className={`story-img ${
            isVisible && hasBeenVisible ? "Yes" : ""
          }`}>
                  <img src={storypfp} alt="" />
                </div>
                <div className={`story-text ${
            isVisible && hasBeenVisible ? "Yes" : ""
          }`}>
                  <div className="story-para">
                    I am a proficient React JS Frontend Developer currently
                    excelling within the dynamic environment of Crisfood Online
                    LLP since 2023. With a dedicated commitment to crafting
                    visually appealing websites.
                  </div>
                  <div className="story-para">
                    My skill set encompasses a mastery of ReactJS, Express,
                    NodeJS, MySQL, along with a keen expertise in seamlessly
                    integrating REST APIs while prioritizing SEO optimization.
                  </div>
                  <div className="story-para">
                    I join forces with founders to create compelling stories and
                    digital experiences. Ones that make their products shine,
                    resonate with users, and attract more investors.
                  </div>
                </div>
              </div>
              <div className="products">
                <div className="products-text">
                  So far I have helped create 5+ products
                </div>
                <ul className="products-list">
                  <li>
                    <img src={ariss} alt="" />
                  </li>
                  <li>
                    <img src={gazeebo} alt="" />
                  </li>
                  <li>
                    <img src={unity} alt="" />
                  </li>
                  <li>
                    <img src={crisfood} alt="" />
                  </li>
                  <li>
                    <img src={silverfork} alt="" />
                  </li>
                  <li>
                    <img src={firewings} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
