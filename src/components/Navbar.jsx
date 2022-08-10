import React from 'react'
import logo from "../images/logo.svg"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/">
            <img src={logo} alt="logo" />

            </Link>
            <Link to="/">HOME</Link>
            <Link to="/rooms">Rooms</Link>
   
        </nav>
       
    </div>
  )
}

export default Navbar