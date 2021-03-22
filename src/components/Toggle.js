import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../context/themeContext'

function Toggle() {
  const { toggleTheme } = useTheme()

  return (
    <Wrapper className=''>
      <input type='checkbox' name='' id='theme-toggle' onClick={toggleTheme} />
      <label htmlFor='theme-toggle'></label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  //https://codepen.io/anurag94/pen/MWYBWoN
  #theme-toggle {
    visibility: hidden;
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
