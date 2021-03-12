import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Images from '../components/Images'
import { FaReact } from 'react-icons/fa'
import Todos from '../components/Todos'
import { FaGithub } from 'react-icons/fa'
import axios from 'axios'
// import FigmaLogo from '../assets/FigmaLogo.svg'

function SingleProject() {
  const { projectId } = useParams()
  const [loading, setLoading] = useState(true)
  const [project, setProject] = useState()

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`/api/projects?id=${projectId}`)
      setProject(data)
    } catch (error) {}
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
    return () => {}
  }, [])

  if (loading) {
    return <h1>Loading...</h1>
  }

  const { fields } = project
  const { name, desc, image, link, details } = fields

  return (
    <Wrapper className='container '>
      <header className='nav'>
        <h1>
          <Link to='/'>Portfolio</Link> / {name}
        </h1>
      </header>
      {/* Overview */}
      <section>
        <div className='overview'>
          <h2 className='title '>overview</h2>
          <p className='description content'>{desc}</p>
          <Images images={image} />
        </div>

        <div className='details'>
          <h2 className='title '>Details - What I did</h2>
          <p className='description content'>{details}</p>
        </div>

        <div className='libs'>
          <h2 className='title '>What I used</h2>
          <ul className='icons'>
            <li className='icon content'>
              <FaReact style={{ color: '#61dcfc' }} />
              <p className='info'>
                React for the front end and I used hooks to manage the state and
                fetch items
              </p>
            </li>
            <li className='icon content'>
              <FaReact style={{ color: '#61dcfc' }} />

              <p className='info'>
                I used Firebase as a back end to store data
              </p>
            </li>
            <li className='icon content'>
              <FaReact style={{ color: '#61dcfc' }} />
              <p className='info'>Figma to Design in it</p>
            </li>
            <li className='icon content'>
              <FaReact style={{ color: '#61dcfc' }} />
              <p className='info'>Github to Design in it</p>
            </li>
          </ul>
        </div>

        {/* TODO: Todo app-ish with Admin access for marking off completed tasks */}
        <Todos />

        <div className='links'>
          <h2 className='title'>Links</h2>
          {/* TODO: DRY - Footer has one */}
          {/* TODO: Hover issue */}
          <Icon Icon={FaGithub} color='lightcoral' link='google.com' />
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  line-height: var(--line-height);
  .nav {
    margin-bottom: 3rem;
    background-color: var(--primary-color-light);
    color: var(--secondary-color);
    padding: 2rem;
    a {
      transition: var(--transition);

      &:hover {
        letter-spacing: var(--spacing);
      }
    }
  }
  .description {
    margin-bottom: 3rem;
  }
  .icons {
    .icon {
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 15px;
      font-size: 2rem;
    }
  }

  .libs {
    margin-bottom: 3rem;
  }
`
export default SingleProject
