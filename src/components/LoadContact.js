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
      <div className="section" style={{height: '100vh'}}>
      <h1>Contact Form</h1>
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
