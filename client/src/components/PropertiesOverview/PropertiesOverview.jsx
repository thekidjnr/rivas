import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCheck2Square } from "react-icons/bs";
import "./Properties.css";

import AmasamanImg from "../../photos/overview/amasaman-1.jpg";
import PokuaseImg from "../../photos/overview/pokuase-1.jpg";

const PropertiesOverview = () => {
  const propData = [
    {
      id: 1,
      name: "AMASAMAN APARTMENT",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tortor tortor sed egestas pellentesque pellentesque nullam risus lectus. consectetur diam sed.",
      img: AmasamanImg,
      list: {
        list1: "Lorem Ipsum Lorem ipsum dolor",
        list2: "Lorem Ipsum Lorem ipsum dolor",
        list3: "Lorem Ipsum Lorem ipsum dolor",
        list4: "Lorem Ipsum Lorem ipsum dolor",
      },
    },
    {
      id: 2,
      name: "POKUASE APARTMENT",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum tortor tortor sed egestas pellentesque pellentesque nullam risus lectus. consectetur diam sed.",
      img: PokuaseImg,
      list: {
        list1: "Lorem Ipsum Lorem ipsum dolor",
        list2: "Lorem Ipsum Lorem ipsum dolor",
        list3: "Lorem Ipsum Lorem ipsum dolor",
        list4: "Lorem Ipsum Lorem ipsum dolor",
      },
    },
  ];
  return (
    <section className="container">
      <h1>AVAILABLE PROPERTIES</h1>
      {propData &&
        propData.map((datas) => (
          <div className="property__container" key={datas.id}>
            <div className="property__container-img">
              <img src={datas.img} alt="Property" />
            </div>
            <div className="property__container-body">
              <h2>{datas.name}</h2>
              <p>{datas.content}</p>
              <div className="bullet__container">
                <div className="bullet__container-bullet">
                  <BsCheck2Square />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="bullet__container-bullet">
                  <BsCheck2Square />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="bullet__container-bullet">
                  <BsCheck2Square />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <div className="bullet__container-bullet">
                  <BsCheck2Square />
                  <p>Lorem ipsum dolor sit.</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default PropertiesOverview;
