import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

function HomepageContainer() {
  return (<div className='container'>
      <Header currentpage=""/>
      <Main/>
      <Footer/>
        
    </div>)
}

export default HomepageContainer