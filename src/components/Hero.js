import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Hero() {
  return (
    <Wrapper>
      <div className='main'>
        <h1 className='title-big'>Meshari</h1>
        <p className='label'>Let's make a difference, for the better.</p>
        {/* TODO: Link to work section */}
        <Link to='/' className='btn btn-primary bouncy'>
          My work
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--primary-color);
  color: #f3f4f6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main {
    line-height: var(--line-height);
    text-align: center;
    .label {
      text-align: center;
      color: var(--primary-color);
      background-color: var(--secondary-color);
      width: fit-content;
      margin: 0 auto;
      padding: 0 5px;
      border-radius: var(--radius-small);
      margin-bottom: 2rem;
    }
    .cta {
      color: #f3f4f6;
      padding: 0.5rem;
      background-color: var(--primary-color-light);
    }
    /* .bouncy {
       animation: bouncy 5s infinite linear;
       position: relative;
    } */
  }

  /* @keyframes bouncy {
     0% {
      top: 0em;
    }
     40% {
      top: 0em;
    }
     43% {
      top: -0.9em;
    }
     46% {
      top: 0em;
    }
     48% {
      top: -0.4em;
    }
     50% {
      top: 0em;
    }
     100% {
      top: 0em;
    }
  } */
`
export default Hero
