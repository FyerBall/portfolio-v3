import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Images from '../components/Images'
import { FaReact } from 'react-icons/fa'
import Todos from '../components/Todos'
import { FaGithub } from 'react-icons/fa'
import FigmaLogo from '../assets/FigmaLogo.svg'

function SingleProject() {
  return (
    <Wrapper className='container section'>
      <header className='header'>
        <h1>
          <Link to='/'>Portfolio</Link> / project name
        </h1>
      </header>
      {/* Overview */}
      <section>
        <div className='overview'>
          <h2 className='title '>overview</h2>
          <p className='description content'>
            desc for the app. Chat app where Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Nesciunt ab dignissimos omnis neque,
            facere eaque iste consequatur alias sunt. Enim!
          </p>
          <Images />
        </div>

        <div className='details'>
          <h2 className='title '>Details - What I did</h2>
          <p className='description content'>
            What I did and how got to where it is now. Used context to? reusable
            components. more technical
          </p>
        </div>

        <div className='libs'>
          <h2 className='title '>What I used</h2>
          <ul className='icons'>
            <li className='icon content'>
              <Icon Icon={FaReact} color='61dcfc' />
              <p className='info'>
                React for the front end and I used hooks to manage the state and
                fetch items
              </p>
            </li>
            <li className='icon content'>
              {' '}
              <Icon Icon={FaReact} color='61dcfc' />
              <p className='info'>
                I used Firebase as a back end to store data
              </p>
            </li>
            <li className='icon content'>
              <Icon Icon={FaReact} color='61dcfc' />
              <p className='info'>Figma to Design in it</p>
            </li>
            <li className='icon content'>
              {' '}
              <Icon Icon={FaReact} color='61dcfc' />
              <p className='info'>Github to Design in it</p>
            </li>
          </ul>
        </div>

        {/* TODO: Todo app-ish with Admin access for marking off completed tasks */}
        <Todos />

        <div className='links'>
          <h2 className='title'>Links</h2>
          {/* TODO: DRY - Footer has one */}
          <Icon Icon={FaGithub} color='lightcoral' link='google.com' />
          <Icon Icon={FaGithub} color='lightcoral' />
          <Icon image={FigmaLogo} />

          {/* <Link to='/live'>Live</Link>
          <Link to='/live'>source</Link> */}
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  line-height: var(--line-height);
  .header {
    margin-bottom: 3rem;
  }
  .description {
    margin-bottom: 3rem;
  }
  .icons {
    .icon {
      display: flex;
      align-items: center;
    }
  }
`
export default SingleProject
