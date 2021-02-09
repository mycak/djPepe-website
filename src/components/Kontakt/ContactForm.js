import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';

const FormStyles = styled.div`
  flex: 1;
  form {
    padding-right: 2em;
    margin-top: 1em;
    height: 100%;
    p {
      font-size: clamp(16px, 3vw, 3em);
      margin-bottom: 1em;
    }
    @media (max-width: 700px) {
      padding-right: 0;
    }
  }
  fieldset {
    opacity: 0;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 700px) {
      width: 75%;
    }
    label {
      font-size: clamp(10px, 1.4vw, 2em);
      text-align: left;
      margin-bottom: 0.5em;
      width: 100%;
    }
  }
  input[type='text'] {
    width: 100%;
    margin-top: 0.5em;
    outline: none;
    border: 1px solid #ccc;
    background-color: rgba(96, 96, 96, 0.5);
    color: #fff;
  }
  textarea[type='text'] {
    margin-top: 0.5em;
    border: 1px solid #ccc;
    min-width: 100%;
    min-height: 35vh;
    outline: none;
    background-color: rgba(96, 96, 96, 0.5);
    color: #fff;
    @media (max-width: 1000px) {
      min-height: 50vh;
    }
  }
  input[type='submit'] {
    width: 20%;
    font-size: clamp(14px, 2vw, 3em);
    @media (max-width: 1000px) {
      width: 50%;
    }
    @media (max-width: 700px) {
      width: 30%;
      margin-bottom: 2em;
    }
  }
`;
const ContactForm = () => {
  const form = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(form.current, {
      opacity: 1,
      delay: 1.5,
      duration: 0.8,
    });
  });
  return (
    <FormStyles>
      <form>
        <fieldset ref={form}>
          <p>Zapytaj o ofertę !</p>
          <label htmlFor="email">
            E-mail:
            <input type="text" id="email" name="email" placeholder="Email..." />
          </label>
          <label htmlFor="message">
            Wiadomość:
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Napisz coś.."
            />
          </label>
          <input type="submit" value="Wyślij" />
        </fieldset>
      </form>
    </FormStyles>
  );
};

export default ContactForm;
