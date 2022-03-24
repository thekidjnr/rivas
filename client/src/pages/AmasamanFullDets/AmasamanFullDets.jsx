import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";
import "./AmasamanElements.css";

import AmasamanBig from "../../photos/apartments/Amasaman/Details/AmasamanBig.jpg";
import Amasaman1 from "../../photos/apartments/Amasaman/Details/Amasaman1.jpg";
import Amasaman2 from "../../photos/apartments/Amasaman/Details/Amasaman2.jpg";
import Amasaman3 from "../../photos/apartments/Amasaman/Details/Amasaman3.jpg";
import Amasaman4 from "../../photos/apartments/Amasaman/Details/Amasaman4.jpg";

const AmasamanFullDets = () => {
  return (
    <>
      <Navbar />
      <div className="container amasaman__container">
        <h1>AMASAMAN APARTMENT</h1>
        <div className="amasaman__container-body">
          <div className="body__container-photos">
            <div className="photo__container-main">
              <img src={AmasamanBig} alt="photomain" />
            </div>
            <div className="photo__container-sub">
              <img src={Amasaman1} alt="photo1" />
              <img src={Amasaman2} alt="photo2" />
              <img src={Amasaman3} alt="photo3" />
              <img src={Amasaman4} alt="photo4" />
            </div>
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

export default AmasamanFullDets;
