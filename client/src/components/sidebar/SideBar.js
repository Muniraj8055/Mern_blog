import React, { useState } from 'react'
import './sidebar.css'
import profile from '../logo/jpg.jpeg'
import axios from 'axios'
import { Link } from 'react-router-dom'

function SideBar() {

     const [cats,setCats] = useState([])

     useState(()=>{
          const getCats = async ()=>{
               const res = await axios.get('/categories')
               setCats(res.data)
          }
          getCats()
     },[])

  return (
    <div className='sidebar'>
       <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img className='userPic' src={profile} alt=''/>
            <p>
                I am a movie buff and I will review all the movies of different languages.
                I also intrested in script writing and I have youtube channel please subsribe. 
            </p>
       </div>
       <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
               {
                    cats.map((c)=>(
                         <Link to={`/?cat=${c.name}`} className='link'>
                              <li className='sidebarListItem'>{c.name}</li>
                         </Link>
                    ))
               } 
            </ul>
       </div>
       <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            </div>
       </div>
    </div>
  )
}

export default SideBar