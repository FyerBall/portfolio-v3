// -[x] Main Projects
// -[ ] Archived Projects to show growth?
// -[ ] Contact
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import axios from 'axios'
// import Skeleton from '@material-ui/lab/Skeleton'

const url = 'api/projects'
function Showcase() {
  const [projects, setProjects] = useState([])
  // const [isLoading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url)
      setProjects(data)
    } catch (error) {}
  }
  useEffect(() => {
    fetchData()
    return () => {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>Recent work</h1>

      <article className='main'>
        {/* {isLoading ? (
          //
          <h1>Loading...</h1>
        ) : (
          // <h1>Nah</h1>
          projects.map((project) => <Card key={project.id} {...project} />)
        )} */}

        {projects.map((project) => (
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
