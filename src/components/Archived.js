import React, { useState } from 'react'
import styled from 'styled-components'
import { useProjects } from '../context/projectContext'

import SmallCard from './SmallCard'

function Archived() {
  const { archived } = useProjects()
  const [visible, setVisible] = useState(4)
  const length = archived.length

  const showMore = () => {
    setVisible(length > visible && visible + 3)
  }
  return (
    <Wrapper className='section'>
      <h1 className='title title-primary'>Projects</h1>

      <article>
        {archived
          .map((project) => {
            return (
              <div key={project.id}>
                <SmallCard {...project} />
              </div>
            )
          })
          .slice(0, visible)}
      </article>
      <button
        className='btn btn__primary-center'
        onClick={showMore}
        disabled={visible >= length && true}
      >
        {visible >= length ? 'no more to show' : 'show more'}
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 5rem;
  padding: 1rem;
  article {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
  }

  button {
    margin: 3rem auto;
  }
`

export default Archived
