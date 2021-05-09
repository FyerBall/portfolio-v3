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

  const showcasing = showcase.filter((project) => project.archived !== true)

  return (
    <Wrapper className='section' id={'work'}>
      <h1 className='title-primary'>Featured Projects</h1>

      <article className='main'>
        {showcasing.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #f6fafd;

  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    background-color: #05254b;
    height: 100%;
    padding: 4rem 1rem;
  }
`
export default Showcase
