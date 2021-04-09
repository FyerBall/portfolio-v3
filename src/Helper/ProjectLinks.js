import React from 'react'
import styled from 'styled-components'
import { live as livelogo, github } from '../constants/constants'
import Icon from '../components/Icon'
import useRGAEvents from '../hooks/useRGAEvents'

function ProjectLinks({ live, source }) {
  const RGAEventTracker = useRGAEvents('External Links')
  return (
    <Wrapper>
      {live && (
        <Icon
          icon={livelogo}
          alt='github'
          link={live}
          onClick={(e) => RGAEventTracker('Live Link Visit', live)}
        />
      )}
      {source && (
        <Icon
          icon={github}
          alt='github'
          link={source}
          onClick={(e) => RGAEventTracker('Source Link Visit', source)}
        />
      )}
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
