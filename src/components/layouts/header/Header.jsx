import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='headerContents'>
         <ul>
            <li className='header-link_list'>
               <Link to="#"  className='header-link' id="header-link_contact">Contact us</Link>
            </li>
            <li className='header-link_list'>
               <Link to="#"  className='header-link' id="header-link_sign">Sign up</Link>
            </li>
         </ul>
      </div>
    </div>
  )
}

export default Header