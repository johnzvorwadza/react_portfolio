import React from 'react'
import ContactMain from './ContactMain'
import Footer from './Footer'
import Header from './Header'

function ContactpageContainer() {
    return (<div className='container'>
    <Header currentpage="contact"/>
    <ContactMain/>
    <Footer/>
      
  </div>)
}

export default ContactpageContainer