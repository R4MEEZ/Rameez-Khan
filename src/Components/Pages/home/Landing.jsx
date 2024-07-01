import React from "react";
import { Container } from "react-bootstrap";
import Helloimg from "../../Assets/Group.svg";
import "./Landing.css";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";

export default function Landing() {
  const [myRef, isVisible, hasBeenVisible] = useIntersectionObserver();

  return (
    <Container>
      <div
        id="Landing"
        ref={myRef}
        className={`landingContainer ${
          isVisible && hasBeenVisible ? "Yes" : ""
        }`}
      >
        <div className="landing">
          <div className="landing-heading">
            <div className="Helloimg">
              <img src={Helloimg} alt="" /> <span>,</span>
            </div>
            I'm Rameez Khan, A Well-Versed Web Developer and...
            <br />
          </div>
          <div className="landing-subheading">
            committed in crafting
            <br />
            unique, exceptional
            <br />
            digital experiences.
          </div>
        </div>
      </div>
    </Container>
  );
}

