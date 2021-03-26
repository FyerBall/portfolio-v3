import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext'
import { motion } from 'framer-motion'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import Icon from './Icon'

function Toggle() {
  const { theme, darkMode, lightMode, toggleTheme } = useTheme()

  return (
    <Wrapper className=''>
      {theme === darkMode && (
        <motion.div
          className=''
          onClick={toggleTheme}
          initial={{ x: 250, scale: 0 }}
          animate={{ rotate: 360, x: 0, scale: 1 }}
          // transition={{ delay: 0.2, type: 'spring', stiffness: 30 }}
          transition={{
            type: 'spring',
            damping: 10,
            mass: 0.75,
            stiffness: 30,
          }}
          whileTap={{ rotate: 90, scale: 0.75 }}
          whileHover={{ scale: 0.8 }}
        >
          <Icon icon={moon} alt='toggle mode' />
        </motion.div>
      )}

      {theme === lightMode && (
        <motion.div
          className=''
          onClick={toggleTheme}
          initial={{ y: '-100vh', scale: 0 }}
          animate={{ rotate: 360, y: 0, scale: 1 }}
          // transition={{ delay: 0.2, type: 'spring', stiffness: 30 }}
          transition={{
            type: 'spring',
            damping: 10,
            mass: 0.75,
            stiffness: 30,
          }}
          whileTap={{ rotate: 90, scale: 0.75 }}
          whileHover={{ scale: 0.8 }}
        >
          <Icon icon={sun} alt='toggle mode' />
        </motion.div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  //https://codepen.io/anurag94/pen/MWYBWoN
  #theme-toggle {
    visibility: hidden;
    display: none;
  }
  #theme-toggle + label {
    content: '';
    display: inline-block;
    cursor: pointer;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    transition: var(--transition);
    padding: 1rem;
  }
  #theme-toggle:not(:checked) + label {
    background: linear-gradient(to right, #ff9264, #ffcbb6);

    opacity: 0.8;
  }
  #theme-toggle:checked + label {
    background-color: transparent;
    box-shadow: inset -18px -16px 1px 1px #fff;
  }
  &:hover {
    cursor: pointer;
  }
`

export default Toggle
//Icon by <a href="https://freeicons.io/profile/3063">Oscar EstMont</a> on <a href="https://freeicons.io">freeicons.io</a>
//Icon by <a href="https://freeicons.io/profile/722">Fasil</a> on <a href="https://freeicons.io">freeicons.io</a>
