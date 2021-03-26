// -[x] Main Projects
// -[ ] Archived Projects to show growth?
// -[ ] Contact
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { useProjects } from '../context/projectContext'
// import Skeleton from '@material-ui/lab/Skeleton'

function Showcase() {
  const { showcase } = useProjects()

  return (
    <Wrapper className='section' id={'work'}>
      <h1 className='title-primary'>Recent work</h1>

      <article className='main'>
        {showcase.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
`
export default Showcase
