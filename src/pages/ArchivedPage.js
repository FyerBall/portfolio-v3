// TODO: DRY! CSS -> Archived js
import React from 'react'
import Icon from '../components/Icon'
import ProjectLinks from '../Helper/ProjectLinks'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useProjects } from '../context/projectContext'
import TableHeader from '../components/TableHeader'
import TableContent from '../components/TableContent'
import TableFooter from '../components/TableFooter'

function ArchivedPage() {
  const { archived } = useProjects()

  return (
    <Wrapper className=''>
      <TableHeader />
      {archived.map((project, i) => {
        const num = i + 1
        return <TableContent key={project.id} {...project} num={num} />
      })}
      <TableFooter />
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
    @media (max-width: 900px) {
      .header,
      .row {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
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

export default ArchivedPage
