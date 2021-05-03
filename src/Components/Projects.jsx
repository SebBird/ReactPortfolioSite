import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  text-align: center;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  width: 40%;
  justify-items: center;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
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
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
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
      <h2>Projects</h2>
      <ProjectGrid>
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
      </ProjectGrid>
    </Container>
  );
};

export default Projects;
