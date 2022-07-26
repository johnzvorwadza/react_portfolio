import React, { useState } from 'react'
import Typed from 'react-typed'
import ContactMain from '../ContactMain';
import reactimage from '../img/skillsImages/react.png'
import cssimage from '../img/skillsImages/css.png'
import htmlimage from '../img/skillsImages/html.png'
import javascriptimage from '../img/skillsImages/javascript.png'
import phpimage from '../img/skillsImages/php.png'
import nodeimage from '../img/skillsImages/node.png'
import sqlimage from '../img/skillsImages/sql.png'
import bootstrapimage from '../img/skillsImages/bootstrap.png'


import javaimage from '../img/skillsImages/java.png'
import pythonimage from '../img/skillsImages/python.png'
import csharpimage from '../img/skillsImages/csharp.png'
import jqueryimage from '../img/skillsImages/jquery.png'
import Experience from './Experience';

function HomePage() {
  const [headerVisibilityMobile, setHeaderVisibilityMobile] = useState("false");

  function mobileMenu(e){
    if(headerVisibilityMobile === "true"){
      setHeaderVisibilityMobile("false");
    }else{
      setHeaderVisibilityMobile("true");
    }
    
  }
  
  return (
    <div>
    <i onClick={mobileMenu} className="bi bi-list mobile-nav-toggle d-xl-none"></i>

  <header vis={headerVisibilityMobile} id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="assets/img/john-7.jpeg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">John Zvorwadza</a></h1>
        <div className="social-links mt-3 text-center">
          <a target="_blank" href="https://github.com/johnzvorwadza" className="twitter"><i className="bx bxl-github"></i></a>
          <a target="_blank" href="https://linkedin.com/in/john-zvorwadza-b00b73235" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a target="_blank" href="https://www.instagram.com/johnzvorwadza/" className="instagram"><i className="bx bxl-instagram"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Curriculum Vitae
</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>John Zvorwadza</h1>
      <p>I'm a <Typed
                    strings={['full stack developer'
                    ,'passionate developer'
                    ,'dedicated team player'
                      ]}
                    typeSpeed={40}
                    loop
                /></p>
      
    </div>
  </section>

  <main id="main">

    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>Hi, I'm John a full stack developer with a passion for all things coding.</p>
          <p>I fell in love with coding since 2012 when I first discovered you could manipulate a web page with some HTML code,
          since then I have managed to teach my self multiple coding languages.</p>

        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/john-7.jpeg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>full stack developer.</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Newcastle, United Kingdom</span></li>
                </ul>
              </div>
              
            </div>
          <p>I recently completed a coding traineeship with IT&nbs;Career&nbs;Switch which has helped me to improve my coding skills and learn new coding concepts</p>
          </div>
        </div>

      </div>
    </section>
    
    <section id="skills" className="facts">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row no-gutters skills">

        <img className='skillsimage' src={reactimage}/>
        <img className='skillsimage' src={htmlimage}/>
        <img className='skillsimage' src={cssimage}/>
        <img className='skillsimage' src={javascriptimage}/>
        <img className='skillsimage' src={nodeimage}/>
        <img className='skillsimage' src={phpimage}/>
        <img className='skillsimage' src={sqlimage}/>

        <img className='skillsimage' src={bootstrapimage}/>
        <img className='skillsimage' src={jqueryimage}/>

        <img className='skillsimage' src={javaimage}/>
        <img className='skillsimage' src={csharpimage}/>
        <img className='skillsimage' src={pythonimage}/>   

        </div>

      </div>
    </section>
    
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row " data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-6 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap rounded border border-dark">
              <h3 className='p-1'>Company Directory</h3>
              <img src="https://johncode.co.uk/static/media/companydirectory.6e9eb6369f7b2b1f681a.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a target="_blank" href="https://johnzvorwadza.uk/IT/company-directory/" title="View Live Site"><i className="bx bx-link"></i></a>
              </div>
              <p className='p-1'>A company directory of employees with CRUD functionality, the user can Create / Edit / Delete employees from the database.</p>
            </div>
          </div>
          
          <div className="col-lg-6 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap rounded border border-dark">
              <h3 className='p-1'>Gazetteer</h3>
              <img src="https://johncode.co.uk/static/media/gazetteer.50240f0409f3144e5820.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a target="_blank" href="https://johnzvorwadza.uk/IT/gazetteer/" title="View Live Site"><i className="bx bx-link"></i></a>
              </div>
              <p className='p-1'>Gazetteer is a Mobile friendly app I built as an IT Switch Carrer project. Users can discover information about a country and its cities</p>
            </div>
          </div>

       

      </div>
      </div>
    </section>

    <Experience/>
    
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <ContactMain/>

      </div>

      

            
    </section>

  </main>

  <footer id="footer">
    <div className="container">
      <div className="credits">
        &copy; <a href="https://johncode.co.uk/">JohnCode.co.uk</a>
      </div>
    </div>
  </footer>

  <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}

export default HomePage