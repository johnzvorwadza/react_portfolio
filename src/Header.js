import React from 'react'
import { NavLink } from 'react-router-dom';

function Header(props) {
  let currentpage = props.currentpage;

  let page = ['','',''];
  if(currentpage == 'contact'){
    page[2] = "selectedpage";
  }else if(currentpage == 'about'){
    page[1] = "selectedpage";
  }else{
    page[0] = "selectedpage";
  }

  return (
    <div className='header'>
        <ul>
            <li><a className={`name ${page[0]}`} href='#portfolio'>John Zvorwadza</a></li>
            <li><a className={page[1]}href='#about'>About</a></li>
            <li><a className={page[2]}href='#contact'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Header