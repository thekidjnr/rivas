import React from "react";
import "./VisionElements.css";
import MissionImage from "../../photos/Illustrations/mission.png";
import VisionImage from "../../photos/Illustrations/vision.png";

const Vision = () => {
  return (
    <div className="container">
      {/* =============MISSION CONTAINER=============== */}
      <section className="mission__container">
        <h1>OUR MISSION</h1>
        <div className="mission__container-details">
          <ul>
            <li>
              Rivas Properties Ghana Limited's mission is to acquire and manage
              properties in Ghana with a strategic approach.
            </li>
            <li>
              Rivas Properties Ghana Limited's mission is to acquire and manage
              properties in Ghana with a strategic approach.
            </li>
          </ul>
          <div className="mission__image">
            <img src={MissionImage} alt="Mission Img" />
          </div>
        </div>
      </section>

      {/* =============VISION CONTAINER=============== */}
      <section className="mission__container">
        <h1>OUR VISION</h1>
        <div className="mission__container-details">
          <ul>
            <li>
              We want to be a cost- effective innovator in real estate through
              Buy-to-Let/Rent.
            </li>
            <li>
              We want to be a cost- effective innovator in real estate through
              Buy-to-Let/Rent.
            </li>
          </ul>
          <div className="vision__image">
            <img src={VisionImage} alt="Mission Img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
