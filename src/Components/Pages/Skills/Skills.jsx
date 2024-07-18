import React from "react";
import { Container } from "react-bootstrap";
import "./Skills.css";
import htmllogo from "../../Assets/html logo.svg";
import npmlogo from "../../Assets/npm logo.svg";
import csslogo from "../../Assets/css logo.svg";
import jslogo from "../../Assets/javascript logo.svg";
import bootlogo from "../../Assets/bootstrap logo.svg";
import jquerylogo from "../../Assets/jquery logo.svg";
import githublogo from "../../Assets/github logo.svg";
import figmalogo from "../../Assets/figma logo.svg";
import reactlogo from "../../Assets/react-logo.svg";
import reduxlogo from "../../Assets/redux-logo.svg";
import nextlogo from "../../Assets/next-logo.svg";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";

const skillsData = [
  {
    name: "HTML 5",
    svg: <img src={htmllogo} alt="HTML 5 Logo" className="img" />,
  },
  {
    name: "CSS 3",
    svg: <img src={csslogo} alt="CSS 3 Logo" className="img" />,
  },
  {
    name: "JavaScript",
    svg: <img src={jslogo} alt="JavaScript Logo" className="img" />,
  },
  {
    name: "React.Js",
    svg: <img src={reactlogo} alt="React Logo" className="img" />,
  },
  {
    name: "Redux",
    svg: <img src={reduxlogo} alt="Redux Logo" className="img" />,
  },
  {
    name: "Next.Js",
    svg: <img src={nextlogo} alt="Next Logo" className="img" />,
  },
  {
    name: "Bootstrap",
    svg: <img src={bootlogo} alt="Bootstrap Logo" className="img" />,
  },
  {
    name: "jQuery",
    svg: <img src={jquerylogo} alt="jQuery Logo" className="img" />,
  }
];

export default function Skills() {
  const [myRef1, isVisible1, hasBeenVisible1] = useIntersectionObserver();
  const [myRef2, isVisible2, hasBeenVisible2] = useIntersectionObserver();
  const [myRef3, isVisible3, hasBeenVisible3] = useIntersectionObserver();

  return (
    <Container>
      <div id="Skills" className="skills-container">
        <h2>
          Skills in <br />
          my arsenal
        </h2>
        <div className="skills-list">
          <div
            ref={myRef1}
            className={`skills-list-1 ${
              isVisible1 && hasBeenVisible1 ? "Yes" : ""
            }`}
          >
            {skillsData.slice(0, 4).map((skill, index) => (
              <div className="skills">
                <div className="skills-card">
                  {skill.svg}
                  <div className="textBox">
                    <p className="text head">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            ref={myRef2}
            className={`skills-list-2 ${
              isVisible2 && hasBeenVisible2 ? "Yes" : ""
            }`}
          >
            {skillsData.slice(4,8).map((skill, index) => (
              <div className="skills">
                <div className="skills-card">
                  {skill.svg}
                  <div className="textBox">
                    <p className="text head">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            ref={myRef3}
            className={`skills-list-3 ${
              isVisible3 && hasBeenVisible3 ? "Yes" : ""
            }`}
          >
            {skillsData.slice(8).map((skill, index) => (
              <div className="skills">
                <div className="skills-card">
                  {skill.svg}
                  <div className="textBox">
                    <p className="text head">{skill.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
