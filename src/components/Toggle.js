import React from 'react'
import styled from 'styled-components'

function Toggle({ toggleTheme }) {
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
    background-color: #ffdf6c;
    border: 3px solid #e1c348;
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
