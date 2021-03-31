import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBanner({ name }) {
  return (
    <Wrapper className='nav'>
      <h1>
        <Link to='/'>Portfolio</Link> / {name}
      </h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  margin-bottom: 3rem;
  background-color: var(--primary-color-light);
  color: var(--secondary-color);
  padding: 2rem;
  border-bottom-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom: 1px solid var(--line-color-light);
  border-right: 1px solid var(--line-color-light);
  border-left: 1px solid var(--line-color-light);
  a {
    transition: var(--transition);
    color: var(--primary-dark);

    &:hover {
      letter-spacing: var(--spacing);
    }
  }
`

export default NavBanner