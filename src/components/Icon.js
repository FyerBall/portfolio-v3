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

function Icon({ Icon, color, size, link, click, image, name }) {
  // ? You don't need react-router for external links <a href="..." would be fine to use
  const handleClick = () => {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign(`http://${link}`)
  }

  // const icons = () => {
  //   if (link) {
  //     return (
  //       <Link to={`${link}`} target='_blank' onClick={handleClick}>
  //         <Icon style={{ color: color, fontSize: size }} />
  //       </Link>
  //     )
  //   } else {
  //     return <Icon style={{ color: color, fontSize: size }} />
  //   }
  // }

  // const images = () => {
  //   if (image && link) {
  //     return (
  //       <Link to={`${link}`} target='_blank' onClick={handleClick}>
  //         <img src={image} alt={name} />
  //       </Link>
  //     )
  //   } else {
  //     return <img src={image} alt={name} />
  //   }
  // }

  return (
    <Wrapper>
      {link ? (
        <Link to={`${link}`} target='_blank' onClick={handleClick}>
          <Icon style={{ color: color, fontSize: size }} />
        </Link>
      ) : (
        <Link to={`${link}`} target='_blank' onClick={handleClick}>
          <img src={image} alt={name} />
        </Link>
      )}

      {Icon ? (
        <Icon style={{ color: color, fontSize: size }} onClick={click} />
      ) : (
        <img src={image} alt={name} style={{ width: '4rem' }} />
      )}

      {/*       {link ? (
        <Link to={`${link}`} target='_blank' onClick={handleClick}>
          <Icon style={{ color: color, fontSize: size }} />
        </Link>
      ) : Icon ? (
        <Icon style={{ color: color, fontSize: size }} onClick={click} />
      ) : (
        <img src={image} alt={name} />
      )} */}
    </Wrapper>
  )
}

const Wrapper = styled.li`
  margin: 20px 10px;
  cursor: pointer;
  transition: var(--transition);
  padding: 5px;
  border-radius: var(--radius-small);
  display: flex;
  align-items: center;

  &:hover {
    background: var(--secondary-color-light);
    color: var(--primary-color);
  }
  svg {
    font-size: 30px;
  }
  a {
    color: inherit;
    display: flex;
    align-items: center;
  }
`
export default Icon
