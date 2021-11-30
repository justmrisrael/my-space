import styled from "styled-components";

function Body() {
  return (
    <Home>
      <TextContainer>
        <a href="#">Israel Musa</a>
      </TextContainer>

      <StaticWords>
          <a>I'm a Front End Developer & UX Designer.</a>
      </StaticWords>
      <Tools>
      
      </Tools>
    </Home>
  );
}
export default Body;

const Home = styled.div`
  position: absolute;
  width: 90%;
  margin-left: 4%;
  top: 100px;
  margin-top: 4em;
  @media (max-width: 768px) {
    margin-left: 2%;
  }
`;
const TextContainer = styled.div`
  display: flex;
  align-items: left;
  margin-left: 1em;
  a {
    font-family: "Geo";
    font-size: 4em;
    font-weight: normal;
    color: #C7CCDB;
  }

  @media (max-width: 768px) {
    a {
      font-family: "Geo";
      font-size: 3em;
      font-weight: normal;
      color: #C7CCDB;
    }
  }
`;
const StaticWords = styled.div`
  display: flex;
  margin-left: 1em;
  a {
      font-family: "Montserrat";
      font-size: 1em;
      color: #F7C59F;
  }

}
`
const Tools = styled.div`
  display: block;
  position: absolute;
  justify-items: center;
  width: 100%;
  height: 500px;
`