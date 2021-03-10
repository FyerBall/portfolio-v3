// -[ ] A single page?
//    -> Hero -> CTA to Showcase
// -[ ] Contact
// -[ ] Resume embedded or downloadable
// -[ ] GitHub

import React from 'react'
import Archived from '../components/Archived'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Showcase } from './index'

function home() {
  return (
    <div>
      <Hero />
      <div className='container'>
        <Showcase />

        <div className='archived'>
          <Archived />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default home
