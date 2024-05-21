import React from "react";
import { Container } from "react-bootstrap";
import "./Skills.css";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

export default function Skills() {
  return (
    <>
      <Container>
        <div className="skills-container">
          <ParallaxProvider>
          <Parallax
                  translateX={["-400px", "0px"]}
                  translateY={["-100px", "0px"]}
                  scale={[0.55, 1]}
                  rotate={[-40, 0]}
                  easing="easeInQuad"
                >
              <h2>
                Skills in <br />
                my arsenal.
              </h2>
            </Parallax>
            <div className="skills-content">
              <ul className="skills-list">
                <Parallax
                  translateX={["400px", "0px"]}
                  translateY={["100px", "0px"]}
                  scale={[0.5, 1]}
                  rotate={[40, 0]}
                  easing="easeInQuad"
                >
                <li className="skills-items">React</li>

                </Parallax>
                <Parallax
                  translateX={["-400px", "0px"]}
                  translateY={["-100px", "0px"]}
                  scale={[0.55, 1]}
                  rotate={[-40, 0]}
                  easing="easeInQuad"
                >
                <li className="skills-items">HTML 5</li>

                </Parallax>
                <Parallax
                  translateX={["400px", "0px"]}
                  translateY={["100px", "0px"]}
                  scale={[0.5, 1]}
                  rotate={[40, 0]}
                  startScroll={100}
                  endScroll={2000}
                  easing="easeInQuad"
                >
                <li className="skills-items">CSS 3</li>

                </Parallax>
                <Parallax
                  translateX={["-400px", "0px"]}
                  translateY={["-100px", "0px"]}
                  scale={[0.55, 1]}
                  rotate={[-40, 0]}
                  easing="easeInQuad"
                >
                <li className="skills-items">Javscript</li>

                </Parallax>
                <Parallax
                  translateX={["400px", "0px"]}
                  translateY={["100px", "0px"]}
                  scale={[0.5, 1]}
                  rotate={[40, 0]}
                  easing="easeInQuad"
                >
                <li className="skills-items">Jquery</li>

                </Parallax>
                <Parallax
                  translateX={["-400px", "0px"]}
                  translateY={["-100px", "0px"]}
                  scale={[0.55, 1]}
                  rotate={[-40, 0]}
                  easing="easeInQuad"
                >
                  <li className="skills-items">Bootstrap</li>
                </Parallax>
                <Parallax
                  translateX={["400px", "0px"]}
                  translateY={["100px", "0px"]}
                  scale={[0.5, 1]}
                  rotate={[40, 0]}
                  easing="easeInQuad"
                >
                  <li className="skills-items">Tailwind CSS</li>
                </Parallax>
                <Parallax
                  translateX={["-400px", "0px"]}
                  translateY={["-100px", "0px"]}
                  scale={[0.55, 1]}
                  rotate={[-40, 0]}
                  easing="easeInQuad"
                >
                  <li className="skills-items">Figma</li>
                </Parallax>
                <Parallax
                  translateX={["400px", "0px"]}
                  translateY={["100px", "0px"]}
                  scale={[0.5, 1]}
                  rotate={[40, 0]}
                  easing="easeInQuad"
                >
                  <li className="skills-items">Github</li>
                </Parallax>
              </ul>
            </div>
          </ParallaxProvider>
        </div>
      </Container>
    </>
  );
}
