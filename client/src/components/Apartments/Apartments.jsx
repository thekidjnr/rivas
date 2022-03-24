import React from "react";
import "./ApartmentsElements.css";
import AmasamanImg from "../../photos/apartments/Amasaman/amasamanlist.jpg";
import PokuaseImg from "../../photos/apartments/Pokuase/pokuaselist.jpg";
import { BsCheck2Square } from "react-icons/bs";

const Apartments = () => {
  const ApartmentData = [
    {
      id: 1,
      name: "Amasaman Apartment",
      location: "Amasaman, Accra",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque enim, voluptate aperiam, quod facilis suscipit error ea non voluptatum tempore maiores impedit, amet asperiores quis maxime qui mollitia. Quibusdam, dignissimos?",
      img: AmasamanImg,
      bullet: {
        bullet1: "3 Bedrooms",
        bullet2: "2 Bathrooms",
        bullet3: "1 Living Room",
        bullet4: "1 Fully Fitted Kitchen",
      },
      moreInfo: "/properties/1",
    },

    {
      id: 2,
      name: "Pokuase Apartment",
      location: "Pokuase, Accra",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque enim, voluptate aperiam, quod facilis suscipit error ea non voluptatum tempore maiores impedit, amet asperiores quis maxime qui mollitia. Quibusdam, dignissimos?",
      img: PokuaseImg,
      bullet: {
        bullet1: "3 Bedrooms",
        bullet2: "2 Bathrooms",
        bullet3: "1 Living Room",
        bullet4: "1 Fully Fitted Kitchen",
      },
      moreInfo: "/properties/2",
    },
  ];
  return (
    <div className="container properties__container">
      <div className="apartments__container">
        <h1>APARTMENTS</h1>
        <div className="apartment__container">
          {ApartmentData &&
            ApartmentData.map((data) => (
              <div className="apartment__container-card" key={data.id}>
                <div className="card__container-image">
                  <img src={data.img} alt="Apartment" />
                </div>
                <div className="card__container-body">
                  <h2>{data.name}</h2>
                  <h3>{data.location}</h3>
                </div>
                <div className="card__container-bullets">
                  <div className="bullet">
                    <h2>
                      <BsCheck2Square />
                    </h2>
                    <p>{data.bullet.bullet1}</p>
                  </div>
                  <div className="bullet">
                    <h2>
                      <BsCheck2Square />
                    </h2>
                    <p>{data.bullet.bullet1}</p>
                  </div>
                  <div className="bullet">
                    <h2>
                      <BsCheck2Square />
                    </h2>
                    <p>{data.bullet.bullet1}</p>
                  </div>
                  <div className="bullet">
                    <h2>
                      <BsCheck2Square />
                    </h2>
                    <p>{data.bullet.bullet1}</p>
                  </div>
                </div>
                <a href={data.moreInfo}>More Info.</a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Apartments;
