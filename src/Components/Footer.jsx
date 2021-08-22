import React from "react";
import Frog from "./Frog";
import styled from "styled-components";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import instagram from "../Assets/instagram.png";

const HiddenFrog = styled.span`
filter: opacity(0.2);
position: relative;
top: 70px;
transition: 0.8s;
&:hover{
  filter: opacity(1);
  top: 0;
}
`;

const MainFooter = styled.footer`
position: relative;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(53, 43, 43, 1);
  height: 120px;
`;

const SocialImage = styled.img`
  height: 30px;
  padding: 0.5rem;
  transition: 0.5s;
  &:hover {
    filter: invert(1);
    transform: scale(1.25);
  }
`;

const Footer = () => {
  return (
    <>
      <HiddenFrog><Frog/></HiddenFrog>
    <MainFooter>
      <p>Built with React</p>
      <div>
        <a
          href="https://www.linkedin.com/in/sebastian-bird-824b4218a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialImage src={linkedin} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/SebBird"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialImage src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/sebbird/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialImage src={instagram} alt="Instagram" />
        </a>
      </div>
    </MainFooter>
    </>
  );
};

export default Footer;
