// ? Check constant for more details
// -[ ] Container
// -[ ] Image of the project
//    -[ ] Multiple images?? Main Image?? carousel maybe
// -[ ] A short description of the project
// -[ ] Links
// Status ? Completed, IP...

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { FaReact } from 'react-icons/fa'
function Card() {
  return (
    <Wrapper>
      <Link to='/showcase/project'>
        <div className='card'>
          <div className='image__container'>
            <img src='http://via.placeholder.com/350x150' alt='' />
          </div>
          <div className='content'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex fugit
            at error laudantium earum non, natus atque quaerat ratione possimus
            vel voluptatem nemo itaque dolorem placeat, quam repellat facere
            illo!
          </div>
          <div className='footer'>
            <span className='label'>Social Media</span>

            <div className='libs'>
              <Icon Icon={FaReact} color='61dcfc' />
              <Icon Icon={FaReact} color='61dcfc' />
              <Icon Icon={FaReact} color='61dcfc' />
            </div>
          </div>
        </div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    color: inherit;
    text-decoration: none;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem 2px;
    border-radius: var(--radius);

    background: var(--white);

    box-shadow: 10px 20px 30px #d0d0d0, -10px -20px 30px #ffffff;

    transition: var(--transition);

    img {
      border-radius: var(--radius-small);
    }

    .footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;
      border-radius: var(--radius);

      background: var(--white);
      box-shadow: 16px 17px 30px #d0d0d0, -16px -17px 30px #ffffff;

      .label {
        color: var(--primary-color-light);
        padding: 0.37rem 0.75rem;
        background: transparent;
        border-radius: 0.5rem;
        border: 1px solid var(--secondary-color);
        width: fit-content;
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
