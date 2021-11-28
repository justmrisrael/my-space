import styled from "styled-components";

function Body() {
  return (
    <Home>
      <TextContainer>
        <a href="#">Israel Musa</a>
      </TextContainer>
      <StaticWords>
          <a>I'm a front end developer & UX designer</a>
      </StaticWords>
    </Home>
  );
}
export default Body;

const Home = styled.div`
  position: absolute;
  top: 100px;
  margin-left: 2em;
  margin-top: 4em;
`;
const TextContainer = styled.div`
  a {
    font-family: "Geo";
    font-size: 4em;
    font-weight: normal;
    color: #C7CCDB;
  }
`;
const StaticWords = styled.div`
  position: relative;
  margin-left: 1em;
  a {
      font-family: "Montserrat";
      font-size: 1em;
      color: #F7C59F;
  }

`