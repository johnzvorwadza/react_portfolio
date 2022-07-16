import React from 'react'
import Links from './Links'
import shopgalaxyimage from './img/shopgalaxy.jpeg'
import redditminimalimage from './img/redditminimal.jpeg'
import gazetteerimage from './img/gazetteer.jpeg'
import companydirectoryimage from './img/companydirectory.jpeg'


function Portfolio() {
  return (
    <div className='portfolioGrid'>


<div className='portfolio'>
            <img className='portfolioImg' src={gazetteerimage}/>
            <div>
                <h2 style={{marginTop:20}}>Gazzeetter</h2>
                <span>Gazetteer is a Mobile friendly app I built as an IT Switch Carrer project.
                    Users can discover basic information about a country and its cities.
                    <h5>HTML, CSS, JAVASCRIPT, PHP AND LEAFLET JS</h5></span>
                <Links link={
                    {
                        'github':null
                        ,'web':"https://johnzvorwadza.uk/IT/gazzeetter/"
                     }
                }
                />
            </div>
        </div>


        <div className='portfolio'>
            <img className='portfolioImg' src={companydirectoryimage}/>
            <div>
                <h2 style={{marginTop:20}}>Company Directory</h2>
                <span>A company directory of employees with CRUD functionality, the user can Create / Edit / Delete employees from the database. I used PHP for the server side. MYSQL for the database and HTML, CSS & JAVASCRIPT. I also used BootStrap to help me speed the design of the application.
                    <h5>PHP, MYSQL, HTML, CSS, JAVASCRIPT</h5></span>
                <Links link={
                    {
                        'github':null
                        ,'web':"https://johnzvorwadza.uk/IT/company-directory/"
                     }
                }
                />
            </div>
        </div>




        <div className='portfolio'>
            <img className='portfolioImg' src={shopgalaxyimage}/>
            <div>
                <h2 style={{marginTop:20}}>ShopGalaxy - Ecommerce Website</h2>
                <span>An online store build  in node using React.js, Express.js and Postgresql. For this project I used Stripe Api for payments, I do plan on adding an option to allow customers to pay with Apple pay and Google pay as well.</span>
                <Links link={
                    {
                        'github':null
                        ,'web':"https://shopgalaxyfrontend.herokuapp.com/"
                     }
                }
                />
            </div>
        </div>

        
        <div className='portfolio'>
            <img className='portfolioImg' src={redditminimalimage}/>
            <div>
                <h2 style={{marginTop:20}}>Reddit Minimal - React / Redux App </h2>
                <span>A web app that uses Reddit .json Api to fetch post from reddit. 
                    On this project I used Redux for state management 
                    and Axios for fetching the data from the web.
                    I also used React useEffect function during the project</span>
                <Links link={
                    {
                        'github':'https://github.com/johnzvorwadza/redditminimal'
                        ,'web':"https://johnzvorwadza.github.io/redditminimal/"
                     }
                }
                />
            </div>
        </div>

        

        
    </div>
  )
}

export default Portfolio