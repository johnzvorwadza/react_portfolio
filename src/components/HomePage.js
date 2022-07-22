import React, { useState } from 'react'
import Typed from 'react-typed'
import ContactMain from '../ContactMain';

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
        <img src="assets/img/john-5.jpeg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">John Zvorwadza</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="https://github.com/johnzvorwadza" className="twitter"><i className="bx bxl-github"></i></a>
          <a href="https://linkedin.com/in/john-zvorwadza-b00b73235" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          <a href="https://www.instagram.com/johnzvorwadza/" className="instagram"><i className="bx bxl-instagram"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>John Zvorwadza</h1>
      <p>I'm <Typed
                    strings={['Full-stack Developer'
                    ,'Passionate Developer'
                    ,'Dedicated Team Player'
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
          <p>Hi, I'm John a full-stack developer with a passion for all things coding.</p><br/>
          <p>I fell in love with coding since 2012 when I first discovered you could manipulate a web page with some HTML code,
          since then I have managed to teach my self multiple coding languages.</p><br/>
          <p>I recently complited a coding traineeship with IT CARRER SWITCH 
          on which I have helped improved my coding skills and learn new coding concepts.</p>

        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="assets/img/john-5.jpeg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full-stack Developer.</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>28 October 1994</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>johncode.co.uk</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Newcastle, United Kingdom</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>28</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    
    <section id="skills" className="facts">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row no-gutters">

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
            <div className="count-box">
            <i className="bx bxl-php"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="count-box">
              <i className="bi bi-filetype-js"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="count-box">
              <i className="bi bi-filetype-css"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="count-box">
              <i className="bi bi-filetype-html"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="count-box">
              <i className="bi bi-filetype-sql"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="count-box">
            <i className="bx bxl-react"></i>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="count-box">
            <i className="bx bxl-nodejs"></i>
            </div>
          </div>

        </div>

      </div>
    </section>
    
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="https://johncode.co.uk/static/media/companydirectory.6e9eb6369f7b2b1f681a.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="https://johnzvorwadza.uk/IT/company-directory/" title="View Live Site"><i className="bx bx-link"></i></a>
              </div>
              <h3>Company Directory</h3>
              <p>A company directory of employees with CRUD functionality, the user can Create / Edit / Delete employees from the database. 
              I used PHP for the server side. MYSQL for the database and HTML, CSS & JAVASCRIPT. 
              I also used BootStrap to help me speed the design of the application</p>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="https://johncode.co.uk/static/media/gazetteer.50240f0409f3144e5820.jpeg" className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="https://johnzvorwadza.uk/IT/gazetteer/" title="View Live Site"><i className="bx bx-link"></i></a>
              </div>
              <h3>Gazetteer</h3>
              <p>Gazetteer is a Mobile friendly app I built as an IT Switch Carrer project. Users can discover basic information about a country and its cities</p>
            </div>
          </div>

       

      </div>
      </div>
    </section>
    
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