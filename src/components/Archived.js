// TODO: DRY! CSS -> Archived Page
import React from 'react'
import styled from 'styled-components'
import { useProjects } from '../context/projectContext'

import SmallCard from './SmallCard'

function Archived() {
  const { archived } = useProjects()
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>Projects</h1>

      <article>
        {archived
          .filter((project) => project.archived === true)
          .map((project) => {
            // small card
            return (
              <div key={project.id}>
                <SmallCard {...project} />
              </div>
            )
          })}
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 5rem;
  padding: 1rem;
  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
  }
`

export default Archived
