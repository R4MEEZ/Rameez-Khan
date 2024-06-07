import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import logo from "../Assets/RMZ logo.png";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useIntersectionObserver } from "../../Components/Hooks/useIntersectionObserver";

export default function Navbar() {
  const [navShow, setNavShow] = useState(false);
  const [myRef, isVisible, hasBeenVisible] = useIntersectionObserver();

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
        <div
          ref={myRef}
          className={`customnav ${navShow ? "shrinked" : "expanded"} ${
            isVisible && hasBeenVisible ? "Yes" : ""
          }`}
        >
          <div className="Logo">
            <div>
              <Link
                to="Landing"
                spy={true}
                smooth={true}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <ul className={navShow ? "hide" : "show"}>
            <li className={navShow ? "shrink" : "expand"}>
              <Link
                to="Story"
                spy={true}
                smooth={true}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                Story
              </Link>
            </li>
            <li className={navShow ? "shrink" : "expand"}>
              <Link
                to="Skills"
                spy={true}
                smooth={true}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                Skills
              </Link>
            </li>
            <li className={navShow ? "shrink" : "expand"}>
            <Link
                to="Work"
                spy={true}
                smooth={true}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                Work
              </Link>
            </li>
            <li className={navShow ? "shrink" : "expand"}>
              <Link
                to="Reviews"
                spy={true}
                smooth={true}
                duration={1}
                activeClass="active"
                className="nav-link"
              >
                Review
              </Link>
            </li>
            <li className={`connect-btn ${navShow ? "shrink" : "expand"}`}>
              <Link
                to="connect"
                spy={true}
                smooth={true}
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
