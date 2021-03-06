import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '../components/Icon'
import Images from '../components/Images'

import axios from 'axios'
import Highlighter from 'react-highlight-words'
import Loading from '../components/Loading'

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  section {
    padding: 1rem;
  }
  .description {
    margin-bottom: 3rem;
    color: #05254b;
  }

  .libs {
    margin-bottom: 3rem;
    font-size: 1.2rem;
    .icons {
      display: flex;
      & > * {
        margin-right: 10px;
        margin-bottom: 1rem;
        cursor: pointer;
      }
    }

    .lib-info {
      line-height: 275%;
      font-family: 'Spectral', serif;
      color: #3b8ff2;
    }
  }
`
export default SingleProject
