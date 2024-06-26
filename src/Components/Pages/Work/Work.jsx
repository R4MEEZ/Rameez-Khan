import React from "react";
import "./Work.css";
import { Container } from "react-bootstrap";
import Digiverse from "../../Assets/digiverse.png";
import crisfood_site from "../../Assets/crisfood.png";
import ariss_site from "../../Assets/Ariss-site.png";
import silverfork_site from "../../Assets/silverfork-site.png";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";

export default function Work() {
  const [myRef1, isVisible1, hasBeenVisible1] = useIntersectionObserver();
  const [myRef2, isVisible2, hasBeenVisible2] = useIntersectionObserver();
  const [myRef3, isVisible3, hasBeenVisible3] = useIntersectionObserver();
  const [myRef4, isVisible4, hasBeenVisible4] = useIntersectionObserver();

  const crisLink = () => {
    window.open("https://crisfood.com/");
  };

  const digiLink = () => {
    window.open("https://www.crisfooddigiverse.com/");
  };

  const silverLink = () => {
    window.open("https://silverforkmadina.com/home/index.html");
  };

  const arissLink = () => {
    window.open("https://www.ariss.io/");
  };
  return (
    <>
      <Container>
        <div id="Work" className="work-container">
          <div className="work-heading">
            <h2>
              Selected works <br />
              from my portfolio
            </h2>
          </div>
          <div className="work-cases">
            <div
              ref={myRef1}
              className={`work-case-l ${
                isVisible1 && hasBeenVisible1 ? "Yes" : ""
              }`}
            >
              <div className="work-case-content">
                <div className="work-case-text">
                  <div className="work-case-brand">
                    <div className="work-case-brand-name">Crisfood</div>
                    <div className="work-case-brand-location">Bhiwandi</div>
                  </div>
                  <div className="work-case-desc">
                    Contribution - Elevated site visibility through strategic
                    SEO
                  </div>
                </div>
                <div className="work-case-link" onClick={crisLink}>
                  <p>Open Case</p>
                  <div className="arrow"></div>
                </div>
              </div>
              <div className="work-case-thumbnail">
                <img src={crisfood_site} alt="" />
              </div>
            </div>
            <div
            ref={myRef2}
            className={`work-case-r ${
              isVisible2 && hasBeenVisible2 ? "Yes" : ""
            }`}>
              <div className="work-case-content">
                <div className="work-case-text">
                  <div className="work-case-brand">
                    <div className="work-case-brand-name">Ariss</div>
                    <div className="work-case-brand-location">Bhiwandi</div>
                  </div>
                  <div className="work-case-desc">
                    Contribution - Refined responsiveness for seamless user
                    interaction.
                  </div>
                </div>
                <div className="work-case-link" onClick={arissLink}>
                  <p>Open Case</p>
                  <div className="arrow"></div>
                </div>
              </div>
              <div className="work-case-thumbnail">
                <img src={ariss_site} alt="" />
              </div>
            </div>
            <div 
            ref={myRef3}
              className={`work-case-l ${
                isVisible3 && hasBeenVisible3 ? "Yes" : ""
              }`}>
              <div className="work-case-content">
                <div className="work-case-text">
                  <div className="work-case-brand">
                    <div className="work-case-brand-name">Digiverse</div>
                    <div className="work-case-brand-location">Bhiwandi</div>
                  </div>
                  <div className="work-case-desc">
                    Contribution - Helped design impactful homepage for engaging
                    user experience.
                  </div>
                </div>
                <div className="work-case-link" onClick={digiLink}>
                  <p>Open Case</p>
                  <div className="arrow"></div>
                </div>
              </div>
              <div className="work-case-thumbnail">
                <img src={Digiverse} alt="" />
              </div>
            </div>
            <div 
            ref={myRef4}
              className={`work-case-r ${
                isVisible4 && hasBeenVisible4 ? "Yes" : ""
              }`}>
              <div className="work-case-content">
                <div className="work-case-text">
                  <div className="work-case-brand">
                    <div className="work-case-brand-name">Silver Fork</div>
                    <div className="work-case-brand-location">Mumbra</div>
                  </div>
                  <div className="work-case-desc">
                    Contribution - Helped design impactful homepage for engaging
                    user experience.
                  </div>
                </div>
                <div className="work-case-link" onClick={silverLink}>
                  <p>Open Case</p>
                  <div className="arrow"></div>
                </div>
              </div>
              <div className="work-case-thumbnail">
                <img src={silverfork_site} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
