import { useContext } from "react";
import "./App.css";
import DotRing from "./components/DotRing/DotRing";
import Home from "./components/Home";
import { MouseContext } from "./context/mouse-context";

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <DotRing />
      <Home BtnText="Contact Me" />
      <div
        onMouseEnter={() => cursorChangeHandler("hovered")}
        onMouseLeave={() => cursorChangeHandler("")}
      ></div>
    </div>
  );
}

export default App;
