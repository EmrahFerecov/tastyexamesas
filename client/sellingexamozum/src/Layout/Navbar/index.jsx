import React from 'react'
import "./index.scss"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id='navbar'>
     <div className='navbox'>
     <div className='navleft'>
    <button className='btn'>Tasty</button>
     </div>
    <div className='navright'>
    <NavLink to={"/"}>Home</NavLink>
    <NavLink to={"/addpage"}>AddPage</NavLink>
    <NavLink to={"/wishlist"}>Wishlist</NavLink>
    <NavLink to={"/detail/:id"}>Detail</NavLink>
    <Link to={"/menu"}>Menu</Link>
    <Link to={"/about"}>About</Link>
    <Link to={"/contact"}>Contact</Link>
    </div>

     </div>



    </nav>
  )
}

export default Navbar