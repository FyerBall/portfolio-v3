// TODO: FIX GALLERY

import React, { useState } from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import styled from 'styled-components'

function Images({ images }) {
  let url = images.map(({ url }) => url)
  let filename = images.map(({ filename }) => filename)

  const [main, setMain] = useState(0)
  const image = url[main]

  const checkLength = (num) => {
    if (num > images.length - 1) {
      return 0
    }
    if (num < 0) {
      return images.length - 1
    }
    return num
  }

  const preImage = () => {
    setMain((index) => {
      let newIndex = index - 1
      return checkLength(newIndex)
    })
  }

  const nextImage = () => {
    setMain((index) => {
      let newIndex = index + 1
      return checkLength(newIndex)
    })
  }
  return (
    <Wrapper className='images'>
      <h2 className='title'>images</h2>
      <div className='images-container'>
        <h4 className='filename'>
          {filename[main].split('.')[0].split('-').join(' ')}
        </h4>
        <img src={image} alt='' />
        <div className='arrows'>
          <AiFillLeftCircle className=' left' onClick={preImage} />
          <AiFillRightCircle className=' right' onClick={nextImage} />
        </div>
        <div className='gallery'>
          {images.map(({ url }, index) => (
            <img
              key={index}
              src={url}
              alt=''
              onClick={() => setMain(index)}
              className={`${url === image ? 'active' : null} `}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 3rem;

  .title {
    text-transform: capitalize;
  }
  .images-container {
    position: relative;

    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin: auto;
    img {
      /* display: block;
      margin: auto;
      width: 50%;
      border-radius: var(--radius);
      */
      max-height: 500px;

      width: 100%;
      display: block;
      border-radius: var(--radius);
      object-fit: contain;
    }

    .filename {
      text-align: center;
    }
    .arrows {
      position: absolute;
      display: flex;
      width: 106%;
      top: 50%;
      bottom: 50%;
      transform: translate(-3%, 0%);
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      .left,
      .right {
        color: #766d6d;
        height: 2rem;
        width: 2rem;
        background-color: var(--white);
        border-radius: var(--radius-small);
        transition: var(--transition);

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .gallery {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;

    img {
      height: 100px;
      width: 100px;
      cursor: pointer;
      margin: 0 10px;
    }
  }

  .active {
    border: 1px solid var(--primary-color-light);
    padding: 1px;
  }
  @media (max-width: 820px) {
    .images-container {
      width: 100%;
      img {
        width: 100%;
      }
      .arrows {
        visibility: hidden;
      }
    }
  }
`

export default Images
