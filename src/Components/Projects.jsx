import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  text-align: center;
  margin: 4rem 0;
`;

const Card = styled.div`
  max-width: 20rem;
  margin: 2rem;
  padding: 10px;
  background-color: rgba(53, 43, 43, 1);
  border-radius: 5px;
`;

const Links = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  transition: 0.25s;

  &:hover {
    font-weight: 800;
    background-color: rgb(104, 84, 84);
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const Projects = ({ projects }) => {
  return (
    <Container>
      <h3>Projects</h3>
      {projects.map((project) => {
        return (
          <Card key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Links href={project.link} target="_blank">
              Demo
            </Links>
            <Links href={project.github} target="_blank">
              Github
            </Links>
          </Card>
        );
      })}
    </Container>
  );
};

export default Projects;
