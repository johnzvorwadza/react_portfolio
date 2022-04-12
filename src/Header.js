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
            <li><NavLink className={`name ${page[0]}`} to='/'>John Zvorwadza</NavLink></li>
            <li><NavLink className={page[1]}to='/about'>About</NavLink></li>
            <li><NavLink className={page[2]}to='/contact'>Contact</NavLink></li>
        </ul>
    </div>
  )
}

export default Header