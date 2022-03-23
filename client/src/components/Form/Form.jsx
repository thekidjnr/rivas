import React from "react";
import "./FormElements.css";

const Form = () => {
  return (
    <section className="container form__container">
      <p className="form__container-header">
        We will like to hear from you, kindly fill the form below to leave us a
        message. <br />
        Thank you
      </p>
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
          <input id="mail" type="email" placeholder="Your Email" required />
        </div>
        <textarea
          id="message"
          type="text"
          placeholder="Your message"
          required
        />
        <button onclick="">Send Message</button>
      </form>
    </section>
  );
};

export default Form;
