import React from 'react'
import styled from 'styled-components'
import { aboutMe, headshot } from '../constants/constants'
import Highlighter from 'react-highlight-words'
function AboutMe() {
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>About me</h1>
      <div className='content'>
        <p className='aboutMe'>
          <Highlighter
            highlightClassName='highlight '
            searchWords={['Meshari']}
            autoEscape={true}
            textToHighlight={aboutMe}
          />
        </p>
        <img src={headshot} alt='Meshari' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  line-height: 2.75;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .aboutMe {
      width: 70%;
    }
    img {
      width: 15rem;
      height: 15rem;
      border-radius: var(--radius);
      border: 2px solid var(--primary-color);
      padding: 1px;
    }
  }

  @media (max-width: 900px) {
    .content {
      .aboutMe {
        width: 100%;
      }
      flex-direction: column;
      img {
        order: -1;
        margin-bottom: 1rem;
      }
    }
  }
`

export default AboutMe
