import { useContext } from "react";
import React from "react";
import DotRing from "../components/DotRing/DotRing";
import { MouseContext } from "../context/mouse-context";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div>
      <DotRing />
      <Header />
      <div style={{ marginTop: "100px", padding: "2.5em" }}>
        <h1 data-aos="fade-up">Get in touch!</h1>
        <h4>Got a job, project collab idea, or just want to say hello?</h4>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <input type="hidden" name="contact-form" value="contact" />
          <label for="name">
            <h4>Your Name:</h4>
          </label>
          <input className="textArea" type="text" name="name" />
          <label for="email">
            <h4>Email Address:</h4>
          </label>
          <input className="textArea" type="text" name="email" />
          <label for="message">
            <h4>Message:</h4>
          </label>
          <textarea className="messageBox" type="text" name="message" />
          <div className="field">
            <div data-netlify-recaptha="true" />
          </div>

          <button 
            type="submit"
            className="button hvr-sweep-to-right"
            style={{
              marginTop: "2.5em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>Shoot!</h4>
          </button>
        </form>
      </div>
      <Footer />
      <div
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      ></div>
    </div>
  );
};

export default Contact;
