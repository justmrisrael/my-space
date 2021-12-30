import { useContext } from "react";
import React from "react";
import DotRing from "../components/DotRing/DotRing";
import { MouseContext } from "../context/mouse-context";

const Contact = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div>
      <DotRing />
      <h1>Contact Form</h1>
      <div
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      ></div>
    </div>
  );
};

export default Contact;
