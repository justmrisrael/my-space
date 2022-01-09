import React from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Card = props => {
    return (
            <Gamble className="card hvr-sweep-to-right">
                <Img className="card-image" src={props.imageSrc} />
                <div className="card-text"> <h4>{props.projectName}</h4></div>
                <p className="card-desc"> <h5>{props.projectDesc}</h5></p>
                <div className="links"></div>
            </Gamble>
    )
};
// = props =>
// src={props.text}
// image={props.imageSrc}
export default Card;

gsap.registerPlugin(ScrollTrigger);

gsap.set(".card", { opacity: 0 });
gsap.to(".card", {
  scrollTrigger: {
    trigger: ".card",
    start: "top 85%",
    markers: true,
    scrub: 0.3,
  },
  x: 500,
  duration: 2,
  opacity: 1,
});

const Gamble = styled.div`
    display: flex;
    flex-direction: column;
`
// border: 2px solid #999999;
// border-top: 50px solid #999999;
// border-radius: 2px;
// margin: 20px 0 20px;
// width: auto;
// height: auto;
// align-items: left;
// 
// 
// @media (max-width: 768px) {
//     flex-direction: column;
// }
const Img = styled.img`
    width: 100%;
    height: 100%;
    margin-right: 10px;
`