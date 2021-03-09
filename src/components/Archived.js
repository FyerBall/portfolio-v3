import React from 'react'
import styled from 'styled-components'
import Table from './Table'

function Archived() {
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>Archived</h1>

      <Table />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .title {
    text-align: center;
  }
  table {
    margin: 1rem auto;
    width: 100%;
    text-align: center;
    background-color: lightgoldenrodyellow;
    border-radius: var(--radius);
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  button {
    margin: 0 auto;
    display: block;
  }
`

export default Archived
