import React from 'react'
import styled from 'styled-components'
import Toggle from './Toggle'
// TODO: Toggle for dark and light
function Nav({ toggleTheme }) {
  return (
    <Wrapper className=''>
      <div className='nav-container container'>
        <h1 className='logo'>Meshari</h1>
        {/* <button type='button' onClick={toggleTheme}>
          toggle
        </button> */}
        <Toggle toggleTheme={toggleTheme} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 75px;
  border-bottom: 2px solid var(--line-color-light);
  position: sticky;
  top: 0;
  z-index: 9999;
  backdrop-filter: blur(20px);
  background-color: transparent;
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    /* color: #fd8e8e; */
    color: var(--primary-color);
  }
`

export default Nav
