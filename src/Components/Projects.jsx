import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 5rem 0 5rem 0;
`;

const ProjectGrid = styled.div`
  display: grid;
  width: 40%;
  justify-items: center;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  margin: 0 0 40px;
  @media (max-width: 1280px) {
    width: 75%;
  }
  @media (max-width: 425px) {
    width: 90%;
    grid-template-columns: 100%;
    grid-template-rows: auto;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20rem;
  margin: 2rem;
  padding: 15px;
  background-color: rgba(53, 43, 43, 1);
  border-radius: 5px;
`;

const Links = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.25rem;
  padding: 0.5rem 0.5rem;
  transition: 0.25s;
  &:hover {
    font-weight: 800;
    background-color: rgb(104, 84, 84);
  }

  @media (max-width: 425px) {
    font-weight: 800;
    font-size: 1rem;
  }
`;

const Projects = ({ projects }) => {
  return (
    <Container id="projects">
      <h2>Projects</h2>
      <ProjectGrid>
        {projects.map(({ name, description, link, github }) => (
          <Card key={name}>
            <h3>{name}</h3>
            <p>{description}</p>
            <Links href={link} target="_blank">
              Demo
            </Links>
            <Links href={github} target="_blank">
              Github
            </Links>
          </Card>
        ))}
      </ProjectGrid>
    </Container>
  );
};

export default Projects;
