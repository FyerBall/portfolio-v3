import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HashLink } from 'react-router-hash-link'
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
        <Link to='/work'> my work </Link>
        or <HashLink to='#contact'>get in touch</HashLink>.
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
    text-transform: none;
  }
  .reach {
    color: #aacef9;
  }
`

export default Hero
