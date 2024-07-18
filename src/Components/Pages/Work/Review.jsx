// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Review.css";
import profileImg from "../../Assets/profile.svg"
import digiverse from "../../Assets/digiverse-logo.png";

// import required modules
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { Container } from "react-bootstrap";

export default function Review() {
  return (
    <>
      <Container>
        <div id="Reviews" className="reviews">
          <div className="reviews-title">
            <h2>
              What my<br />team
              is saying
            </h2>
          </div>
          <Swiper
            effect={"cards"}
            modules={[EffectCards, Pagination, Navigation]}
            className="mySwiper"
            pagination={true}
            navigation={true}
          >
            <SwiperSlide>
              <div className="reviews-content">
                <div className="reviews-top">
                  <div className="pfp-img">
                    <img
                      src={profileImg}
                      alt="profile"
                    />
                  </div>
                  <div className="review-text">
                    Rameez exceeded our expectations on implementation and
                    collaboration. His detail orientation and deep
                    implementation expertise elevated our designs. Rameez truly
                    owns his craft.
                  </div>
                </div>
                <div className="reviews-bottom">
                  <div className="reviews-name">
                    Amash Ansari
                    <br />
                    <span>Executive</span>
                  </div>
                  <div className="reviews-company">
                    <img src={digiverse} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="reviews-content">
                <div className="reviews-top">
                  <div className="pfp-img">
                  <img
                      src={profileImg}
                      alt="profile"
                    />
                  </div>
                  <div className="review-text">
                  Rameez has been fantastic to collaborate with and continues to support us on many projects. He has a very high level of craft and is easy to work with.
                  </div>
                </div>
                <div className="reviews-bottom">
                  <div className="reviews-name">
                    Arif Ansari
                    <br />
                    <span>Executive</span>
                  </div>
                  <div className="reviews-company">
                    <img src={digiverse} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="reviews-content">
                <div className="reviews-top">
                  <div className="pfp-img">
                  <img
                      src={profileImg}
                      alt="profile"
                    />
                  </div>
                  <div className="review-text">
                  Rameez combines outstanding animations, pixel accurate implementation, and great performance at the highest level. Communication is enormously fast & effective.
                  </div>
                </div>
                <div className="reviews-bottom">
                  <div className="reviews-name">
                    Salman Shaikh
                    <br />
                    <span>Senior Developer</span>
                  </div>
                  <div className="reviews-company">
                    <img src={digiverse} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="reviews-content">
                <div className="reviews-top">
                  <div className="pfp-img">
                  <img
                      src={profileImg}
                      alt="profile"
                    />
                  </div>
                  <div className="review-text">
                  Rameez has been exceptional both in his technical execution and how he collaborates. all of his builds are incredibly fast and clean, as well as polished and beautiful.
                  </div>
                </div>
                <div className="reviews-bottom">
                  <div className="reviews-name">
                    Aaquib Kuwari
                    <br />
                    <span>Senior Developer</span>
                  </div>
                  <div className="reviews-company">
                    <img src={digiverse} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </>
  );
}
