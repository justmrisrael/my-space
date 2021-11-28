import { useContext } from "react";
import "./App.css";
import DotRing from "./components/DotRing/DotRing";
import Body from "./components/Body";
import Header from "./components/Header";
import { MouseContext } from "./context/mouse-context";

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <Header />
      <Body />
      <DotRing />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        ></div>
      </div>
      <div className="container" style={{ background: "#282c34" }}></div>
    </div>
  );
}

export default App;
