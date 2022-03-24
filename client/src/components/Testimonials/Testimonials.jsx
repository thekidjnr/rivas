import React from "react";
import "./TestimonialsElements.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/keyboard";

import CommaPng from "../../photos/Illustrations/comma.png";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vel id deserunt voluptate alias dolores",
      name: "Michael Odjidja",
      position: "CEO, VeinVerse Inc.",
    },
    {
      id: 2,
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vel id deserunt voluptate alias dolores atque",
      name: "Nathaniel Odjidja",
      position: "CEO, VeinVerse Inc.",
    },
    {
      id: 3,
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique vel id deserunt voluptate alias dolores atque facilis odit necessitatibus dolorem",
      name: "Martha Odjidja",
      position: "CEO, VeinVerse Inc.",
    },
  ];
  return (
    <div className="testimonials__container">
      <div className="container">
        <h1>Testimonials</h1>
        <img src={CommaPng} alt="comma" />
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {data.map((person) => (
            <SwiperSlide className="slide" key={person.id}>
              <div>
                <p>{person.body}</p>
                <h3>{person.name}</h3>
                <h2>- {person.position} -</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
