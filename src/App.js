import React, { useState } from "react";
import "./App.css";
import importProjects from "./Modules/projects.js";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Projects from "./Components/Projects";

function App() {
  const [projects] = useState(importProjects());

  return (
    <>
      <Header />
      <Banner />
      <Projects projects={projects} />
    </>
  );
}

export default App;
