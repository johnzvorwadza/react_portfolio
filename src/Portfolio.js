import React from 'react'
import Links from './Links'
import shopgalaxyimage from './img/shopgalaxy.jpeg'
import redditminimalimage from './img/redditminimal.jpeg'
import shareimage from './img/share.jpeg'

function Portfolio() {
  return (
    <div className='portfolioGrid'>


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
            <img className='portfolioImg' src={shareimage}/>
            <div>
                <h2 style={{marginTop:20}}>Share - Express.js & Postgresql social media app </h2>
                <span>Skills used
                    <ul>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Postgresql</li>
                    </ul></span>
                <Links link={
                    {
                        'github':null
                        ,'web':null
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