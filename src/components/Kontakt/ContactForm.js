import React from 'react'
import styled from 'styled-components'

const FormStyles = styled.div`
  flex: 1;
  height: 100%;
  form {
    padding-right: 2em;
    margin-top: 1em;
    height: 80%;
    p {
      font-size: clamp(16px, 3vw, 3em);
      margin-bottom: 1em;
    }
  }
  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95%;
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
    min-height: 30vh;
    outline: none;
    background-color: rgba(96, 96, 96, 0.5);
    color: #fff;
  }
  input[type='submit'] {
    width: 20%;
  }
`
const ContactForm = () => (
  <FormStyles>
    <form>
      <fieldset>
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
)

export default ContactForm
