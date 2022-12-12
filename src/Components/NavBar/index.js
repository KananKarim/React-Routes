import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import Img from '../../Pages/Img/download (1).svg'


const Navbar = () => {
  return (
    <div>
       
            <nav>
            <img src={Img} />
                <ul>
                   <Link to="/about"><li>About</li></Link> 
                   <Link to="/experience"><li>Experience</li></Link> 
                   <Link to="/contact"><li>Contact</li></Link> 
                </ul>
            </nav>
       
    </div>
  )
}

export default Navbar