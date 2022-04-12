import React from 'react'
import Links from './Links'
import tictactoeimage from './img/tictactoe.jpeg'

function Portfolio() {
  return (
    <div className='portfolioGrid'>
        
        <div>
            <img className='portfolioImg' src={tictactoeimage}/>
            <div>
                <h3>Tic-Tac-Toe - React.js</h3>
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