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
import NavBanner from '../components/NavBanner'

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
    linkLive,
    linkSource,
    libraryInfo,
    todos,
  } = fields

  // TODO
  let filename = library.map(({ filename }) =>
    filename.split('.')[0].split('-').join(' ')
  )

  return (
    <Wrapper className='container '>
      <NavBanner name={name} />
      {/* Overview */}
      <section>
        <div className='overview'>
          <h2 className='title '>overview</h2>
          <p className='description content'>{desc}</p>
          <Images images={image} />
        </div>

        <div className='libs'>
          <h2 className='title '>Built with</h2>
          <ul className='icons'>
            {library.map(({ filename, url, id }) => {
              return <Icon icon={url} alt={filename} key={id} />
            })}
          </ul>

          <div className='lib-info'>
            <Highlighter
              highlightClassName='highlight '
              searchWords={filename}
              autoEscape={true}
              textToHighlight={libraryInfo}
            />
          </div>
        </div>
        <div className='todo description'>
          <h2 className='title '>Next Steps</h2>

          <p className='content todos'>
            <a href={linkSource} target='_blank' rel='noreferrer'>
              Check the repo for what I might do next
            </a>
            <br />
          </p>
        </div>

        <div className='links description'>
          <h2 className='title'>Links</h2>
          <ProjectLinks live={linkLive} source={linkSource} />
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  line-height: var(--line-height);

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
`
export default SingleProject
