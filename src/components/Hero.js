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
      <div className='big-circle'></div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  /* TODO: var(--color???) */
  color: #f3f4f6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: var(--white-2); */

  position: relative;

  .main {
    line-height: var(--line-height);
    text-align: center;

    z-index: 999;
    border-radius: 50px;
    background: var(--background-color);
    box-shadow: 20px 20px 60px var(--shadow-bottom),
      -20px -20px 60px transparent;
    padding: 1rem;
    color: var(--primary-color);

    .label {
      text-align: center;

      font-size: 25px;
      width: fit-content;
      margin: 0 auto;
      padding: 0 5px;
      border-radius: var(--radius-small);
      margin-bottom: 2rem;
      /* TODO: var(--color???) */
      color: var(--background-color);
      background-color: var(--primary-color);
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

  .big-circle {
    background: #44454c;
    height: 25rem;
    width: 25rem;
    position: absolute;
    top: 10%;
    border-radius: 50%;

    border-radius: 50%;
    background: linear-gradient(to right, #ff9264, #ffcbb6);
    box-shadow: 20px 20px 60px #3a3b41, -20px -20px 60px transparent;
    opacity: 0.8;
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
