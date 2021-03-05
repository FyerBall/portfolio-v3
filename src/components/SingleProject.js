import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai'

function SingleProject() {
  return (
    <Wrapper className='container'>
      <header>
        <h1>
          <Link to='/showcase'>Portfolio</Link> / project name
        </h1>
      </header>
      {/* Overview */}
      <section>
        <div className='overview'>
          <h2 className='title '>overview</h2>
          <p className='description'>
            desc for the app. Chat app where Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nesciunt ab dignissimos omnis neque,
            facere eaque iste consequatur alias sunt. Enim!
          </p>
          <div className='images'>
            <h2 className='title'>images</h2>
            <div className='images-container'>
              <img src='http://via.placeholder.com/350x150' alt='' />
              <div className='arrows'>
                <AiFillLeftCircle className=' left' />
                <AiFillRightCircle className='right' />
              </div>
            </div>
          </div>
        </div>

        <div className='details'>
          <h2 className='title '>Details - What I did</h2>
          <p className='description'>
            What I did and how got to where it is now. Used context to? reusable
            components. more technical
          </p>
        </div>

        <div className='libs'>
          <h2 className='title '>What I used</h2>
          <ul className='icons'>
            <li className='icon'>React js</li>
            <li className='icon'>Firebase</li>
            <li className='icon'>Figma</li>
            <li className='icon'>Git</li>
          </ul>
        </div>

        <div className='todos'>
          <h2 className='title '>todos</h2>
          <p className='description'>
            next steps, if any, to mark the app as complete
          </p>
        </div>

        <div className='links'>
          <Link to='/live'>Live</Link>
          <Link to='/live'>source</Link>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .images {
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

        svg {
          font-size: 2rem;
          cursor: pointer;
        }
      }
    }
  }
`
export default SingleProject
