import { useContext } from "react";
import './App.css';
import DotRing from "./components/DotRing/DotRing";
import { MouseContext } from "./context/mouse-context";

function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <DotRing />
      <div className="container">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
            <h1>Israel Musa</h1>
        </div>
      </div>
      <div className="container" style={{ background: "peachpuff" }}></div>
    
    </div>
  );
}

function changeFont(element, name) {
  element.style.fontFamily = name;
}


export default App;
