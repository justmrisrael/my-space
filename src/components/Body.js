import styled from "styled-components";

function Body() {
  return (
    <Home>
      <TextContainer>
        <a href="#">Hey there! <br />
        I'm Israel Musa.</a>
      </TextContainer>

      <StaticWords>
          <a>I'm a Front End Developer & UX Designer who<br />
            obsesses about creating aestheticly appealing web applications.<br />
            Let's bring your ideas to life!
          </a>
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
    font-family: "Kollektif";
    font-size: 4em;
    font-weight: normal;
    text-align: left;
    color: #F7C59F;
  }
  @media (max-width: 768px) {
    a {
      font-family: "Geo";
      font-size: 3em;
      font-weight: normal;
    }
  }
`;
const StaticWords = styled.div`
  display: flex;
  margin-left: 1em;
  a {
      font-family: "Gidole";
      font-size: 1.5em;
      color: white;
      text-align: left;
      line-height: 1.5em;
  }
  @media (max-width: 768px) {
    font-size: 1em;
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