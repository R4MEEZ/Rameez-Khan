import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./CustomNavbar.css";
// import LogoName from "../Assets/logo-name.png";
// import Hamburger from "../Assets/hamburger.svg";
// import Cross from "../Assets/cross.svg";
import { Link } from "react-scroll";
import logo from "../Assets/RMZ logo.png";


export default function CustomNavbar() {
  const [navShow, setNavShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavShow(true);
      } else {
        setNavShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNav = () => {
    setNavShow(!navShow);
  };

  return (
    <>
      <Container>
        <div className={`customnav ${navShow ? "shrinked" : ""}`}>
          <div className="main-nav-logo">
            <Link to="home" spy={true} smooth={true} offset={100} duration={1}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="vr"></div>
          <ul className={navShow ? "show" : ""}>
            <li className={navShow ? "shrink" : "expand"}>
              <Link
                to="story"
                spy={true}
                smooth={true}
                offset={100}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                Story
              </Link>
            </li>
            <li className={navShow ? "shrink" : "expand"}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={100}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                Skills
              </Link>
            </li>
            <li className={navShow ? "shrink" : "expand"}>
              <Link
                to="review"
                spy={true}
                smooth={true}
                offset={100}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                Review
              </Link>
            </li>
            <li className={navShow ? "shrink" : "expand"}>
              <Link
                to="exploration"
                spy={true}
                smooth={true}
                offset={100}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                Exploration
              </Link>
            </li>

            <li className={navShow ? "shrink" : "expand"}>
              <Link
                to="footer"
                spy={true}
                smooth={true}
                offset={100}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                "Say Hi!"
              </Link>
            </li>
          </ul>
          <div className="hamburger">
            <button
              className={`menu ${navShow ? "" : "opened"}`}
              onClick={toggleNav}
              aria-label="Main Menu"
            >
              <svg width="40" height="40" viewBox="0 0 100 100">
                <path
                  className={`line line1 ${navShow ? "opened" : ""}`}
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path
                  className={`line line2 ${navShow ? "opened" : ""}`}
                  d="M 20,50 H 80"
                />
                <path
                  className={`line line3 ${navShow ? "opened" : ""}`}
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
