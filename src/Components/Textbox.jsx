import React from "react";
import styled from "styled-components";

const InfoDiv = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgba(53, 43, 43, 0.75);
  color: rgb(201, 201, 201);
  max-width: 25rem;
  margin: 1rem;
  padding: 2rem;
  z-index: 999;
  border-radius: 10px;
    @media (max-width: 1280px) {
      font-size: 1.1rem;
      margin: 2rem 0.5rem;
    }
    @media (max-width: 425px) {

      margin: 1rem;
      max-width: 12rem;
    }
  }
`;

const Textbox = ({ content }) => <InfoDiv>{content}</InfoDiv>;

export default Textbox;
