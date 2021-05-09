import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Icon from './Icon'
import { github, githubLink } from '../constants/constants'

import { addhttp } from '../Helper/addhttp'
import { resumeLink } from '../constants/constants'
function Nav() {
  const http = addhttp(resumeLink)

  // const RGAEventTracker = useRGAEvents('External Links')
  return (
    <Wrapper>
      <NavLink to='/' className='logo'>
        Meshari
        <div className='divider'></div>
      </NavLink>
      <ul className='nav__items'>
        <NavLink to='/work' className='nav__links'>
          Work
        </NavLink>
        <NavLink to='/' className='nav__links'>
          Contact
        </NavLink>
        <Icon
          icon={github}
          alt='github'
          link={githubLink}
          // onClick={(e) => RGAEventTracker('Github Link Visit', githubLink)}
        />
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
  .logo {
    color: #f07c41;
    font-size: 2rem;
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    flex-direction: column;

    &:hover .divider {
      width: 55px;
    }
  }
  .divider {
    transition: var(--transition);
    width: 50px;
    height: 10px;
    background-color: #55bdca;
    border-radius: var(--radius);
  }
  .nav__items {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
  }
`

export default Nav
//Icon by <a href="https://freeicons.io/profile/3117">Mas Dhimas</a> on <a href="https://freeicons.io">freeicons.io</a>
