// TODO:
// -[] Year and num can be smaller
// -[] Title takes full width and truncated
// ? Responsiveness
// -[] Num and year shouldn't be visible in smaller screens
//

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProjects } from '../context/projectContext'
import ProjectLinks from '../Helper/ProjectLinks'
import Icon from './Icon'

function Table() {
  const { archived } = useProjects()
  return (
    <Grid>
      <div className='header'>
        <h2 className='title number'>#</h2>
        <h2 className='title year'>year</h2>
        <h2 className='title title'>Title</h2>
        <h2 className='title built'>Built with</h2>
        <h2 className='title links'>links</h2>
      </div>

      {archived.map((project, i) => {
        const { id, name, libraryUrl, year, linkLive, linkSource } = project

        console.log(project)
        const num = i + 1
        return (
          <div className='row' key={id}>
            <p className='number'>{num}</p>
            <p className='year'>{year}</p>
            <p className='title'>{name}</p>
            <p className='built'>
              {libraryUrl.map((lib, _index) => (
                <Icon key={_index} icon={lib} alt='Built with' />
              ))}
            </p>
            <ul className='links-list'>
              <ProjectLinks live={linkLive} source={linkSource} />
            </ul>
          </div>
        )
      })}

      <div className='footer'>
        <Link to='/archived' className='more btn btn-primary'>
          see more
        </Link>
      </div>
    </Grid>
  )
}

const Grid = styled.div`
  position: relative;
  padding: 1rem;
  border-radius: var(--radius);

  /*  */
  background: var(--background-color);
  box-shadow: 20px 20px 60px var(--shadow-bottom),
    -20px -20px 60px var(--shadow-top);
  /*  */
  .header,
  .row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    grid-template-columns: 45px 80px 2fr 1fr 200px;
    padding: 5px 0;
    margin-bottom: 5px;
    color: var(--primary-color);
    align-items: center;
    text-align: center;
    border-radius: var(--radius-small);
    border: 2px solid var(--primary-color-light);
    /* background: var(--white); */
  }

  .header {
    /* background-color: var(--primary-color-light); */

    .title {
      width: 100%;
      height: 100%;
      align-items: center;
      margin: auto;
      padding: 10px 7px;
    }
  }

  .row {
    .title {
      /* background-color: red; */
      /* white-space: nowrap; */
    }
  }

  .links-list,
  .built {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin: 0 1px;
    }
  }

  .footer {
    text-align: center;
    .more {
      margin-top: 10px;
    }
  }

  @media (max-width: 900px) {
    .header,
    .row {
      grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    }

    .number,
    .year {
      display: none;
    }
  }
  @media (max-width: 750px) {
    .links-list {
      flex-direction: column;
    }
  }
`

export default Table
