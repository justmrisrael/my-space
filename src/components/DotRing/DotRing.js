import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import styled from "styled-components";

const DotRing = () => {
    // 1.
  const { x, y } = useMousePosition();
  return (
    <>
    <Mobile>
            {/* 2. */}
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
      ></div>
            {/* 3. */}
      <div
        className="dot"
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
      </Mobile>
    </>
    

  );
};

export default DotRing;

const Mobile = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`