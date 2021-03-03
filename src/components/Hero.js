import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Hero() {
  return (
    <Wrapper>
      <div className='main'>
        <h1>Hero</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <Link to='/showcase' className='cta'>
          My work
        </Link>
      </div>
      <div className='secondary'>
        <button>Contact me</button>
        <button>Github</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  background-color: #4b5563;
  color: #f3f4f6;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .main {
    text-align: center;
    line-height: var(--line-height);
    .cta {
      color: #f3f4f6;
      padding: 0.5rem;
      background-color: #f87171;
    }
  }
  .secondary {
    position: fixed;
    bottom: 0;
  }
`;
export default Hero;
