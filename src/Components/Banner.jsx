import React from "react";
import styled from "styled-components";
import Textbox from "./Textbox";
import FadeArrow from "./FadeArrow";
import bannerimg from "../Assets/bannerimg.png";
import bannerimgmobile from "../Assets/bannerimgmobile.png";

const MainBanner = styled.div`
  user-select: none;
  height: 100vh;
  border: 2px solid black;
  background: url("${bannerimg}");
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: cover;
  @media (max-width: 1280px) {
    justify-content: flex-start;
    font-size: 1.25rem;
  }
  @media (max-width: 425px) {
    justify-content: flex-start;
    background: url("${bannerimgmobile}");
    background-size: cover;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 75%;
  margin: 4rem;
  z-index: 999;
  @media (max-width: 1280px) {
    margin: 2rem;
  }
  @media (max-width: 1024px) {
    margin: 6rem;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: 2rem 0;
  }
`;

const FadeDiv = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 212, 255, 0) 100%
  ); ;
`;

const H1 = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  margin: 1rem;
  text-shadow: 0 0 5px rgb(39, 39, 39);
  color: white;
  font-size: 4rem;
  font-weight: 300;
  text-align: center;
  @media (max-width: 1280px) {
    font-size: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Banner = () => {
  return (
    <MainBanner>
      <TextContainer>
        <H1>Hi there, I'm Seb!</H1>
        <H1>I am a front end web developer.</H1>

        <Textbox
          id="aboutme"
          content={
            <div>
              <p>
                I am currently searching for a challenging junior position with
                an exciting employer.
              </p>
              <p>I am proficient in many areas, most notably:</p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
                <li>Cypress</li>
              </ul>
            </div>
          }
        />
      </TextContainer>
      <FadeArrow reference={"#aboutme"} />
      <FadeDiv></FadeDiv>
    </MainBanner>
  );
};

export default Banner;
