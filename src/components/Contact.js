import React from 'react'
import styled from 'styled-components'
import { email } from '../constants/constants'

function Contact() {
  return (
    <Wrapper className='section' id='contact'>
      <h1 className=' title-primary'>Want to know more?</h1>

      <p className='message'>
        What to know more about me or my work process? Drop me a line and let's
        chat!
      </p>

      <form name='contact' method='POST' data-netlify='true'>
        <p>
          <label htmlFor='name'>
            Name: <input type='text' id='name' name='name' />
          </label>
        </p>
        <p>
          <label htmlFor='email'>
            Email: <input type='email' name='email' id='email' />
          </label>
        </p>

        <p>
          <label htmlFor='message'>
            Message: <textarea name='message'></textarea>
          </label>
        </p>
        <p>
          <button className='btn btn__primary-center' type='submit'>
            Send
          </button>
        </p>
      </form>

      <p className='message'>
        You can contact me by using this form or by sending me an
        <a
          href={`mailto:${email}?subject=[Portfolio]`}
          className='highlight emailMe'
        >
          email
        </a>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 5rem;
  background-color: #05254b;

  .title-primary {
    color: #f6fafd;
    text-align: center;
  }
  .message {
    color: #e5e5e5;
    text-align: center;
    letter-spacing: var(--spacing);
    a {
      color: #f07c41;
    }
  }
  form {
    label {
      display: flex;
      flex-direction: column;
      color: #f07c41;
    }
    input {
      border: 1px solid #f07c41;
      height: 3rem;
    }
    textarea {
      border: 1px solid #f07c41;
      height: 150px;
    }
    input,
    textarea {
      margin-bottom: 2rem;
      color: #05254b;
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
`

export default Contact
