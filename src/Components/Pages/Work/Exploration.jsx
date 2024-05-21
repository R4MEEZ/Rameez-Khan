import React, { useEffect } from "react";
import "./Exploration.css";
import { Container } from "react-bootstrap";
import Res1 from "../../Assets/res1.png";
import Res2 from "../../Assets/res2.png";

import Digiverse from "../../Assets/digiverse.png";
import Crisfood from "../../Assets/crisfood.png";
import Unity from "../../Assets/unity.png";
import Ariss from "../../Assets/ariss.png";
import Glory from "../../Assets/glory.png";


const Exploration = () => {
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
        if (window.innerWidth > 550 && bounding.top < window.innerHeight && bounding.bottom >= 0) {
          const rotation = (bounding.top / window.innerHeight) * (index % 2 === 0 ? -10 : 10);
          card.style.transform = `rotate(${rotation}deg)`;
        } else if (window.innerWidth <= 550) {
          const rotation = index % 2 === 0 ? -3 : 3;
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
      <div id="Explorations" className="main-explore-container">
        <div className="exploration-title">
          <h2>A Gallery of <br />Past UI Designs</h2>
        </div>
        <ul id="cards">
          <li className="cardBox" id="card1">
            <div className="card-body">
              <img src={Res1} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card2">
            <div className="card-body">
              <img src={Digiverse} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card3">
            <div className="card-body">
              <img src={Res2} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card4">
            <div className="card-body">
              <img src={Crisfood} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card6">
            <div className="card-body">
              <img src={Ariss} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card8">
            <div className="card-body">
              <img src={Glory} alt="" />
            </div>
          </li>
          <li className="cardBox" id="card10">
            <div className="card-body">
              <img src={Unity} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Exploration;