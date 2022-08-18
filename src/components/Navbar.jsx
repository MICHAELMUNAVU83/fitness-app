import React  from 'react'
import logo from "../images/logos.png"
import {Link} from "react-router-dom"



const Navbar = () => {

  return (
    <div>
        <nav>
            <Link to="/">
            <img className="logo" src={logo} alt="logo" />

            </Link>
            <Link className="navlink" to="/">Home</Link>
            <Link className ="navlink" to="/rooms">Houses</Link>
            <Link className ="navlink" to="/saved"> <span>Saved Houses</span></Link>
      
   
        </nav>
        <hr />
       
    </div>
  )
}

export default Navbar