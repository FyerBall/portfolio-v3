import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { useProjects } from '../context/projectContext'

function Showcase() {
  const { showcase } = useProjects()

  const showcasing = showcase.filter((project) => project.archived !== true)

  return (
    <Wrapper className='section' id={'work'}>
      <h1 className='title title-primary'>Featured Projects</h1>

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
  border-radius: var(--radius);

  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    background-color: #05254b;
    height: 100%;
    padding: 4rem 1rem;
    border-radius: var(--radius);
  }
`
export default Showcase
