import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import AboutMain from './AboutMain'
import ContactMain from './ContactMain'

function HomepageContainer() {
  return (<div className='container'>
      <Header currentpage=""/>
      <Main/>
      <br/><br/>
      <AboutMain/>
      <br/><br/>
      <ContactMain/>
      <Footer/>
        
    </div>)
}

export default HomepageContainer