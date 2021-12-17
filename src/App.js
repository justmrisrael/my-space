import { useContext } from "react";
import "./App.css";
import DotRing from "./components/DotRing/DotRing";
import Body from "./components/Body";
import { MouseContext } from "./context/mouse-context";
import Footer from "./components/Footer";


function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <DotRing />
      <Body BtnText = "Contact Me"/>
      <Footer />
      <div
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      ></div>
    </div>
  )
}

export default App
