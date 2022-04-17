import React from 'react'
import reactimage from './img/skillsImages/react.png'
import cssimage from './img/skillsImages/css.png'
import htmlimage from './img/skillsImages/html.png'
import javascriptimage from './img/skillsImages/javascript.png'
import phpimage from './img/skillsImages/php.png'
import nodeimage from './img/skillsImages/node.png'
import sqlimage from './img/skillsImages/sql.png'

function AboutMain() {
    return (<div className='aboutContainer'>
        <h1>About Me</h1>
        <div className='line'></div>
        <p>Hi I'm John a web developer from Staines, Surrey with a passion for all things coding.</p>

        <p>I have a fair bit of experience with the usual front-end tools like React 
            and Redux I'm constantly looking to improve on that knowledge base.</p>

        <p>Throughout my journey as a web developer I've been constantly impressed by how much you can achieve with just a little extra technical knowledge. 
            When I first started using React.js, I used to pass multiple props to components to achive the results I wanted 
            but after learning a bit of redux and redux toolkit I realised that there was an easier way of managing states and I have been using that method since.
            Because of this, my code is now easier to read and it's easier to manage as well.</p>

        <p>I'm also constantly trying to improve those technical skills not just by creating side projects but taking a serious academic approach to learning fundamental concepts like data structures and algorithms.</p>

        <p>I spend a fair amount of my free time working on side projects but my other interests include going to the gym and playing games.</p>
        <img className='skillsimage' src={reactimage}/>
        <img className='skillsimage' src={htmlimage}/>
        <img className='skillsimage' src={cssimage}/>
        <img className='skillsimage' src={javascriptimage}/>
        <img className='skillsimage' src={phpimage}/>
        <img className='skillsimage' src={nodeimage}/>
        <img className='skillsimage' src={sqlimage}/>


        </div>)
}

export default AboutMain