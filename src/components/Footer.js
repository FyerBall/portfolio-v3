import React from 'react'
import Icon from './Icon'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
function Footer() {
  return (
    <div className='secondary'>
      {/* TODO: dynamic links  */}
      <h2>Footer</h2>
      <Icon Icon={FaGithub} link='google.com' />

      <Icon Icon={HiOutlineMail} />
    </div>
  )
}

export default Footer
