import './header.css'
import logo from '../logo/logo4.png'
import cover from '../logo/image.png'


function Header() {
  return (
    <div className='header'>
       <div className='logo'>
           <img className='logoImg' src={logo} alt=''/>
       </div>
       <img className='headerImg' src={cover} alt='' />
    </div>
  )
}

export default Header