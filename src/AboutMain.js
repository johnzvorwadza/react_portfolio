import React from 'react'
import reactimage from './img/skillsImages/react.png'
import cssimage from './img/skillsImages/css.png'
import htmlimage from './img/skillsImages/html.png'
import javascriptimage from './img/skillsImages/javascript.png'
import phpimage from './img/skillsImages/php.png'
import nodeimage from './img/skillsImages/node.png'
import sqlimage from './img/skillsImages/sql.png'

function AboutMain() {
    return (<div id="about" className='aboutContainer'>
        <h1>About Me</h1>
        <div className='line'></div>
        <p>Hi I'm John a web developer with a passion for all things coding.</p>

        <p>I have experience with both front-end & back-end programming, I recently complited a coding traineeship with IT Carrer Swith</p>

        <p>During this traineeship I managed to improve on my coding knowledge, The traineeship was challenging at some points like when I had to learn to code in C#. I'm really glad I took this traineeship as I have now improved my skills in data structures and algorithms</p>

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