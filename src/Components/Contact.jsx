import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Formbox = styled.div`
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 4rem;
`;

const Mainform = styled.form`
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 425px) {
    width: 15rem;
  }
`;

const StyledLabel = styled.label`
  padding: 1.5rem 0 0.2rem;
`;

const StyledInput = styled.input`
  width: 60%;
  padding: 0.5rem;
  border: 3px solid black;
  outline: none;
  border-radius: 5px;
  transition: 0.35s;
  &:focus {
    border: 3px solid rgb(122, 122, 122);
  }
`;
const StyledText = styled.textarea`
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  border: 3px solid black;
  outline: none;
  border-radius: 5px;
  transition: 0.35s;
  &:focus {
    border: 3px solid rgb(122, 122, 122);
  }
  @media (max-width: 425px) {
    width: 90%;
  }
`;
const StyledButton = styled.input`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  background: rgb(122, 122, 122);
  border-radius: 5px;
  color: white;
  width: 5rem;
  margin: 1rem 0;
  padding: 0.4rem 0;
  outline: none;
`;

const Contact = () => {
  function sendForm(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_63y04es",
        "template_83xlgf2",
        e.target,
        "user_c5rhw7lfR33LtWTcIaeVP"
      )
      .then(
        (response) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Formbox id="contactme">
      <h2>Contact Me</h2>
      <Mainform className="contact-form" onSubmit={sendForm}>
        <StyledLabel htmlFor="subjectname">Name</StyledLabel>
        <StyledInput id="subjectname" type="text" name="from_name" required />
        <StyledLabel htmlFor="subjectemail">Email</StyledLabel>
        <StyledInput
          id="subjectemail"
          type="email"
          name="from_email"
          required
        />
        <StyledLabel htmlFor="emailsubject">Subject</StyledLabel>
        <StyledInput id="emailsubject" type="text" name="subject" />
        <StyledLabel htmlFor="subjectmessage">Message</StyledLabel>
        <StyledText id="subjectmessage" name="message" required />
        <StyledButton type="submit" value="Send" />
      </Mainform>
    </Formbox>
  );
};

export default Contact;

//INPUT VALIDATION, CHECK FIELDS ARENT BLANK
//FINISH STYLING
