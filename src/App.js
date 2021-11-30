import { useContext } from "react";
import "./App.css";
import DotRing from "./components/DotRing/DotRing";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MouseContext } from "./context/mouse-context";
import Burger from "./components/Nav/Burger"

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <Header />
      <DotRing />
      <Body />
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
