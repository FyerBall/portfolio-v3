// -[ ] A single page?
//    -> Hero -> CTA to Showcase
// -[ ] Contact
// -[ ] Resume embedded or downloadable
// -[ ] GitHub

import React from 'react'
import AboutMe from '../components/AboutMe'
import Archived from '../components/Archived'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Showcase } from './index'

function Home() {
  return (
    <div>
      <Hero />

      <div className='container'>
        {/* <AboutMe /> */}

        <Showcase />
        {/* TODO: Do you need to wrap them in a div? */}
        <div className='archived'>
          <Archived />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
