import React from 'react'
import githublogo from './img/github.png'
import weblogo from './img/web.png'

function Links( { link } ) {
   
        
  return (
  <div className='linksTab'>
      {link.github && (<a target="_blank" href={link.github}><img src={githublogo}/>&nbsp;&nbsp;Github</a>)}
      {link.web && <a target="_blank" href={link.web}><img src={weblogo}/>&nbsp;&nbsp;View Site</a>}
      
</div>
  )
}

export default Links