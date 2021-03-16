import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Images from '../components/Images'
// import { FaReact } from 'react-icons/fa'
import Todos from '../components/Todos'
import { FaGithub } from 'react-icons/fa'
import axios from 'axios'
// import FigmaLogo from '../assets/FigmaLogo.svg'
import Highlighter from 'react-highlight-words'
import Loading from '../components/Loading'
import { FaCheckCircle } from 'react-icons/fa'
import githubLogo from '../assets/github.svg'
import ProjectLinks from '../Helper/ProjectLinks'

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
    return <Loading />
  }

  const { fields } = project
  const {
    name,
    desc,
    image,
    library,
    link,
    details,
    libraryInfo,
    todos,
  } = fields
  // TODO
  let filename = library.map((item) => item)

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
            {library.map(({ filename, url, id }) => {
              return <Icon icon={url} alt={filename} key={id} />
            })}
          </ul>

          {/* TODO: Lines are repeating */}
          <div className='lib-info'>
            {library.map(({ filename, id }) => {
              let words = filename.split('.')[0]
              return (
                <Highlighter
                  highlightClassName='highlight'
                  searchWords={[words]}
                  autoEscape={true}
                  textToHighlight={libraryInfo}
                  key={id}
                />
              )
            })}
          </div>
        </div>
        {/* TODO: Todo app-ish with Admin access for marking off completed tasks */}
        {/* TODO: Todo container and todo items + auth to access the item and mark them as done?? */}
        <div className='todo description'>
          <h2 className='title '>Next Steps</h2>
          {todos && todos.length > 0 ? (
            todos.map((item, _id) => <Todos todo={item} key={_id} />)
          ) : (
            <p className='content todos'>
              <FaCheckCircle /> Completed
            </p>
          )}
        </div>

        <div className='links description'>
          <h2 className='title'>Links</h2>
          {/* TODO: DRY - Footer has one */}
          {/* TODO: Hover issue */}

          {/* <Icon icon={githubLogo} alt='Github' link='www.google.com/' /> */}
          <ProjectLinks links={link} />
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
    border-bottom-right-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
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

  .libs {
    margin-bottom: 3rem;

    .icons {
      display: flex;
      & > * {
        margin-right: 10px;
        margin-bottom: 1rem;
        cursor: pointer;
      }
    }

    .lib-info {
      /* TODO: that seems too hight for this font! BETTER FONT??? */
      line-height: 275%;
    }
  }

  .highlight {
    background-color: var(--primary-color);
    color: var(--secondary-color-light);
    padding: 0 3px;
    border-radius: var(--radius-small);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }

  .todo {
    .todos {
    }
    svg {
      color: green;
    }
  }
`
export default SingleProject
