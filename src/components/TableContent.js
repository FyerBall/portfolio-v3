import React from 'react'
import ProjectLinks from '../Helper/ProjectLinks'

// ? Leaving this out of archived projects
// import Icon from './Icon'

function TableContent({
  id,
  name,
  // libraryUrl,
  year,
  linkLive,
  linkSource,
  num,
}) {
  return (
    <div className='row' key={id}>
      <p className='number'>{num}</p>
      <p className='year'>{year}</p>
      <p className='title'>{name}</p>
      {/* <p className='built'>
        {libraryUrl.map((lib, _index) => (
          <Icon key={_index} icon={lib} alt='Built with' />
        ))}
      </p> */}
      <ul className='links-list'>
        <ProjectLinks live={linkLive} source={linkSource} />
      </ul>
    </div>
  )
}

export default TableContent
