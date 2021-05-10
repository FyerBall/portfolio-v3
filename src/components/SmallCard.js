import React from 'react'
import styled from 'styled-components'
import ProjectLinks from '../Helper/ProjectLinks'

function Card(projects) {
  const { imageUrl, name, linkLive, linkSource } = projects
  console.log(imageUrl[0])

  return (
    <Wrapper>
      <div className='card'>
        <div className='header'>
          <h3 className='title'>{name}</h3>
          <div className='image__container'>
            <img src={imageUrl[0]} alt={name} className='image' />
          </div>
        </div>
        <div className='footer'>
          <ProjectLinks live={linkLive} source={linkSource} />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  color: white;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 1rem 2px;
    border-radius: var(--radius);
    background: #f6fafd;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    transition: var(--transition);
    height: 100%;

    .header {
      text-align: center;
      .title {
        /* margin-bottom: 2rem; */
        /* background-color: #f6fafd; */
        /* padding: 2rem; */
        color: #05254b;
      }
    }

    .image__container {
      height: 200px;
    }
    .image {
      border-radius: var(--radius-small);
      height: 100%;
      width: 100%;
      background-position: center;
    }

    .footer {
      background-color: #f6fafd;

      padding: 5px 10px;
      border-radius: var(--radius);
      margin-top: 1rem;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
  }
`

export default Card
