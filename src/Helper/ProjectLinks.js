import React from 'react'
import styled from 'styled-components'
import { live as livelogo, github } from '../constants/constants'
import Icon from '../components/Icon'

function ProjectLinks({ live, source }) {
  return (
    <Wrapper>
      {live && <Icon icon={livelogo} alt='github' link={live} />}
      {source && <Icon icon={github} alt='github' link={source} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 1rem;
  }
`

export default ProjectLinks
