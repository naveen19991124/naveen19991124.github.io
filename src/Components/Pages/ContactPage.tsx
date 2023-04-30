import React from "react";
import { InlineWidget } from "react-calendly";

const ContactPage = (): JSX.Element => {
  return (
    <main>
      <div className="layout">
        <div className="contact">
          <section className="contact-section">
            <h1>Get In Touch</h1>
            <h3>Hey, Let's connect 😊</h3>
            <section className="profile-pic-section">
              <img
                src={require("../../Assets/Images/gojo-satoru-gif-3.gif")}
                alt="Broken"
                className="image--cover--mobile"
              />
            </section>
            <p>
              I would love to talk about distributed systems, data structures,
              algorithms, job interviews, system design(still learning :))
            </p>
            <p>
              Even a quick virtual meet over a coffee would do, where I can
              possible help you clearing out our doubts in regard to the
              preparation strategies for job interviews, software engineering
              etc.
            </p>
            <p>
              Feel free to book an available slot from the calendly below, if
              you want to work or chat with me.{" "}
            </p>
          </section>
          <section className="profile-pic-section">
            <img
              src={require("../../Assets/Images/gojo.gif")}
              alt="Broken"
              className="image--cover"
            />
          </section>
        </div>
        <div className="calendly-widget">
          <InlineWidget
            url="https://calendly.com/naveenuk/30min"
            styles={{ height: "700px" }}
          />
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
