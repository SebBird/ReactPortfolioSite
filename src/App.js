import React, { useState } from "react";
import "./App.css";
import importProjects from "./Modules/projects.js";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";

function App() {
  const [projects] = useState(importProjects());

  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Projects projects={projects} />
      <Footer />
    </>
  );
}

export default App;
