import { useContext } from "react";
import "./App.css";
import DotRing from "./components/DotRing/DotRing";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import { MouseContext } from "./context/mouse-context";

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <Header />
      <Body />
      <DotRing />
      <Section />
      <Footer />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        ></div>
      </div>
    </div>
  );
}

export default App;
