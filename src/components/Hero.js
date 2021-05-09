import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Hero() {
  return (
    <Wrapper>
      <h3 className='greeting'>Hello~</h3>
      <h1 className='me'>
        I am Meshari, Denver based Frontend Developer mainly working with JS and
        React.
      </h1>
      <p className='reach'>
        Find out more about
        <Link to='/'> my work </Link>
        or <Link to='/'>get in touch</Link>.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 6rem auto;
  padding: 1rem;
  .greeting {
    color: #55bdca;
  }
  .me {
    color: #05254b;
    line-height: var(--line-height);
  }
  .reach {
    color: #95aac3;

    a {
      color: #f07c41;
    }
  }
`

export default Hero
