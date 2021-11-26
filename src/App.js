import { useContext } from "react";
import "./App.css";
import DotRing from "./components/DotRing/DotRing";
import Header from "./components/Header";
import { MouseContext } from "./context/mouse-context";

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <Header />
      <DotRing />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        ></div>
      </div>
      <div className="container" style={{ background: "#2A324B" }}></div>
    </div>
  );
}

export default App;
