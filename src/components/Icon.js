// * Apps I have used
// ? General use, not specific to a project
// - [ ] Design
// - [ ] Languages
// - [ ] DB

// TODO
// TRYING TO PASS SVG WITH OR WITHOUT A LINK
// AND TRYING TO DO THE SAME FOR IMAGES

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// import FigmaLogo from '../assets/FigmaLogo.svg'

function Icon({ icon, link, click, image, alt }) {
  // ? You don't need react-router for external links <a href="..." would be fine to use
  const handleClick = () => {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign(`http://${link}`)
  }

  return (
    <Wrapper>
      {link ? (
        <Link to={`${link}`} target='_blank' onClick={handleClick}>
          <img src={icon} alt={alt} />
        </Link>
      ) : (
        <img src={icon} alt='' />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.span`
  img {
    width: 3rem;

    transition: var(--transition);
    padding: 5px;
    border-radius: var(--radius-small);
    display: flex;
    align-items: center;
    border: 1px solid var(--primary-color);

    &:hover {
      transform: scale(1.05);
    }
  }
`
export default Icon
