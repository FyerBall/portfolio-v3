import React, { useState } from 'react'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'
import styled from 'styled-components'
import Icon from '../components/Icon'

function Images() {
  const images = [
    {
      id: 1,
      image: 'http://via.placeholder.com/350x150/0000ff/808080',
    },
    {
      id: 2,
      image: 'http://via.placeholder.com/350x150/ff0000/ffffff',
    },
    {
      id: 3,
      image: 'http://via.placeholder.com/350x150',
    },
  ]
  // ? Main image??
  const [index, setIndex] = useState(0)
  const { image } = images[index]

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
          <Icon
            Icon={AiFillLeftCircle}
            color='766d6d'
            className=' left'
            click={preImage}
          />
          <Icon
            Icon={AiFillRightCircle}
            color='766d6d'
            className=' right'
            click={nextImage}
          />
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
    }
    .arrows {
      position: absolute;
      display: flex;
      width: 100%;
      top: 50%;
      bottom: 50%;
      align-items: center;
      justify-content: space-around;
      
      li {
         background: var(--secondary-color-light);
      }
      }

      svg {
        font-size: 2rem;
        cursor: pointer;
      }
    }
  }
`

export default Images
