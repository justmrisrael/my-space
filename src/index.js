import React from "react";
import ReactDOM from "react-dom";
import { 
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Contact from "./components/LoadContact";
import reportWebVitals from "./reportWebVitals";
import MouseContextProvider from "./context/mouse-context";
import LocomotiveScroll from "locomotive-scroll";

ReactDOM.render(
  <React.StrictMode>
    <MouseContextProvider>
      <BrowserRouter>
        <Routes>
          {/* <App /> */}
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
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});