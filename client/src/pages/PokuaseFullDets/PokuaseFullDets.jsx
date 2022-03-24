import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import PokuaseBig from "../../photos/apartments/Pokuase/PokuaseBig.jpg";
import Pokuase1 from "../../photos/apartments/Pokuase/inner/Pokuase1.jpg";
import Pokuase2 from "../../photos/apartments/Pokuase/inner/Pokuase2.jpg";
import Pokuase3 from "../../photos/apartments/Pokuase/inner/Pokuase3.jpg";
import Pokuase4 from "../../photos/apartments/Pokuase/inner/Pokuase3.jpg";
import NavSide from "../../NavSide/NavSide";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/keyboard";

const PokuaseFullDets = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <NavSide isOpen={isOpen} toggle={toggle} />
      <div className="container amasaman__container">
        <h1>AMASAMAN APARTMENT</h1>
        <div className="amasaman__container-body">
          <div className="body__container-photos">
            <div className="photo__container-main">
              <img src={PokuaseBig} alt="photomain" />
            </div>
            <div className="photo__container-sub">
              <img src={Pokuase1} alt="photo1" />
              <img src={Pokuase2} alt="photo2" />
              <img src={Pokuase3} alt="photo3" />
              <img src={Pokuase4} alt="photo4" />
            </div>
          </div>
          <div className="photo__slide-container">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide className="slide__img1">
                <img src={Pokuase1} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide__img2">
                <img src={Pokuase2} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide__img3">
                <img src={Pokuase3} alt="" />
              </SwiperSlide>
              <SwiperSlide className="slide__img4">
                <img src={Pokuase4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            dolor duis etiam pellentesque diam integer odio et. Egestas auctor
            id tempor metus scelerisque ornare ut. Non urna sagittis nunc
            facilisis. Justo nunc amet proin gravida id nisl, vulputate nunc
            sed. Id fermentum volutpat cras risus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Consectetur dolor duis etiam
            pellentesque diam integer odio et. Egestas auctor id tempo
          </p>
          <div className="body__container-down">
            <div className="down__container-features">
              <div className="features">
                <h2>Key Features</h2>
                <div className="feature">
                  <p>Bedroom</p>
                  <p>1</p>
                </div>
                <div className="feature">
                  <p>Living Room</p>
                  <p>1</p>
                </div>
                <div className="feature">
                  <p>Kitchen</p>
                  <p>1</p>
                </div>
                <div className="feature">
                  <p>Bathroom</p>
                  <p>1</p>
                </div>
              </div>
            </div>
            <div className="form__container form__container-small">
              <h2>Rent Enquiries</h2>
              <form action="post">
                <div className="form__details-name">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Your First Name"
                    required
                  />

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Your Last Name"
                    required
                  />
                </div>
                <div className="form__details-dets">
                  <input
                    id="number"
                    type="tel"
                    placeholder="Your Phone Number"
                    required
                  />
                  <input
                    id="mail"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <select name="property" id="property">
                  <option value="AmasamanApartment">Amasaman Apartment</option>
                  <option value="PokuaseApartment">Pokuase Apartment</option>
                </select>
                <textarea
                  id="message"
                  type="text"
                  placeholder="Your message"
                  required
                />
                <button onclick="">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PokuaseFullDets;
