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
  justify-content: center;
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

const FadeDiv = styled.div`
  position: absolute;
  height: 100%;
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
      <Textbox
        content={
          <div>
            <H1>Hi there, I'm Seb!</H1>
            <H1>I am a front end web developer.</H1>
          </div>
        }
      />
      <Textbox
        content={
          <div>
            <p>
              I am currently searching for a challenging junior position with an
              exciting employer.
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
      <FadeArrow />
      <FadeDiv></FadeDiv>
    </MainBanner>
  );
};

export default Banner;
