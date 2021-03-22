import React from 'react'
import styled from 'styled-components'
import { aboutMe } from '../constants/constants'
function AboutMe() {
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>About me</h1>
      <div className='content'>
        <p className='aboutMe'>{aboutMe}</p>
        <img
          src='https://dl.airtable.com/.attachments/eacd267e00b9f94373a6ae44a8696c03/f3c00776/Cheeseburger.jpg'
          alt='Meshari'
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  line-height: 2.75;
  .content {
    display: flex;
    align-items: center;

    .aboutMe {
    }
    img {
      width: 15rem;
      height: 15rem;
      border-radius: 10rem;
      border: 2px solid var(--primary-color);
      padding: 1px;
    }
  }

  @media (max-width: 900px) {
    .content {
      .aboutMe {
        /*  */
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
