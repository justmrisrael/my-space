import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Contact from "./components/LoadContact";
import reportWebVitals from "./reportWebVitals";
import MouseContextProvider from "./context/mouse-context";

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