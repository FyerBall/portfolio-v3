// -[x] Main Projects
// -[ ] Archived Projects to show growth?
// -[ ] Contact
import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

function showcase() {
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>Recent work</h1>

      <article className='main'>
        <Card />
        <Card />
        <Card />
        <Card />
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
export default showcase
