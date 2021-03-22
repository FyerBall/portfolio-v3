import React from 'react'
import Icon from './Icon'
import { github, githubLink } from '../constants/constants'
import styled from 'styled-components'
function Footer() {
  return (
    <Wrapper className=''>
      <Icon icon={github} alt='github' link={githubLink} />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: grid;
  justify-content: center;
`

export default Footer
