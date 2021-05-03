import React, { useState } from "react";
import styled from "styled-components";

const MainHeader = styled.header`
  background-color: rgba(53, 43, 43, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  z-index: 999;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`;

const Links = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  color: white;
  padding: 1.5rem 2rem;
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

const MenuButton = styled.p`
  user-select: none;
  text-decoration: none;
  color: white;
  display: none;
  transition: 0.25s;

  &:hover {
    font-weight: 800;
    background-color: rgb(104, 84, 84);
  }

  @media (max-width: 425px) {
    font-weight: 800;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    display: block;
    height: 100%;
  }
`;

const Header = () => {
  const [mobileHidden, updateMobileHidden] = useState(true);

  const handleHidden = () => {
    let newMobileMenu = !mobileHidden;
    updateMobileHidden(newMobileMenu);
  };

  let classes = "";
  classes = classes +=
    mobileHidden && window.innerWidth < 426 ? "mobileHide" : "";
  console.log(classes);
  return (
    <MainHeader id="headerbar">
      <Links href="#headerbar">Sebastian Bird</Links>
      <nav className={classes}>
        <Links href="">About Me</Links>
        <Links href="">Projects</Links>
        <Links href="">Resume</Links>
      </nav>
      <MenuButton onClick={handleHidden}>Menu</MenuButton>
    </MainHeader>
  );
};

export default Header;
