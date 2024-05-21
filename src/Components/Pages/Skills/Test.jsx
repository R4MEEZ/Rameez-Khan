import React, { useEffect } from "react";
import "./Test.css";
// import Design from "../../Asstes/design.svg";
// import Development from "../../Asstes/development.svg";
// import Package from "../../Asstes/package.svg";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElement = document.querySelectorAll(".hidden");
    hiddenElement.forEach((el) => observer.observe(el));
    return () => {
      hiddenElement.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="about-content px-3 my-5 pb-5">
        <div className="about-content-top">
          <div className="about-content-top-text display-1 text-center">
            <p>
              Currently based in <span> Mumbai</span>
            </p>
          </div>
        </div>
        <div className="about-content-middle container">
          <p className="about-content-middle-text display-6 mt-5 text-center">
            Providing frontend development services at Cisfood Digiverse, I
            collaborate remotely with a team of awesome people from different
            corners of the world.
          </p>
        </div>
        <div className="about-content-bottom container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4  mt-5 d-flex flex-column align-items-center hidden ">
              <div className="about-content-bottom-left ">
                <p className="display-5 font-weight-bold text-center about-info-title pb-4">
                  DESIGN
                </p>
                <p className="text-center about-info-para">
                  With a solid track record in designing websites and apps, I
                  deliver strong and user-friendly digital designs. Solid
                  company branding is the foundation of any succesful website.
                </p>
              </div>
              <div className="about-content-bottom-left-img ">
                {/* <img src={Design} alt="" /> */}
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-4  mt-5 d-flex flex-column align-items-center align-self-center hidden">
              <div className="about-content-bottom-mid ">
                <p className="display-5 text-center about-info-title pb-4">
                  DEVELOPMENT
                </p>
                <p className="text-center about-info-para">
                  I build scalable websites from scratch that fit seamlessly
                  with design. My focus is on micro animations, transitions and
                  developing interaction that fits the website.
                </p>
              </div>
              <div className="about-content-bottom-mid-img ">
                {/* <img src={Development} alt="" /> */}
              </div>
            </div>
            <div className="col-sm-12 col-md-12 offset-lg-3  col-lg-6 col-xl-6 offset-xxl-0 col-xxl-4  mt-5 d-flex flex-column align-items-center hidden">
              <div className="about-content-bottom-right ">
                <p className="display-5 font-weight-bold text-center about-info-title pb-4">
                  THE FULL PACKAGE
                </p>
                <p className=" text-center about-info-para">
                  A complete website from concept to implementation, that's what
                  makes me stand out. My great sense for design and my
                  development skills enable me to create kick-ass projects.
                </p>
              </div>
              <div className="about-content-bottom-right-img ">
                {/* <img src={Package} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;