// TODO: FIX GALLERY

import React, { useState } from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import styled from 'styled-components'
import Icon from '../components/Icon'

function Images({ images }) {
  let url = images.map(({ url }) => url)

  const [index, setIndex] = useState(0)
  const image = url[index]

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
    setIndex((index) => {
      let newIndex = index - 1
      return checkLength(newIndex)
    })
  }

  const nextImage = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkLength(newIndex)
    })
  }
  return (
    <Wrapper className='images'>
      <h2 className='title'>images</h2>
      <div className='images-container'>
        <img src={image} alt='' />
        <div className='arrows'>
          <AiFillLeftCircle className=' left' onClick={preImage} />
          <AiFillRightCircle className=' right' onClick={nextImage} />
        </div>
        <div className='image__gallery'>
          {images.map(({ url }, index) => (
            <img key={index} src={url} alt='' />
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

    img {
      display: block;
      margin: auto;
      width: 50%;
      border-radius: var(--radius);
      height: 600px;
    }
    .arrows {
      position: absolute;
      display: flex;
      width: 100%;
      top: 50%;
      bottom: 50%;
      align-items: center;
      justify-content: space-around;
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

  .image__gallery {
    margin-top: 1rem;

    display: flex;
    justify-content: center;

    img {
      height: 100px;
      width: 100px;
      cursor: pointer;
      margin: 0 10px;
    }
  }
  @media (max-width: 820px) {
    .images-container {
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
