import React , {useContext} from 'react'
import logo from "../images/logos.png"
import {Link} from "react-router-dom"
import { RoomContext } from '../context'


const Navbar = () => {
  const {saved} = useContext(RoomContext)
  return (
    <div>
        <nav>
            <Link to="/">
            <img className="logo" src={logo} alt="logo" />

            </Link>
            <Link className="navlink" to="/">Home</Link>
            <Link className ="navlink" to="/rooms">Rooms</Link>
            <Link className ="navlink" to="/saved"> <span>saved</span> <span>{saved.length}</span></Link>
            <Link className ="navlink" to="/video">video</Link>
   
        </nav>
        <hr />
       
    </div>
  )
}

export default Navbar