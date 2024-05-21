import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Loading.css";
import RMZ from "../../Assets/RMZ.svg";

export default function Loading() {
  const textRef = useRef(null);
  const shapeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(shapeRef.current, {
      duration: 1,
      scale: 30,
      rotate: 40,
      ease: "Expo.easeIn",
    }).to(
      textRef.current,
      {
        duration: 1,
        x: 0, // Changed translateX to x
        ease: "Power2.easeIn",
      },
      0
    );

    const handleScroll = () => {
      const progress = window.scrollY / 1000;
      tl.progress(progress);
      document.body.style.setProperty("--scroll", progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once after initial render

  return (
    isVisible && (
      <div className="track">
        <div className="overlay">
          <div className="shape">
            <div className="scale">
              <div ref={shapeRef} className="rotate">
                {" "}
                {/* Use ref */}
                <div className="img">
                  <img src={RMZ} alt="" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162" style={{ enableBackground: 'new 0 0 162 162' }} xmlSpace="preserve">
                    <path className="hsc-img-path" d="M108 88.7c-10.8 0-19.7 8.8-19.7 19.7v47.4c0 1.9-1.5 3.4-3.4 3.4h-8.6c-1.9 0-3.4-1.5-3.4-3.4v-47.4c0-10.8-8.8-19.7-19.7-19.7H6.4c-1.9 0-3.4-1.5-3.4-3.4v-8c0-1.9 1.5-3.4 3.4-3.4h46.9c10.8 0 19.7-8.8 19.6-19.7V6.4c0-1.9 1.5-3.4 3.4-3.4H85c1.9 0 3.4 1.5 3.4 3.4v47.8c0 10.8 8.8 19.7 19.7 19.7h46.6c1.9 0 3.4 1.5 3.4 3.4v8c0 1.9-1.5 3.4-3.4 3.4H108z" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} fill="#00FFFFFF "></path> 
    </svg>*/}
                </div>
              </div>
            </div>
          </div>
          {/* <div className='gradient'></div> */}
        </div>
      </div>
    )
  );
}
