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
  @media (max-width: 768px) {
    height: auto;
    padding: 0;
  }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const MyPic = styled.img`
  border-radius: 20px;
  margin-right: 5rem;
  box-shadow: 0 0 10px 5px rgb(39, 39, 39);
  @media (max-width: 768px) {
    margin-right: 0rem;
    width: 70%;
  }
`;

const TextDiv = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: 70%;
    padding: 2rem 0;
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
            began my endless journey into the world of programming and
            web-development.
          </p>
          <p>Oops.</p>
        </TextDiv>
      </Intro>
      <Skills>
        <h3>Skill set:</h3>
        <SkillList>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Git</li>
          </ul>
          <ul>
            <li>JSON</li>
            <li>JSX</li>
            <li>AJAX/API calls</li>
            <li>Responsive Design</li>
            <li>Bootstrap v5.0</li>
            <li>Object-Orientated Programming</li>
          </ul>
          <ul>
            <li>Blender</li>
            <li>Adobe PhotoShop</li>
            <li>C#</li>
            <li>.NET Framework</li>
          </ul>
        </SkillList>
      </Skills>
      <FadeArrow reference={"#projects"} />
    </Container>
  );
};

export default AboutMe;
