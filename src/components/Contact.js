import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { email } from '../constants/constants'

function Contact() {
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>Contact me</h1>

      {/* <form name='contact' method='POST' data-netlify='true'>
        <p className='message'>Feel free to get in touch</p>
        <input type='text' name="name"  placeholder='your name' required />
        <input type='email' name="email"  placeholder='your email' required />
        <input type='text' placeholder='your role' />
        <textarea placeholder='your message' cols='30' rows='10'></textarea>
        
        <button type='submit' className='btn btn-primary'>
        send
        </button>
      </form> */}

      <form
        action='/pages/success'
        name='contact'
        method='POST'
        data-netlify='true'
      >
        <p className='message'>
          Fill up the form below or send an email to{' '}
          <a href={`mailto:${email}`} className='emailMe'>
            {email}
          </a>
        </p>
        <div className='info'>
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
        </div>
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

        <button type='submit' className='btn btn-primary'>
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
    width: 50%;

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
      /* text-align: center; */
      /* width: -webkit-fit-content;
      width: -moz-fit-content; */
      /* width: fit-content; */
      margin: 0 0 0 5px;
      padding: 0 5px;
      border-radius: var(--radius-small);
      margin-bottom: 2rem;
      color: var(--background-color);
      background-color: var(--primary-color);
    }
  }

  /*
  form {

   
   

    
 
    input {
    }

   
  
  } */
`

export default Contact
