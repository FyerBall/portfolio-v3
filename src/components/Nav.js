import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import Toggle from './Toggle'
import { useTheme } from '../context/themeContext'
import { addhttp } from '../Helper/addhttp'
import { resumeLink } from '../constants/constants'
// import useRGAEvents from '../hooks/useRGAEvents'
function Nav() {
  const { theme, darkMode } = useTheme()

  const http = addhttp(resumeLink)

  // const RGAEventTracker = useRGAEvents('External Links')
  return (
    <Wrapper className=''>
      <div className='nav-container container'>
        <a
          href={http}
          target='_blank'
          rel='noreferrer'
          // onClick={(e) => RGAEventTracker('Resume Link Visit', http)}
        >
          <h1 className='highlight mb-0'>Resume</h1>
        </a>
        <Link
          to='/'
          className={`${theme === darkMode && 'flicker'} title-big logo `}
          data-text='Meshari'
        >
          {/* TODO: Thanking about delaying a latter
           */}

          <span id='M'>M</span>
          <span id='e'>e</span>
          <span id='s'>s</span>
          <span id='h'>h</span>
          <span id='a'>a</span>
          <span id='r'>r</span>
          <span id='i'>i</span>
        </Link>

        <Toggle />
      </div>
    </Wrapper>
  )
}

const flicker = keyframes`
0% {
    filter: blur(5px) brightness(1);
   
  }
  3% {
    filter: blur(5px) brightness(0);
  }
  6% {
    filter: blur(5px) brightness(0);
  }
  7% {
    filter: blur(5px) brightness(1);
  }
  8% {
    filter: blur(5px) brightness(0);
  }
  9% {
    filter: blur(5px) brightness(1);
  }
  10% {
    filter: blur(5px) brightness(0);
  }
  20% {
    filter: blur(5px) brightness(1);
  }
  50% {
    filter: blur(5px) brightness(1);
    
  }
  99% {
    filter: blur(5px) brightness(0);
  }
  100% {
    filter: blur(5px) brightness(1);
    
  }


`

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

  .logo {
    font-size: 2rem;
    transition: var(--transition);
    margin: 0 auto;
  }

  .flicker {
    font-size: 2rem;
    text-shadow: 3px 5px 4px var(--white), 0 0 0px var(--white),
      0 0 1px var(--white), 0 0 20px var(--white);

    &::before {
      position: absolute;
      content: attr(data-text);
      text-shadow: 0 0 20px var(--white);
      filter: blur() brightness();
      animation: ${flicker} 2s linear 1s forwards;
    }
  }
`

export default Nav
//Icon by <a href="https://freeicons.io/profile/3117">Mas Dhimas</a> on <a href="https://freeicons.io">freeicons.io</a>
