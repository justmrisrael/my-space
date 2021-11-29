import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <a href="#">Back to top</a>
    </Foot>
    //footer function
  );
}
export default Footer;

const Foot = styled.div`
  background-color: #E1E5EE;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 30%;
  a{
      font-family: "Nexa";
      font-weight: normal;
      color: black;
  }
`
