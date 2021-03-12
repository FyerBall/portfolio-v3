import React from 'react'
import styled from 'styled-components'

function Contact() {
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>Contact me</h1>

      <form>
        <p className='message'>Feel free to get in touch</p>
        <input type='text' placeholder='your name' required />
        <input type='email' placeholder='your email' required />
        <input type='text' placeholder='your role' />
        <textarea placeholder='your message' cols='30' rows='10'></textarea>

        <button type='submit' className='btn btn-primary'>
          send
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

    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    border-radius: var(--radius);

    background: var(--white);
    box-shadow: 20px 20px 60px #d0d0d0, -20px -20px 60px #ffffff;

    width: 50%;
    input,
    textarea {
      outline: none;
      margin-bottom: 10px;
      width: 100%;
      border: none;

      padding: 1rem;
    }
    input {
    }

    .message {
      margin-bottom: 10px;
      text-align: center;
    }
  }
`

export default Contact
