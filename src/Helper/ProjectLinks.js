import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { openWindow } from '../Helper/OpenWindow'
import { addhttp } from '../Helper/addhttp'
import styled from 'styled-components'
import githublogo from '../assets/github.svg'

function ProjectLinks({ links }) {
  let icons = [
    {
      id: 1,
      name: 'google',
      icon:
        'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    },
  ]

  return (
    <Wrapper>
      {links.map((link, _id) => {
        const http = addhttp(link)
        const name = link.split('.')[0]
        console.log(name)
        return (
          <a href={http} target='_blank' rel='noreferrer'>
            {name}
          </a>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    margin-right: 3rem;
    font-size: 3rem;
  }
`

export default ProjectLinks
