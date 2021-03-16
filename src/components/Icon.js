// * Apps I have used
// ? General use, not specific to a project
// - [ ] Design
// - [ ] Languages
// - [ ] DB

// TODO
// TRYING TO PASS SVG WITH OR WITHOUT A LINK
// AND TRYING TO DO THE SAME FOR IMAGES

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { openWindow } from '../Helper/OpenWindow'
import { addhttp } from '../Helper/addhttp'

// import FigmaLogo from '../assets/FigmaLogo.svg'

// TODO: Do you need all of those???
function Icon({ icon, link, click, image, alt }) {
  const http = addhttp(link)
  return (
    <Wrapper>
      {/* TODO: Helper func. */}
      {link ? (
        <a href={http} target='_blank' rel='noreferrer'>
          <img src={icon} alt={alt} />
        </a>
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
