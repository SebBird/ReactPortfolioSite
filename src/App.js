import React, { useState } from "react";
import "./App.css";
import importProjects from "./Modules/projects.js";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  const [projects] = useState(importProjects());

  return (
    <>
      <Header />
      <Banner />
      <AboutMe />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
