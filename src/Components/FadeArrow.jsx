import React from "react";
import styled from "styled-components";
import scrollarrow from "../Assets/scrollarrow.png";

const Arrow = styled.div`
  z-index: 999;
  position: relative;
  bottom: 0px;
  opacity: 0.3;
  @media (max-width: 768px) {
    opacity: 0;
  }
`;

const Image = styled.img`
  user-select: none;
  width: 80px;
  @media (max-width: 1280px) {
    width: 50px;
  }
`;

const FadeArrow = ({ reference }) => {
  return (
    <Arrow>
      <a href={reference}>
        <Image src={scrollarrow} alt="" />
      </a>
    </Arrow>
  );
};

export default FadeArrow;
