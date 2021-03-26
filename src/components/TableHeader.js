import React from 'react'

function TableHeader() {
  return (
    <div className='header'>
      <h2 className='title number'>#</h2>
      <h2 className='title year'>year</h2>
      <h2 className='title title'>Title</h2>
      {/* <h2 className='title built'>Built with</h2> */}
      <h2 className='title links'>links</h2>
    </div>
  )
}

export default TableHeader
