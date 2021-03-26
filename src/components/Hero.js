import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import styled from 'styled-components'

import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      when: 'beforeChildren',
    },
  },
}

function Hero() {
  return (
    <Wrapper>
      <motion.div
        className='main'
        variants={variants}
        initial='hidden'
        animate='visible'
      >
        <h1 className='title-big'>Hello!</h1>
        <p className='highlight highlight-large'>
          Let's make a difference, for the better.
        </p>

        <Link to='#work' className='btn btn-primary bouncy'>
          My work
        </Link>
      </motion.div>
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

    .cta {
      color: #f3f4f6;
      padding: 0.5rem;
      background-color: var(--primary-color-light);
    }
  }

  .sun {
    background: #44454c;
    height: 25rem;
    width: 25rem;
    position: absolute;
    top: 10%;
    border-radius: 50%;
    background: linear-gradient(to right, #ff9264, #ffcbb6);
    box-shadow: 20px 20px 60px #3a3b41, -20px -20px 60px transparent;
    opacity: 0.8;
  }

  .moon {
    height: 10rem;
    width: 10rem;
    position: absolute;
    top: 20%;
    left: 30%;
    border-radius: 50%;
    background-color: transparent;
    box-shadow: inset 5rem 4rem 12rem -2rem #fff;
  }
`
export default Hero
