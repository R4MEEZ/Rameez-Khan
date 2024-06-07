// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Review.css";
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
                      src="https://images.unsplash.com/photo-1714120103575-7513850daf9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                      alt=""
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
                      src="https://images.unsplash.com/photo-1714120103575-7513850daf9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                      alt=""
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
                      src="https://images.unsplash.com/photo-1714120103575-7513850daf9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                      alt=""
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
                      src="https://images.unsplash.com/photo-1714120103575-7513850daf9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
                      alt=""
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
          </Swiper>
        </div>
      </Container>
    </>
  );
}
