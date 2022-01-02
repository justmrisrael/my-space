import { useContext } from "react";
import React from "react";
import DotRing from "../components/DotRing/DotRing";
import { MouseContext } from "../context/mouse-context";
import Header from "./Header";
import Footer from "./Footer";

const Contact = ({ BtnText }) => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div>
      <DotRing />
      <Header />
      <div style={{ marginTop: "100px", padding: "2.5em" }}>
        <h1 data-aos="fade-up">Get in touch!</h1>
        <h4>Got a job, project collab idea, or just want to say hello?</h4>
        <form
          action="POST"
          data-netlify="true"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
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

          <div onClick="javascript:this.form.submit();" type="submit"
            BtnText="Shoot!"
            className="button hvr-sweep-to-right"
            style={{
              marginTop: "2.5em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>Shoot!</h4>
          </div>
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
