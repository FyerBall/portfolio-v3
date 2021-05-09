import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'

function Card(project) {
  const { id, desc, imageUrl, name, libraryUrl } = project

  const mainImage = imageUrl[0]

  const charLimit = 120
  return (
    <Wrapper>
      <Link to={`/project/${id}`}>
        <div className='card'>
          <div className='header'>
            <div className='image__container'>
              <img src={mainImage} alt={name} className='image' />
            </div>
            <div className='content'>
              {`${desc.substring(0, charLimit)}...`}
            </div>
          </div>
          <div className='footer'>
            <span className='label'>{name}</span>

            <div className='libs'>
              {libraryUrl
                .map((lib, _index) => (
                  <Icon key={_index} icon={lib} alt='Built with' />
                ))
                .splice(0, 3)}
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  height: 100%;

  a {
    color: inherit;
    text-decoration: none;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin: 1rem 2px;
    border-radius: var(--radius);

    background: #05254b;

    box-shadow: 10px 20px 30px #000, -10px -20px 30px #05254b;

    transition: var(--transition);
    height: 100%;

    .image__container {
      /* height: 200px; */
      /* width: 300px; */
      height: 200px;
    }
    .image {
      border-radius: var(--radius-small);
      height: 100%;
      width: 100%;
      background-position: center;
    }

    .content {
      padding: 4px;
      color: #f6fafd;
    }
    .footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      border-radius: var(--radius);
      margin-top: 1rem;
      box-shadow: 16px 17px 30px #000, -16px -17px 30px #05254b;

      .label {
        color: #f6fafd;
        padding: 0.37rem 0.75rem;
        background: transparent;
        border-radius: 0.5rem;
        border: 1px solid var(--secondary-color);
        width: fit-content;
        white-space: nowrap;
      }
      .libs {
        display: flex;
        align-items: center;
        & > * {
          margin: 0 1px;
        }
      }
    }
    &:hover {
      box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
      transform: scale(1.02);
    }
  }
`

export default Card
