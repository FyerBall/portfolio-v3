import React from 'react'
import styled from 'styled-components'
import { email } from '../constants/constants'

function Contact() {
  return (
    <Wrapper className='section' id='contact'>
      <h1 className=' title-primary'>Want to know more?</h1>

      <p className='message'>
        What to know more about me or my work process?
        <a
          href={`mailto:${email}?subject=[Portfolio]`}
          className='highlight emailMe'
        >
          Drop me a line and let's chat!
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
