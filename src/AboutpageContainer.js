import React from 'react'
import Footer from './Footer'
import Header from './Header'
import AboutMain from './AboutMain'

function AboutpageContainer() {
  return (<div className='container'>
      <Header currentpage="about"/>
      <AboutMain/>
      <Footer/>
        
    </div>)
}

export default AboutpageContainer