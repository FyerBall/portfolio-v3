import React from 'react'
import Icon from './Icon'
import { FaGithub } from 'react-icons/fa'
import styled from 'styled-components'
function Footer() {
  return (
    <Wrapper className=''>
      {/* TODO: dynamic links  */}

      <Icon Icon={FaGithub} />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: grid;
  justify-content: center;
`

export default Footer
