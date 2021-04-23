import React from 'react'
import Icon from './Icon'
import { github, githubLink } from '../constants/constants'
import styled from 'styled-components'
// import useRGAEvents from '../hooks/useRGAEvents'

function Footer() {
  // const RGAEventTracker = useRGAEvents('External Links')

  return (
    <Wrapper className=''>
      <Icon
        icon={github}
        alt='github'
        link={githubLink}
        // onClick={(e) => RGAEventTracker('Github Link Visit', githubLink)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: grid;
  justify-content: center;
  padding: 1rem;
`

export default Footer
