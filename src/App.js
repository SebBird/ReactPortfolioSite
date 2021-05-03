import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Projects from "./Components/Projects";

function App() {
  const [projects] = useState([
    {
      name: "React Grid Game",
      description:
        "A work-in-progress browser puzzle game. Grid system is finished, currently working on implementing the game logic.",
      link: "https://reactgridgamesbird.netlify.app/",
      github: "https://github.com/SebBird/ReactGridGame",
    },
    {
      name: "Joke Generator",
      description:
        "My first foray into the world of React. A random joke generator which fetches a joke from an API.",
      link: "https://jokegeneratorsbird.netlify.app/",
      github: "https://github.com/SebBird/JokeGenerator",
    },
    {
      name: "To Do List",
      description:
        "A dynamic to-do list app built with React. Allows users to add, complete and delete tasks.",
      link: "https://todolistsbird.netlify.app/",
      github: "https://github.com/SebBird/ToDoList",
    },
    {
      name: "Adam's Garage Static Site",
      description:
        "A simple static website using basic HTML, CSS and JS for a local garage.",
      link: "https://adamsgarage.netlify.app/",
      github: "https://github.com/SebBird/AdamsGarage",
    },
  ]);

  return (
    <>
      <Header />
      <Banner />
      <Projects projects={projects} />
    </>
  );
}

export default App;
