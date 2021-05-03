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
  margin: 12rem;
  z-index: 999;
  @media (max-width: 1280px) {
    margin: 0;
  }
  @media (max-width: 1024px) {
    margin: 8rem;
  }
  @media (max-width: 768px) {
    margin: 2rem;
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
  margin: 0.5rem;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: center;
  @media (max-width: 1280px) {
    font-size: 1.25rem;
  }
`;

const Banner = () => {
  return (
    <MainBanner>
      <TextContainer>
        <Textbox
          content={
            <div>
              <H1>Hi there, I'm Seb!</H1>
              <H1>I am a front end web developer.</H1>
            </div>
          }
        />
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
              </ul>
            </div>
          }
        />
      </TextContainer>
      <FadeArrow />
      <FadeDiv></FadeDiv>
    </MainBanner>
  );
};

export default Banner;
