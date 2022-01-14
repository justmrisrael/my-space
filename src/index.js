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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});