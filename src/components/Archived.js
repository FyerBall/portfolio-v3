// TODO: DRY! CSS -> Archived Page
import React from 'react'
import styled from 'styled-components'
import { useProjects } from '../context/projectContext'
import TableContent from './TableContent'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'

function Archived() {
  const { archived } = useProjects()
  return (
    <Wrapper className='section'>
      <h1 className='title-primary'>Archived</h1>

      <TableHeader />
      {archived
        .map((project, i) => {
          const num = i + 1
          return <TableContent key={project.id} {...project} num={num} />
        })
        .splice(0, 3)}

      <TableFooter />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .header,
  .row {
    display: grid;

    grid-template-columns: 45px 80px 1fr 1fr;

    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    padding: 5px 0;
    margin-bottom: 5px;
    color: var(--primary-color);
    align-items: center;
    text-align: center;
    border-radius: var(--radius-small);
    border: 2px solid var(--primary-color-light);
  }

  .title {
    width: 100%;
    height: 100%;
    align-items: center;
    margin: auto;
    padding: 10px 7px;
  }

  .links-list,
  .built {
    display: flex;
    justify-content: center;
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
      display: flex;
      flex-direction: column;
      align-items: center;
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

export default Archived
