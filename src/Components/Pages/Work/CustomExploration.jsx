import React, { useEffect } from "react";
import "./CustomExploration.css";
import { Container } from "react-bootstrap";
import Res1 from "../Assets/res1.png";
import Res2 from "../Assets/res2.png";
import DocumentAI from "../Assets/DocumentAI.png";
import Res4 from "../Assets/res4.png";
import Res5 from "../Assets/res5.png";
import Res6 from "../Assets/res6.png";
import Res7 from "../Assets/res7.png";

import Ad from "../Assets/ad.png";
import Glory from "../Assets/glory.png";
import TerraceV from '../Assets/terrace.mp4'


const CustomExploration = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".cardBox");
      const lastCard = cards[cards.length - 1];
      const lastCardBounding = lastCard.getBoundingClientRect();

      if (
        lastCardBounding.top < window.innerHeight &&
        lastCardBounding.bottom >= 0
      ) {
        let anyCardVisible = false;

        for (let i = 0; i < cards.length - 1; i++) {
          const cardBounding = cards[i].getBoundingClientRect();
          if (
            cardBounding.top < window.innerHeight &&
            cardBounding.bottom >= 0
          ) {
            anyCardVisible = true;
            break;
          }
        }

        
        if (!anyCardVisible) {
          window.removeEventListener("scroll", handleScroll);
        }

        return;
      }

      cards.forEach((card, index) => {
        const bounding = card.getBoundingClientRect();
        if (bounding.top < window.innerHeight && bounding.bottom >= 0) {
          const rotation =
            (bounding.top / window.innerHeight) * (index % 2 === 0 ? -10 : 10);
          card.style.transform = `rotate(${rotation}deg)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div className="main-explore-container">
        <ul id="cards">
          <li className="cardBox" id="card1">
            <div className="card-body">
              <img src={Res1} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card2">
            <div className="card-body">
              <img src={Ad} alt="" />
            </div>
          </li>
          <li className="cardBox" id="video">
            <div className="card-body">
              <video src={TerraceV} autoPlay muted></video>
            </div>
          </li>
          <li className="cardBox" id="card3">
            <div className="card-body">
              <img src={Res2} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card5">
            <div className="card-body">
              <img src={DocumentAI} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card7">
            <div className="card-body">
              <img src={Res4} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card8">
            <div className="card-body">
              <img src={Glory} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card9">
            <div className="card-body">
              <img src={Res5} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card11">
            <div className="card-body">
              <img src={Res6} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card12">
            <div className="card-body">
              <img src={Res7} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default CustomExploration;
