import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Archived() {
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
    <Wrapper className='section'>
      <h1 className='title'>Archived</h1>
      <table>
        <thead className='header'>
          <tr>
            <th>Number</th>
            <th>Year</th>
            <th>Title</th>
            <th>Built With</th>
            <th>Links</th>
          </tr>
        </thead>
        {tempProjects.splice(0, 2).map(({ id, year, title, built, links }) => (
          <tbody className='content' key={id}>
            <tr>
              <td className='number'>#{id}</td>
              <td className='year'>{year}</td>
              <td className='title'>{title}</td>
              <td className='built'>
                <ul className=''>
                  <li className='lib'>icon</li>
                  <li className='lib'>icon</li>
                  <li className='lib'>icon</li>
                </ul>
              </td>
              <td className='links'>
                <ul className=''>
                  <li className='link'>Source</li>
                  <li className='link'>Live</li>
                </ul>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Link to='/archived'>See more</Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .title {
    text-align: center;
  }
  table {
    margin: 1rem auto;
    width: 100%;
    text-align: center;
    background-color: lightgoldenrodyellow;
    border-radius: var(--radius);
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  button {
    margin: 0 auto;
    display: block;
  }
`

export default Archived
