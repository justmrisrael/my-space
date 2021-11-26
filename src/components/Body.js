import styled from "styled-components";

function Header() {
  return (
    <Home>
      <TextContainer>
        <a href="#">Israel Musa</a>
      </TextContainer>
      <StaticWords>
          <a>front end developer</a>
      </StaticWords>
    </Home>
  );
}
export default Header;

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
  position: absolute;
  margin-left: 0;
  a {
      font-family: "Montserrat";
      font-size: 1em;
      color: #F7C59F;
  }

`