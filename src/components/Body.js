import styled from "styled-components";

function Body() {
  return (
    <Home>
      <TextContainer>
        <a href="#">Hey there! <br />
        I'm Israel Musa.</a>
      </TextContainer>

      <StaticWords>
          <a>I'm a Front End Developer & UX Designer<br />
            who obsesses about creating aestheticly appealing web applications.<br />
            Let's bring your ideas to life!
          </a>
      </StaticWords>
      <Tools>
        
      </Tools>
    </Home>
  );
}
export default Body;
const Tools = styled.div`
  background-color: white;
  `

const Home = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-bottom: 58px;
  margin-left: 4%;
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
      font-size: 3em;
      font-weight: normal;
    }
  }
`;
const StaticWords = styled.div`
  position: relative;
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