import React from "react";
import styled from "styled-components";
import FadeArrow from "./FadeArrow";
import mypic from "../Assets/mypic.png";

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 0;
`;

const Intro = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Skills = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MyPic = styled.img`
  border-radius: 20px;
  box-shadow: 0 0 10px 5px rgb(39, 39, 39);
  @media (max-width: 768px) {
    width: 70%;
  }
`;

const TextDiv = styled.div`
  width: 30%;
  padding-left: 5rem;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 70%;
    padding: 0;
  }
`;

const AboutMe = () => {
  return (
    <Container id="aboutme">
      <h2>About Me</h2>
      <Intro>
        <MyPic src={mypic} alt="Picture of Seb" />
        <TextDiv>
          <p>My name is Seb!</p>
          <p>I am a front-end web developer with a knack for React.</p>
          <p>
            I finished my four years at Edge Hill University in August 2020,
            graduating with a Merit-class Masters degree in History and Culture.
          </p>
          <p>
            Since then, I decided to move in the complete opposite direction and
            begun my endless journey into the world of programming and
            web-development.
          </p>
          <p>Oops.</p>
        </TextDiv>
      </Intro>
      <Skills></Skills>
      <FadeArrow reference={"#projects"} />
    </Container>
  );
};

export default AboutMe;
