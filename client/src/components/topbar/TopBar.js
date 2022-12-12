import React from 'react'
import './TopBar.css'
// import logo from '../logo/logo4.png'
import profile from '../logo/thor.webp'
import {Link} from 'react-router-dom'

function TopBar() {
  return (
    <div className='top'>
       <div className='topLeft'>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" >
            LOGOUT
          </li>
        </ul>
      </div>
       <div className='topRight'>
            <img className='topImg' src={profile} alt=''/>
            <i className="topSearchIcon fas fa-search"></i>
       </div>
    </div>
  )
}

export default TopBar