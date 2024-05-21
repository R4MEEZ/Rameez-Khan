import React from "react";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import LiinkdinImg from "../../Assets/Linkdin.svg";
import TwitterImg from "../../Assets/Twiter.svg";
import InstagramImg from "../../Assets/instagram.svg";
import EmailImg from "../../Assets/email.svg";
import "./Connect.css";

export default function Connect() {

  const handleEmail = () => {
    window.location.href = "mailto:khanrameez0123@gmail.com";
  };

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/rameez-khan-5a71ab21b/", "_blank");
  };

  const handleTwitter = () => {
    window.open("https://x.com/R4MEEZK");
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/_khanrameez_/")
  };

  return (
    <>
      <Container>
        <div id="connect" className="connect-container">
          <div className="main-connect-container">
            <div className="connect-top">
              Ready to elevate your business with visually engaging experiences?
            </div>
            <div className="connect-mid">Let's make it happen✨</div>
            <div onClick={handleEmail} className="start-button">"Say Hello"</div>
            <div className="hr bg-secondary"></div>
            <div className="socials">
              <Row>
                <Col lg={6}>
                  <div className="socials-left">
                    <div className="connect">Connect</div>
                    <div className="emailid" onClick={handleEmail}>khanrameez0123@gmail.com</div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="socials-right">
                    <div className="socials-list">Follow</div>
                    <div className="socials-links gap-3">
                      <div onClick={handleLinkedIn} className="linkdin">
                        <img src={LiinkdinImg} alt="" />
                      </div>
                      <div onClick={handleTwitter}  className="twitter">
                        <img src={TwitterImg} alt="" />
                      </div>
                      <div onClick={handleInstagram}  className="instagram">
                        <img src={InstagramImg} alt="" />
                      </div>
                      <div className="email">
                        <img src={EmailImg} alt="" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
