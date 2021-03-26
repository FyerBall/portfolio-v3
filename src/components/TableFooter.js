import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function TableFooter() {
  return (
    <Wrapper className='footer'>
      <Link to='/archived' className='more btn btn-primary'>
        see more
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  .more {
    margin-top: 10px;
  }
`

export default TableFooter
