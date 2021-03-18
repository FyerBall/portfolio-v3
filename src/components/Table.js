// TODO:
// -[] Year and num can be smaller
// -[] Title takes full width and truncated
// ? Responsiveness
// -[] Num and year shouldn't be visible in smaller screens
//

import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Table() {
  let tempProjects = [
    {
      id: 1,
      year: 2020,
      title: 'Lorem ipsum dolor sit amet.1',
      built: {
        react: 'React',
        firebase: 'firebase',
        styled: 'styled',
      },
      links: {
        source: 'google.com',
        live: 'google.com',
      },
    },
    {
      id: 2,
      year: 2021,
      title: 'Lorem ipsum dolor sit amet.2',
      built: {
        icon: 'icon',
        icon2: 'icon',
        icon3: 'icon',
      },
      links: {
        source: 'google.com',
        live: 'google.com',
      },
    },
    {
      id: 3,
      year: 2021,
      title: 'Lorem ipsum dolor sit amet.3',
      built: {
        icon: 'icon',
        icon2: 'icon',
        icon3: 'icon',
      },
      links: {
        source: 'google.com',
        live: 'google.com',
      },
    },
  ]
  return (
    <Grid>
      <div className='header'>
        <h2 className='title number'>#</h2>
        <h2 className='title year'>year</h2>
        <h2 className='title title'>Title</h2>
        <h2 className='title built'>Built with</h2>
        <h2 className='title links'>links</h2>
      </div>

      {tempProjects.map(({ id, year, title, built, links }) => {
        return (
          <div className='row' key={id}>
            <p className='number'>{id}</p>
            <p className='year'>{year}</p>
            <p className='title'>{title}</p>

            <p className='built'>React Firebase</p>
            <ul className='links-list'>
              <li>links</li>
              <li>links</li>
              <li>links</li>
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
    grid-template-columns: 45px 80px 1fr 1fr 1fr;

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

  .links-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
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
