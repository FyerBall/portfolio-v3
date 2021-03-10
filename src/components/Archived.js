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

const Wrapper = styled.section``

export default Archived
