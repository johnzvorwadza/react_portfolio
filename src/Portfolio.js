import React from 'react'
import Links from './Links'
import tictactoeimage from './img/tictactoe.jpeg'
import redditminimalimage from './img/redditminimal.jpeg'
import shareimage from './img/share.jpeg'

function Portfolio() {
  return (
    <div className='portfolioGrid'>


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

         <div className='portfolio'>
            <img className='portfolioImg' src={tictactoeimage}/>
            <div>
                <h2 style={{marginTop:20}}>Tic-Tac-Toe - React.js</h2>
                <span>A simple Tic Tac Toe game made with React, 
                    I used the Grid layout to design the game board. 
                    In the project I used useState function to store and share variables between components</span>
                <Links link={
                    {
                        'github':'https://github.com/johnzvorwadza/tictactoe'
                        ,'web':"https://johnzvorwadza.github.io/tictactoe/"
                     }
                }
                />
            </div>
        </div>

        
    </div>
  )
}

export default Portfolio