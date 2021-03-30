import React from 'react'
import styled from 'styled-components'
import { email } from '../constants/constants'

function Contact() {
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>Contact me</h1>
      <form name='contact' method='POST' data-netlify='true'>
        <p className='message'>
          Fill up the form below or send an email{' '}
          <a
            href={`mailto:${email}?subject=[Portfolio]`}
            className='highlight emailMe'
          >
            Here
          </a>
        </p>

        <p className='name'>
          <label>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p className='email'>
          <label>
            Your Email: <input type='email' name='email' />
          </label>
        </p>

        <p>
          <label>
            Subject: <input type='text' name='email' />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message' rows='4' cols='150'></textarea>
          </label>
        </p>

        <button type='submit' className='btn btn-primary '>
          Send
        </button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    border-radius: var(--radius);
    /* width: 100%; */
    /* width: 50%; */

    box-shadow: 20px 20px 60px var(--shadow-bottom),
      -20px -20px 60px var(--shadow-top);
    padding: 1rem;
    margin-left: auto;
    margin-right: auto;

    input,
    textarea {
      outline: none;
      margin-bottom: 10px;
      width: 100%;
      border: none;
      color: var(--primary-dark);
      letter-spacing: var(--spacing);
      border-radius: var(--radius);
      padding: 1rem;
    }

    input {
    }
    textarea {
      height: 200px;
      min-height: 240px;
    }
    button {
      margin: 0 auto;
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    .message {
      margin-bottom: 10px;
      text-align: center;
      font-size: 25px;
    }

    .emailMe {
      color: var(--background-color);
    }
  }

  /*
  form {

   
   

    
 
    input {
    }

   
  
  } */
`

export default Contact
