// ? Check constant for more details
// -[ ] Container
// -[ ] Image of the project
//    -[ ] Multiple images?? Main Image?? carousel maybe
// -[ ] A short description of the project
// -[ ] Links

import React from 'react';
import styled from 'styled-components';

function Card() {
  return (
    <Wrapper>
      <div className='card'>
        <div className='image__container'>
          <img src='http://via.placeholder.com/350x150' alt='' />
        </div>
        <div className='content'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex fugit at
          error laudantium earum non, natus atque quaerat ratione possimus vel
          voluptatem nemo itaque dolorem placeat, quam repellat facere illo!
        </div>
        <div className='footer'>
          <span className='label'>Social Media</span>
          <div className='libs'>
            <button>Icon</button>
            <button>Icon</button>
            <button>Icon</button>
            <button>Icon</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem auto;
    border: 2px solid #f2f2f2;
    border-radius: var(--border-radius);
    img {
      border-radius: var(--border-radius-small);
    }

    .footer {
      background-color: lightgray;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;

      .label {
        color: white;
        padding: 3px;
        background: black;
        border-radius: 0.5rem;
      }
    }
  }
`;

export default Card;
