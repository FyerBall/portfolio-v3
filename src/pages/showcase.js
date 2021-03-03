// -[x] Main Projects
// -[ ] Archived Projects to show growth?
// -[ ] Contact
import React from 'react';
import styled from 'styled-components';
import Archived from '../components/Archived';
import Card from '../components/Card';
import Contact from '../components/Contact';

function showcase() {
  return (
    <Wrapper className='container'>
      <h1 className='title'>Portfolio</h1>

      <section className='main'>
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      <div className='archived'>
        <Archived />
      </div>

      <Contact />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
`;
export default showcase;
