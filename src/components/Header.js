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
`;
const TextContainer = styled.div`
  position: relative;
  top: 0;
  a {
    font-family: "Geo";
    font-size: 4em;
    font-weight: normal;
    color: #c7ccdb;
  }
`;
const StaticWords = styled.div`
  position: flex;
  a {
      font-family: "Montserrat";
      font-size: 2em;
      color: #F7C59F;
  }

`