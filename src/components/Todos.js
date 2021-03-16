import React from 'react'

// TODO AUTH -> Admin only
function Todos({ todo }) {
  let user = false

  if (!user) {
    return <h1>Log in</h1>
  }
  return (
    <div className=''>
      <p className=' content todos'>
        <input type='checkbox' name={todo} id='todo' /> {todo}
      </p>
    </div>
  )
}

export default Todos
