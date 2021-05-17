import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Icon from './Icon'
import { github, githubLink } from '../constants/constants'

import { email } from '../constants/constants'

function Nav() {
  return (
    <Wrapper>
      <NavLink to='/' className='logo'>
        <h1 className='logo'>Meshari</h1>
      </NavLink>
      <ul className='nav__items'>
        <a
          href={`mailto:${email}?subject=[Portfolio]`}
          className='highlight emailMe'
        >
          Contact Me
        </a>
        <Icon icon={github} alt='github' link={githubLink} />
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 75px;
  z-index: 9999;
  backdrop-filter: blur(20px);
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  padding: 1rem;
  position: sticky;
  top: 0;
  .logo {
    color: #f07c41;
    font-size: 2rem;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
  }

  .nav__items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & a {
      margin: 0 2rem;
    }
  }

  @media (max-width: 320px) {
    position: static;
    flex-direction: column;
  }
`

export default Nav
//Icon by <a href="https://freeicons.io/profile/3117">Mas Dhimas</a> on <a href="https://freeicons.io">freeicons.io</a>
