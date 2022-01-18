import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Contact from "./components/LoadContact";
import reportWebVitals from "./reportWebVitals";
import MouseContextProvider from "./context/mouse-context";
// import IntersectionObserver from "./context/intersectionObservers";
// import LocomotiveScroll from "locomotive-scroll";
import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </MouseContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();

//scroll
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true
// });
